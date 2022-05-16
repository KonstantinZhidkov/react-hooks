import React from 'react';
import {BrowserRouter} from "react-router-dom";
import 'components/App/App.css';

import Header from 'components/Header/Header';
import AppRoutes from 'pages/routes';
import {CurrentUserProvider} from "contexts/currentUser";


const App = () => {
    return (
        <CurrentUserProvider>
            <BrowserRouter>
                <Header />
                <AppRoutes />
            </BrowserRouter>
        </CurrentUserProvider>
    );
}

export default App;
