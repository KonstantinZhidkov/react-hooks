import React from 'react';
import {range} from "utils";

import PaginationItem from "./PaginationItem";


const Pagination = ({total, limit, url, currentPage}) => {
    const pagesCount = Math.ceil(total / limit);
    const pages = range(1, pagesCount);

    return (
        <ul className='pagination'>
            {pages.map(page => (
                <PaginationItem key={page} page={page} currentPage={currentPage} url={url} />
            ))}
        </ul>
    );
};

export default Pagination;
