import React from "react";

const useLocalStorage = (key, initialValue = "") => {
    const [value, setValue] = React.useState(() => {
        return localStorage.getItem(key) || initialValue;
    });

    React.useEffect(() => {
        localStorage.setItem(key, value);
    }, [key, value]);

    return [value, setValue];
}

export default useLocalStorage;
