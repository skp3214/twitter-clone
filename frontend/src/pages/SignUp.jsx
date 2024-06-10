import React, { useState } from 'react'
import axios from "axios";
const SignUp = () => {
    const [form, setform] = useState({
        username: '',
        fullname: '',
        email: '',
        password: ''
    })
    const [userCreated, setuserCreated] = useState(false)
    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/auth/signup', form);
            console.log(response.data)
            if (response) {
                setuserCreated(true);
            }
        }
        catch (err) {
            console.log("error in registering")
        }
    }

    return (
        <div>
            <div>
                {!userCreated ? <h1>Create User</h1> : <h1>User Created</h1>}
                <form onSubmit={handleSubmit} >
                    <div>
                        <label>UserName:</label>
                        <input
                            type="text"
                            name='username'
                            value={form.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>FullName:</label>
                        <input
                            type="text"
                            name='fullname'
                            value={form.fullname}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            name='password'
                            value={form.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type='submit'>Register</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp