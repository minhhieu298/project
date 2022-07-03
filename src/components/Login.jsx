import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Helmet from './utils/Helmet'

const Login = ({ data }) => {
    const [user, setUser] = useState({ username: '', password: '' })
    const navigate = useNavigate();
    const handleChange = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.username === data.username && data.password === user.password) {
            navigate('/create')
            localStorage.setItem('login', JSON.stringify(true))
        }
    }
    return (
        <Helmet title='Login Admin'>
            <div className='container mx-auto mt-16 flex justify-center'>
                <form className='w-1/2 translate-y-72' onSubmit={handleSubmit}>
                    <input type="text" value={user.username} onChange={handleChange} name='username' className='border rounded-md outline-none p-2 text-base w-full my-2' placeholder='admin' />
                    <input type="password" value={user.password} onChange={handleChange} name='password' className='border rounded-md outline-none p-2 text-base w-full my-2' placeholder='admin123' />
                    <button className='w-full mt-5 outline-none bg-indigo-600 hover:bg-indigo-500 transition duration-500 text-white uppercase font-semibold py-2 rounded-md'>Login</button>
                </form>
            </div>
        </Helmet>
    )
}

export default Login