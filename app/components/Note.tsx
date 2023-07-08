"use client"

import { Card } from '@mui/material';

const style = {
    width: '250px',
    height: '250px',
    color: '#000',
    padding: '15px',
    overflowY: 'scroll'
}

interface NotesListProps {
    color: string,
    isOdd: boolean,
    children: React.ReactNode,
}

const Note: React.FC<NotesListProps> = ({ children, color, isOdd }) => {
    return (
        <li
            style={isOdd ?
                { transform: 'rotate(-6deg)' } :
                { transform: 'rotate(3deg)' }}
        >
            <Card
                sx={{ bgcolor: color, ...style }}
                variant="outlined"
            >
                {children}
            </Card>
        </li>
    )
}

export default Note;
