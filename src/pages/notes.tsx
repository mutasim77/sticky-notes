import MainContainer from "@/app/components/MainContainer";
import Header from "@/app/components/UI/Header";
import AddNote from "@/app/components/AddNote";
import NotesList from "@/app/components/NotesList";
import { useState, useEffect } from "react";
import { ICategories } from "@/types/sticks.jsx";
import { getListNotes, getListCategories } from '../../services/localStorage';


const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [categories, setCategories] = useState([]);
    const [alignment, setAlignment] = useState<string | null>('');

    // For notes
    useEffect(() => {
        setNotes(getListNotes());
    }, []);

    // For categories
    // TODO : find dependency for this hook
    useEffect(() => {
        setCategories(getListCategories());
    }, []);

    return (
        <MainContainer keywords="notes page, notes, sticky notes" title=" Note">
            <Header />
            <section className="notes-board w-[1130px] m-auto mt-[100px] ml-[280px] h-[100vh]">
                <header className="board-header flex items-center justify-between">
                    <ul className="flex gap-3">
                        <li>All</li>
                        {categories.map((category: ICategories) => (
                            <li key={category.id}>{category.title}</li>
                        ))}
                    </ul>
                    <AddNote notes={notes} setNotes={setNotes} />
                </header>
                <div className="">
                    <NotesList notes={notes} setNotes={setNotes} />
                </div>
            </section>
        </MainContainer>
    )
}

export default Notes;
