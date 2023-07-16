import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { getListCategories } from '../../../services/localStorage';
import { useEffect, useState } from 'react';
import { ICategories } from '../../../types/sticks';


interface CategorySelectProps {
    newCategory: string;
    setNewCategory: (category: string) => string | void
}

const CategorySelect: React.FC<CategorySelectProps> = ({ newCategory, setNewCategory }) => {
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        setCategoryList(getListCategories());
    }, [])

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Category</InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={newCategory}
                label="Category"
                onChange={(evt) => setNewCategory(evt.target.value)}
            >
                {categoryList.length > 0 ? (
                    categoryList.map((category: ICategories) => (
                        <MenuItem
                            key={category.id}
                            value={category.title}
                        >
                            {category.title}
                        </MenuItem>
                    ))
                ) : (
                    <div>No category</div>
                )
                }
            </Select>
        </FormControl>
    );
}

export default CategorySelect;
