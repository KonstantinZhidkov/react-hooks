import React from 'react';
import {BrowserRouter} from "react-router-dom";
import 'components/App/App.css';

import Header from 'components/Header/Header';
import AppRoutes from 'pages/routes';


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
