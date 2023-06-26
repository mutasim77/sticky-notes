"use client"

import { Typography } from '@mui/joy';
import { notes } from '../../constants/index.js';
import Note from './Note';

const NotesList = () => {
    return (
        <ul className="notes-list flex gap-5 mt-10 flex-wrap justify-center">
            {notes.map((note, inx) => (
                <Note key={inx}>
                    <Typography level="h3" noWrap>National Parks</Typography>
                    {note}
                </Note>
            ))}
        </ul>
    )
}

export default NotesList;
