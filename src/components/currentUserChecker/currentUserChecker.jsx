import React from "react";

import useFetch from "hooks/useFetch";
import {CurrentUserContext} from "contexts/currentUser";
import useLocalStorage from "hooks/useLocalStorage";


const CurrentUserChecker = ({children}) => {
    const [{response}, doFetch] = useFetch('/user');
    const [, setCurrentUserState] = React.useContext(CurrentUserContext);
    const [token] = useLocalStorage('token');

    React.useEffect(() => {
        if (!token) {
            setCurrentUserState(state => ({
                ...state,
                isLoggedIn: false
            }));

            return;
        }

        doFetch();

        setCurrentUserState(state => ({
            ...state,
            isLoading: true
        }));
    }, [setCurrentUserState, token, doFetch]);

    React.useEffect(() => {
        if (!response) {
            return;
        }

        setCurrentUserState(state => ({
            ...state,
            isLoggedIn: true,
            isLoading: false,
            currentUser: response.user
        }));
    }, [response, setCurrentUserState]);

    return children
}

export default CurrentUserChecker;
