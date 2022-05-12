import React from "react";
import {Link, useLocation, useParams, Navigate} from "react-router-dom";

import useFetch from "hooks/useFetch";
import useLocalStorage from "hooks/useLocalStorage";


const Authentication = () => {
    const location = useLocation();
    const params = useParams();
    const isLogin = location.pathname === '/login';
    const pageTitle = isLogin ? 'Sign In' : 'Sign Up';
    const descriptionLink = isLogin ? '/register' : '/login';
    const descriptionText = isLogin ? 'Need an account?' : 'Have an account?';
    const apiUrl = isLogin ? '/users/login' : '/users';
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [isSuccessfulSubmit, setIsSuccessfulSubmit] = React.useState(false);
    const [{isLoading, response, error}, doFetch] = useFetch(apiUrl);
    const [token, setToken] = useLocalStorage('token');

    console.log(location, params, isLogin, token);


    const handleSubmit = (event) => {
        event.preventDefault();
        const user = isLogin ? {email, password} : {email, password, username};
        doFetch({
            method: 'post',
            data: {
                user
            }
        });
    };

    React.useEffect(() => {
        if (!response) {
            return;
        }
        setToken(response.user.token);
        setIsSuccessfulSubmit(true);
    }, [response, setToken]);

    if (isSuccessfulSubmit) {
        return <Navigate to="/" />
    }

    return (
        <div className="auth-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">{pageTitle}</h1>
                        <p className="text-xs-center">
                            <Link to={descriptionLink}>{descriptionText}</Link>
                        </p>
                        <form onSubmit={handleSubmit}>
                            <fieldset>
                                {!isLogin && (
                                    <fieldset className="form-group">
                                        <input type="text"
                                               className="form-control form-control-lg"
                                               placeholder="Username"
                                               value={username}
                                               onChange={event => setUsername(event.target.value)}
                                        />
                                    </fieldset>
                                )}
                                <fieldset className="form-group">
                                    <input type="email"
                                           className="form-control form-control-lg"
                                           placeholder="Email"
                                           value={email}
                                           onChange={event => setEmail(event.target.value)}
                                    />
                                </fieldset>
                                <fieldset className="form-group">
                                    <input type="password"
                                           className="form-control form-control-lg"
                                           placeholder="Password"
                                           value={password}
                                           onChange={event => setPassword(event.target.value)}
                                    />
                                </fieldset>
                                <button
                                    className="btn btn-lg btn-primary pull-xs-right"
                                    type="submit"
                                    disabled={isLoading}
                                >
                                    {pageTitle}
                                </button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Authentication;