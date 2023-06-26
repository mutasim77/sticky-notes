"use client"

import { Fragment, useState, FormEventHandler } from "react";
import { TextField, Button } from '@mui/material';
import CustomModal from "./CustomModal";

const AddSticks = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [newStickValue, setnewStickValue] = useState<string>('');

    return (
        <Fragment>
            <Button
                onClick={() => setModalOpen(!modalOpen)}
                variant="contained"
                style={{ backgroundColor: '#1976d2' }}
                className="flex m-auto mt-10"
            >
                Add new task
            </Button>

            <CustomModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
                <form className="flex flex-col gap-5">
                    <TextField
                        id="outlined-basic"
                        label="Your Note"
                        variant="outlined"
                        value={newStickValue}
                        onChange={(e) => setnewStickValue(e.target.value)}
                    />
                    <Button variant="contained" style={{ backgroundColor: '#1976d2' }}>Submit</Button>
                </form>
            </CustomModal>
        </Fragment>

    )
}

export default AddSticks;
