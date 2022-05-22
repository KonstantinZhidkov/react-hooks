import React from "react";


const BackendErrorMessages = ({backendErrors}) => {
    const errorMessages = Object.keys(backendErrors).map(name => {
        const messages = backendErrors[name].join(' ');
        return `${name} ${messages}`;
    });

    return(
        <ul className="error-messages">
            {errorMessages.map(eMessage => (
                <li key={eMessage}>{eMessage}</li>
            ))}
        </ul>
    );
}

export default BackendErrorMessages;
