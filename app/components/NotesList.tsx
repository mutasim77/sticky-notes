"use client"

import { useEffect, useState } from 'react';
import { Typography } from '@mui/joy';
import { getListNotes } from '../../services/localStorage';
import Note from './Note';

const NotesList = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        setNotes(getListNotes());
    }, []);

    return (
        <ul className="notes-list flex gap-10 mt-10 flex-wrap justify-center">
            {notes.map((note: any, inx) => (
                <Note key={note.id} color={note.color} isOdd={inx}>
                    <Typography level="h4" sx={{ textAlign: 'center', mb: 1 }} noWrap>{note.title}</Typography>
                    <p>{note.note}</p>
                    <h3 className='mt-[140px] text-[#565656]'>{note.date}</h3>
                </Note>
            ))}
        </ul>
    )
}

export default NotesList;
