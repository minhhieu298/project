import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Helmet from './utils/Helmet';
import { Link } from 'react-router-dom'

const Login = () => {
    const [user, setUser] = useState({ username: '', password: '' })
    const register = JSON.parse(localStorage.getItem('register'));

    const navigate = useNavigate();
    const handleChange = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.username === register?.username && user.password === register?.password) {
            navigate('/')
            localStorage.setItem('login', JSON.stringify(true))
        } else {
            alert('username or password is not correct')
        }
    }
    return (
        <Helmet title='Login Admin'>
            <div className='container mx-auto mt-16 flex justify-center'>
                <form className='w-1/2 translate-y-72' onSubmit={handleSubmit}>
                    <input type="text" value={user.username} onChange={handleChange} name='username' className='border rounded-md outline-none p-2 text-base w-full my-2' placeholder='username' />
                    <input type="password" value={user.password} onChange={handleChange} name='password' className='border rounded-md outline-none p-2 text-base w-full my-2' placeholder='password' />
                    <button className='w-full mt-5 outline-none bg-indigo-600 hover:bg-indigo-500 transition duration-500 text-white uppercase font-semibold py-2 rounded-md'>Login</button>
                    <Link to='/register'>
                        <p className='text-center mt-2 underline text-indigo-500'>Register</p>
                    </Link>
                </form>
            </div>
        </Helmet>
    )
}

export default Login