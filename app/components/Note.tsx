"use client"

import { Card } from '@mui/material';

const style = {
    width: '250px',
    height: '250px',
    // backgroundColor: '#a869d8',
    color: '#000',
    padding: '15px',
    overflowY: 'scroll'
}

interface NotesListProps {
    children: React.ReactNode,
    color: string
}

const Note: React.FC<NotesListProps> = ({ children, color }) => {
    console.log(color);

    return (
        <li>
            <Card sx={{ bgcolor: color, ...style }} variant="outlined">{children}</Card>
        </li>
    )
}

export default Note;
