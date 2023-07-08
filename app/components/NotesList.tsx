"use client"

import { Typography } from '@mui/joy';
import Note from './Note';
import { INotes } from '../../types/sticks';

interface NotesListProps {
    notes: INotes[];
}

const NotesList: React.FC<NotesListProps> = ({ notes }) => {
    return (
        <ul className="notes-list flex gap-10 mt-10 flex-wrap justify-center">
            {notes.map((note: INotes, inx) => (
                <Note key={note.id} color={note.color} isOdd={inx % 2 === 0}>
                    <Typography level="h4" sx={{ textAlign: 'center', mb: 1 }} noWrap>{note.title}</Typography>
                    <p>{note.note}</p>
                    <h3 className='mt-[140px] text-[#565656]'>{note.date}</h3>

                </Note>
            ))}
        </ul>
    )
}

export default NotesList;
