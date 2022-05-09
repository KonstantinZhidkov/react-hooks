import React from "react";
import {Link} from "react-router-dom";

import useFetch from "hooks/useFetch";


const Authentication = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [{isLoading, response, error}, doFetch] = useFetch('/users/login');

    console.log(isLoading, response, error);


    const handleSubmit = (event) => {
        event.preventDefault();
        doFetch({
            method: 'post',
            data: {
                user: {
                    email: '123@gmail.com',
                    password: '123'
                }
            }
        });
    };

    return (
        <div className="auth-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">Login</h1>
                        <p className="text-xs-center">
                            <Link to="/register">Need an account?</Link>
                        </p>
                        <form onSubmit={handleSubmit}>
                            <fieldset>
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
                                    Sign in
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