import { Fragment, useState, FormEventHandler } from "react";
import { TextField, Button } from '@mui/material';
import { Typography } from '@mui/joy';
import CustomModal from "./UI/CustomModal";
import RadioSelect from "./UI/RadioSelect";
import { v4 as uuidv4 } from 'uuid';
import { addCategory } from '../../services/localStorage';


const AddCategory = () => {
    const [newCategory, setNewCategory] = useState<string>('');
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [newColorValue, setNewColorValue] = useState<string>('');

    const handleSubmitNewCategory: FormEventHandler<HTMLFormElement> = (evt) => {
        evt.preventDefault();

        addCategory({
            id: uuidv4(),
            title: newCategory,
            color: newColorValue
        });

        setNewCategory('');
        setModalOpen(false);
    }

    return (
        <Fragment>
            <button
                onClick={() => setModalOpen(true)}
            >
                Add new
            </button>

            <CustomModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
                <form className="flex flex-col gap-5" onSubmit={handleSubmitNewCategory}>
                    <Typography color="info" level="h4" className="text-center">New Category</Typography>
                    <TextField
                        id="outlined-basic"
                        label="Category"
                        variant="outlined"
                        value={newCategory}
                        onChange={(evt) => setNewCategory(evt.target.value)}
                    />
                    <RadioSelect setNewColorValue={setNewColorValue} />
                    <Button type="submit" variant="contained" style={{ backgroundColor: '#1976d2' }}>Add</Button>
                </form>
            </CustomModal>
        </Fragment>
    )
}

export default AddCategory;
