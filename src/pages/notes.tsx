import MainContainer from "@/app/components/MainContainer";
import Header from "@/app/components/UI/Header";
import AddNote from "@/app/components/AddNote";
import NotesList from "@/app/components/NotesList";
import ToggleButtons from "@/app/components/UI/ToggleButtons";
import { useState, useEffect } from "react";
import { ICategories, INotes } from "@/types/sticks.jsx";
import { getListNotes, getListCategories } from '../../services/localStorage';


const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [categories, setCategories] = useState([]);
    const [valueCategory, setValueCategory] = useState<string>('All');

    // For notes
    useEffect(() => {
        setNotes(getListNotes());
    }, []);

    // For categories
    // TODO : find dependency for this hook
    useEffect(() => {
        setCategories(getListCategories());
    }, []);


    const filteredData = notes.filter((note: INotes) => {
        if (valueCategory === 'All') {
            return note;
        } else {
            return note.category === valueCategory
        }
    });

    return (
        <MainContainer keywords="notes page, notes, sticky notes" title=" Note">
            <Header />
            <section className="notes-board w-[1130px] m-auto mt-[100px] ml-[280px] h-[100vh]">
                <header className="board-header flex items-center justify-between">
                    <ToggleButtons
                        valueCategory={valueCategory}
                        setValueCategory={setValueCategory}
                        categories={categories}
                    />
                    <AddNote notes={notes} setNotes={setNotes} />
                </header>
                <div className="">
                    <NotesList notes={filteredData} setNotes={setNotes} />
                </div>
            </section>
        </MainContainer>
    )
}

export default Notes;
