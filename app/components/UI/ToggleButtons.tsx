import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import React, { useState } from 'react';
import { styled } from "@mui/material/styles";
import { ICategories } from '@/types/sticks.jsx';

type ToggleButtonsProps = {
    valueCategory: string;
    categories: ICategories[];
    setValueCategory: (value: string) => string | void
}

const ToggleButtons: React.FC<ToggleButtonsProps> = ({ valueCategory, setValueCategory, categories }) => {
    const handleCategory = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setValueCategory(newAlignment);
    };

    return (
        <ToggleButtonGroup
            value={valueCategory}
            exclusive
            onChange={handleCategory}
            aria-label="text alignment"
            color='primary'
            size='small'
        >
            <MuiToggleButton value="All" aria-label="left aligned">
                All
            </MuiToggleButton>
            {categories.map((category: ICategories) => (
                <MuiToggleButton key={category.id} value={category.title} aria-label="left aligned">
                    {category.title}
                </MuiToggleButton>
            ))}
        </ToggleButtonGroup>
    );
}

const MuiToggleButton = styled(ToggleButton)({
    "&.Mui-selected, &.Mui-selected:hover": {
        color: "white",
        backgroundColor: '#6961c0'
    }
});

export default ToggleButtons;
