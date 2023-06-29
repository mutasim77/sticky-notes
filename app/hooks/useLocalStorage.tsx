import { useState, useEffect } from "react";

const useLocalStorage = (key: string, defaultValue: any) => {
    const [value, setValue] = useState(() => {
        let currentValue;

        try {
            currentValue = JSON.parse(
                localStorage.getItem(key) || String(defaultValue)
            );
        } catch (error) {
            currentValue = defaultValue;
        }

        return currentValue;
    });

    useEffect(() => {
        if (localStorage.getItem(key)) {
            console.log('you have already');
            const allData = getAllDataFromLocalStorage(key, value);

            localStorage.setItem(key, JSON.stringify(allData));
        } else {
            console.log('First time');
            localStorage.setItem(key, JSON.stringify(value));
        }

    }, [value, key]);

    return [value, setValue];
}


function getAllDataFromLocalStorage(key: string, newValue: any) {
    const prevData = JSON.parse(localStorage.getItem(key) || String(newValue));
    prevData.push(...newValue)

    return prevData;
}

export default useLocalStorage;