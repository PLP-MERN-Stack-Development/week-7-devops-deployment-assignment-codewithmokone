import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'

const API = import.meta.env.VITE_API_URL

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(`${API}/auth/login`, {
                email,
                password
            });
            // login(res.data);
            console.log(res.data);

            navigate('home');
        } catch (error) {
            console.log(error.response?.data || error.message);
            setErrorMessage(error.response?.data || error.message)
        }
    }

    return (
        <div className='w-screen h-screen bg-gray-500 flex items-center justify-center'>
            <div className='w-90 h-90 flex flex-col justify-center gap-3 bg-white rounded-[10px] p-10'>
                <h1 className='text-2xl text-center font-bold'>Sign in</h1>
                <form className='flex flex-col p-2 gap-2' action="" onSubmit={handleLogin} >
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        // value={email}
                        className='border py-1 px-1 rounded'
                        placeholder='Enter your email...'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        // value={password}
                        className='border py-1 px-1 rounded'
                        placeholder='Enter your password...'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type='submit' className='bg-blue-500 text-white px-2 py-1 mt-2'>Login</button>
                    {errorMessage ? <p className='text-center text-red-500'>{errorMessage}</p> : null}
                </form>
                <p className='text-center'>Don't have an account? <Link to={'register'}>Sign up</Link> </p>
            </div>

        </div>
    )
}