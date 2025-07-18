import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API = import.meta.env.VITE_API_URL

export default function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMEssage] = useState('');

    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${API}/auth/register`, {
                username,
                email,
                password
            });
            const userProfile = response.data;
            console.log("Registered User: ", userProfile);
            
            navigate('/');
        } catch (err) {
            console.log(err.response?.data || err.message);
            setErrorMEssage(err.response?.data || err.message);
        }
    }

    return (
        <div className='w-screen h-screen bg-gray-500 flex items-center justify-center'>
            <div className='w-96 h-[450px] flex flex-col justify-center gap-4 bg-white rounded-[10px] p-10'>
                <h1 className='text-2xl text-center font-bold'>Sign up</h1>
                <form className='flex flex-col p-2 gap-2' action="" onSubmit={handleRegister} >
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        value={username}
                        className='border py-1 px-1 rounded'
                        placeholder='Enter your username'
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        value={email}
                        className='border py-1 px-1 rounded'
                        placeholder='Enter your email...'
                        onChange={(e) => setEmail(e.target.value)}    
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                        type="text"
                        value={password}
                        className='border py-1 px-1 rounded'
                        placeholder='Enter your password...' 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type='submit' className=' bg-blue-500 text-white px-2 py-1 mt-2'>Register</button>
                </form>
                <p className='text-center'>Already have an account? <Link to={'/'}>Sign in</Link> </p>
            </div>

        </div>
    )
}