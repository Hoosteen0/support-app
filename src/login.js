import React, {useEffect, useState} from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`login clicked: ${count} times`);
    });
    const HandleSubmit = (e) => {
        e.preventDefault();
        // accept all logins for the purposes of the test.

    };

    return (
        <div>
            <h2>Login Page</h2>
            <form onSubmit={HandleSubmit}>
                <div>
                    <label>Username/Email:</label>
                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" onClick={() => setCount(count + 1)}>Login</button>
            </form>
        </div>
    );

};

export default Login;