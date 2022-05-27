import React from 'react';

import useFetch from "hooks/useFetch";
import Feed from "components/Feed/Feed";


const GlobalFeed = () => {
    const apiUrl = '/articles?limit=10&offset=0'
    const [{response, isLoading, error}, doFetch] = useFetch(apiUrl);
    console.log(response);

    React.useEffect(() => {
        doFetch();
    }, [doFetch]);

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
                            <Feed articles={response.articles}></Feed>
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
