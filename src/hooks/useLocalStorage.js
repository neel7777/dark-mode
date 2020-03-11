import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
    const [storedvalue, setStoredvalue] = useState(()=>{
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    const setValue = value => {
        setStoredvalue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    }
    return [storedvalue, setValue];

}