import React from 'react';
import {BrowserRouter} from "react-router-dom";
import 'components/App/App.css';

import Header from 'components/Header/Header';
import CurrentUserChecker from "components/currentUserChecker/currentUserChecker";
import AppRoutes from 'pages/routes';
import {CurrentUserProvider} from "contexts/currentUser";


const App = () => {
    return (
        <CurrentUserProvider>
            <CurrentUserChecker>
                <BrowserRouter>
                    <Header/>
                    <AppRoutes/>
                </BrowserRouter>
            </CurrentUserChecker>
        </CurrentUserProvider>
    );
}

export default App;
