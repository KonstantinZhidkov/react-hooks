import React from "react";
import {Routes, Route} from 'react-router-dom';

import GlobalFeed from "pages/globalFeed/globalFeed";
import Article from "pages/article/article";
import Authentication from "pages/authentication/authentication";


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<GlobalFeed />} exact />
            <Route path="/login" element={<Authentication />} />
            <Route path="/register" element={<Authentication />} />
            <Route path="/article/:slug" element={<Article />} />
        </Routes>
    )
}

export default AppRoutes;
