"use client"

import { Fragment, useState, FormEventHandler } from "react";
import { TextField, Button } from '@mui/material';
import { Typography, Textarea } from '@mui/joy';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import CustomModal from "./CustomModal";
import RadioSelect from './RadioSelect';
import { useRouter } from 'next/navigation';
import { notes } from '../../constants/index.js';

const AddSticks = () => {
    const router = useRouter();
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [newNoteValue, setNewNoteValue] = useState<string>('');
    const [newTitleValue, setNewTitleValue] = useState<string>('');

    const handleSubmitNewNote: FormEventHandler<HTMLFormElement> = (e) => {

        e.preventDefault();
        // add to localStorage
        notes.push({ title: newTitleValue, note: newNoteValue });

        setNewNoteValue('');
        setNewTitleValue('');
        setModalOpen(false);

        router.refresh();
    }

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
                        onChange={(e) => setNewNoteValue(e.target.value)}
                    />

                    <Textarea
                        placeholder="Write you note"
                        sx={{ overflow: 'scroll', height: '100px', bgColor: 'red' }}
                    />
                    <RadioSelect />
                    <Button type="submit" variant="contained" style={{ backgroundColor: '#1976d2' }}>Add</Button>
                </form>
            </CustomModal>
        </Fragment>

    )
}

export default AddSticks;
