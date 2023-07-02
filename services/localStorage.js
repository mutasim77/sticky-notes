export const getListNotes = () => {
    if (!localStorage["notes"]) {
        localStorage["notes"] = "[]";
    }

    let notes = localStorage["notes"];
    notes = JSON.parse(notes);
    return notes;
};

export const addNotes = (note) => {
    const notes = getListNotes();
    notes.push(note);
    localStorage["notes"] = JSON.stringify(notes);
};

/* 

export const removeEmployee = (id) => {
    let employees = getListEmployees();
    employees = employees.filter((employee) => employee.id !== id);
    localStorage["employees"] = JSON.stringify(employees);
};

export const getEmployeeById = (id) => {
    const employees = getListEmployees();
    const employee = employees.find((employee) => employee.id === id);
    return employee;
};

export const editEmployee = (id, newEmployee) => {
    let employees = getListEmployees();
    employees = employees.filter((employee) => employee.id !== id);
    employees.push(newEmployee);
    localStorage["employees"] = JSON.stringify(employees);
};

*/