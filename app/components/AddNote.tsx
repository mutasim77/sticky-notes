"use client"

import { Fragment, useState, FormEventHandler, useEffect } from "react";
import { TextField, Button } from '@mui/material';
import { Typography } from '@mui/joy';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import CustomModal from "./CustomModal";
import RadioSelect from './RadioSelect';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import { addNotes, getListNotes } from '../../services/localStorage';
import { currentDate } from '../../utils/index';
import NotesList from "./NotesList";

const AddNote = () => {
    const router = useRouter();
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [newNoteValue, setNewNoteValue] = useState<string>('');
    const [newTitleValue, setNewTitleValue] = useState<string>('');
    const [newColorValue, setNewColorValue] = useState<string>('');
    const [notes, setNotes] = useState([]);

    //! Add New Note;
    const handleSubmitNewNote: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        addNotes({
            id: uuidv4(),
            date: currentDate(),
            title: newTitleValue,
            note: newNoteValue,
            color: newColorValue
        })

        setNotes(getListNotes());

        setNewNoteValue('');
        setNewTitleValue('');
        setModalOpen(false);

        router.refresh();
    }

    useEffect(() => {
        setNotes(getListNotes());
    }, []);


    return (
        <Fragment>
            <Button
                onClick={() => setModalOpen(!modalOpen)}
                variant="contained"
                style={{ backgroundColor: '#1976d2' }}
                className="flex m-auto mt-10"
            >
                <AddCircleOutlineOutlinedIcon sx={{ mr: 1 }} /> Add new note
            </Button>

            <CustomModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
                <form className="flex flex-col gap-5" onSubmit={handleSubmitNewNote}>
                    <Typography color="info" level="h4" className="text-center">New Note</Typography>
                    <TextField
                        id="outlined-basic"
                        label="Title"
                        variant="outlined"
                        value={newTitleValue}
                        onChange={(e) => setNewTitleValue(e.target.value)}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Note"
                        variant="outlined"
                        value={newNoteValue}
                        multiline
                        rows={5}
                        onChange={(e) => setNewNoteValue(e.target.value)}
                    />
                    <RadioSelect setNewColorValue={setNewColorValue} />
                    <Button type="submit" variant="contained" style={{ backgroundColor: '#1976d2' }}>Add</Button>
                </form>
            </CustomModal>

            <NotesList notes={notes} />
        </Fragment>

    )
}

export default AddNote;
