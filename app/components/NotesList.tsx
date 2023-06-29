"use client"

import { Typography } from '@mui/joy';
import { notes } from '../../constants/index.js';
import Note from './Note';

const NotesList = () => {
    return (
        <ul className="notes-list flex gap-10 mt-10 flex-wrap justify-center">
            {notes.map((note, inx) => (
                <Note key={note.id} color={note.color} isOdd={inx}>
                    <Typography level="h4" sx={{ textAlign: 'center', mb: 1 }} noWrap>{note.title}</Typography>
                    <p>{note.note}</p>
                </Note>
            ))}
        </ul>
    )
}

export default NotesList;
