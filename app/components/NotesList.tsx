"use client"

import { Typography } from '@mui/joy';
import Note from './Note';
import { INotes } from '../../types/sticks';
import DeleteIcon from '@mui/icons-material/Delete';
import { removeNotes, getListNotes } from '../../services/localStorage';

interface NotesListProps {
    notes: INotes[];
    setNotes: (notes: any) => any | void
}

const NotesList: React.FC<NotesListProps> = ({ notes, setNotes }) => {
    const deleteNotes = (id: string) => {
        removeNotes(id);
        setNotes(getListNotes());
    }

    return (
        <ul className="notes-list flex gap-10 mt-10 flex-wrap justify-center">
            {notes.map((note: INotes, inx) => (
                <Note key={note.id} color={note.color} isOdd={inx % 2 === 0}>
                    <Typography level="h4" sx={{ textAlign: 'center', mb: 1 }} noWrap>{note.title}</Typography>
                    <p>{note.note}</p>
                    <div className="flex items-end justify-between">
                        <h3 className='mt-[110px] text-[#565656]'>{note.date}</h3>
                        <div
                            className='cursor-pointer p-2 rounded border border-black'
                            onClick={() => deleteNotes(note.id)}
                        >
                            <DeleteIcon sx={{ color: '#000' }} />
                        </div>
                    </div>
                </Note>
            ))}
        </ul>
    )
}

export default NotesList;
