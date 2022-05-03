import React from 'react';
import {BrowserRouter} from "react-router-dom";
import './App.css';

import Header from '../Header/Header';
import AppRoutes from '../../pages/routes';

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <AppRoutes />
            </BrowserRouter>
        </div>
    );
}

export default App;
