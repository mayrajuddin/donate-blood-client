import { useState } from 'react';

const UserNameValidation = () => {
    const [userName, setUserName] = useState('');
    const [error, setError] = useState('');

    const usernameRegex = new RegExp(/^(?=.*[0-9])[a-zA-Z0-9]{4,10}$/);

    const handleChange = (event) => {
        setUserName(event.target.value);
        if (!usernameRegex.test(event.target.value)) {
            setError('Username must be 4-10 characters long, contain at least one digit, and can only contain letters and digits');
        } else {
            setError('');
        }
    };

    return [userName, error, handleChange];
};

export default UserNameValidation;