"use client"

import { Typography } from '@mui/joy';
import { notes, colors } from '../../constants/index.js';
import Note from './Note';

const NotesList = () => {
    return (
        <ul className="notes-list flex gap-5 mt-10 flex-wrap justify-center">
            {notes.map((note, inx) => (
                <Note key={inx} color={colors[inx]}>
                    <Typography level="h4" sx={{ textAlign: 'center', mb: 1 }} noWrap>{note.title}</Typography>
                    {note.note}
                </Note>
            ))}
        </ul>
    )
}

export default NotesList;
