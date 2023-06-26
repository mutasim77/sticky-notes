"use client"
import { Card } from '@mui/material';

const style = {
    width: '250px',
    height: '250px',
    backgroundColor: '#a869d8',
    color: '#fff',
    padding: '15px',
    overflowY: 'scroll'
}

interface NotesListProps {
    children: React.ReactNode
}

const Note: React.FC<NotesListProps> = ({ children }) => {
    return (
        <li style={{ fontFamily: 'Gloria Hallelujah, cursive', fontWeight: '700' }}>
            <Card sx={style} variant="outlined">{children}</Card>
        </li>
    )
}

export default Note;
