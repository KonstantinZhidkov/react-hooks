import React from "react";
import {stringify} from "query-string";
import {useLocation, useMatch} from "react-router-dom";

import useFetch from "hooks/useFetch";
import Feed from "components/Feed/Feed";
import Pagination from "components/Pagination/Pagination";
import {limit, getPaginator} from "utils";


const GlobalFeed = () => {
    const location = useLocation();
    const match = useMatch('/');
    const {offset, currentPage} = getPaginator(location.search);
    const stringifiedParams = stringify({
        limit,
        offset
    });
    const apiUrl = `/articles?${stringifiedParams}`;
    const [{response, isLoading, error}, doFetch] = useFetch(apiUrl);
    console.log(response);

    React.useEffect(() => {
        doFetch();
    }, [doFetch, currentPage]);

    return (
        <div className="home-page">
            <div className="banner">
                <div className="container">
                    <h1>Header</h1>
                    <p>Description</p>
                </div>
            </div>
            <div className="container page">
                <div className="row">
                    <div className="col-md-9">
                        {isLoading && <div>Loading...</div>}
                        {error && <div>Something went wrong</div>}
                        {!isLoading && response && (
                            <React.Fragment>
                                <Feed articles={response.articles} />
                                <Pagination total={response.articlesCount} limit={limit} url={match.pathname} currentPage={currentPage} />
                            </React.Fragment>
                        )}
                    </div>
                    <div className="col-md-3">
                        Popular tags
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GlobalFeed;
