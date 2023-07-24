//! NOTES
export const getListNotes = () => {
    if (!localStorage.getItem('notes')) {
        localStorage.setItem('notes', '[]');
    }
    const notes = JSON.parse(localStorage.getItem('notes'));
    return notes;
}

export const addNotes = (note) => {
    const notes = getListNotes();
    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));
};

export const removeNotes = (id) => {
    let notes = getListNotes();
    notes = notes.filter((note) => note.id !== id);
    localStorage.setItem('notes', JSON.stringify(notes));
};

//! CATEGORIES
export const getListCategories = () => {
    if (!localStorage.getItem('categories')) {
        localStorage.setItem('categories', '[]');
    }
    const categories = JSON.parse(localStorage.getItem('categories'));
    return categories;
}

export const addCategory = (category) => {
    const categories = getListCategories();
    categories.push(category);
    localStorage.setItem('categories', JSON.stringify(categories));
};

/* 
export const getnoteById = (id) => {
    const notes = getListNotes();
    const note = notes.find((note) => note.id === id);
    return note;
};

export const editNote = (id, newnote) => {
    let notes = getListNotes();
    notes = notes.filter((note) => note.id !== id);
    notes.push(newnote);
    localStorage["notes"] = JSON.stringify(notes);
};

*/