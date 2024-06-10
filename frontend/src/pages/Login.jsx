import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [login, setLogin] = useState({
        username: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setLogin({
            ...login, [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/auth/login', login);
            
            if (response) {
                console.log("login", response);
                navigate('/getallpost');
            }
        } catch (error) {
            console.log("error in login", error);
        }
    };

    return (
        <div>
            <div>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>UserName: </label>
                        <input
                            type="text"
                            name='username'
                            value={login.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>PassWord:</label>
                        <input
                            type="password"
                            name='password'
                            value={login.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type='submit'>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
