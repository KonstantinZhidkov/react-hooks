import React from 'react';
import axios from "axios";

const useFetch = url => {
    const baseUrl = 'https://conduit.productionready.io/api';
    const [isLoading, setIsLoading] = React.useState(false);
    const [response, setResponse] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [options, setOptons] = React.useState({}); // Additional variable. So we can use options both inside doFetch and useEffect

    const doFetch = (options = {}) => {
        setOptons(options);
        setIsLoading(true);
    };

    React.useEffect(() => {
        if (!isLoading) {
            return;
        }

        axios(baseUrl + url, options)
            .then(resolve => {
                setIsLoading(false);
                setResponse(resolve.data);
                console.log(resolve);
            }).catch(error => {
                setIsLoading(false);
                setError(error.response.data);
                console.log(error);
            })
        }, [isLoading]);

        return [{isLoading, response, error}, doFetch];
    }

export default useFetch;