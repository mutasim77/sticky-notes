"use client"

import { Fragment, useState } from "react";
import { TextField, Button } from '@mui/material';
import { Typography, Textarea } from '@mui/joy';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import CustomModal from "./CustomModal";
import RadioSelect from './RadioSelect';

const AddSticks = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [newStickValue, setNewStickValue] = useState<string>('');
    const [newTitleValue, setNewTitleValue] = useState<string>('');

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
                <form className="flex flex-col gap-5">
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
                        value={newStickValue}
                        onChange={(e) => setNewStickValue(e.target.value)}
                    />

                    <Textarea
                        placeholder="Write you note"
                        sx={{ overflow: 'scroll', height: '100px', bgColor: 'red' }}
                    />
                    <RadioSelect />
                    <Button variant="contained" style={{ backgroundColor: '#1976d2' }}>Add</Button>
                </form>
            </CustomModal>
        </Fragment>

    )
}

export default AddSticks;
