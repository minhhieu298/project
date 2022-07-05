import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Helmet from './utils/Helmet'

const Register = () => {
    const [data, setData] = useState({ username: '', password: '' })
    const handleChange = e => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }
    const handleSubmit = e => {
        e.preventDefault()
        if (data.password.length < 8) {
            alert('Password must be at least 8 characters')
        }
        else {
            alert('Success account');
            setData({ ...data })
            localStorage.setItem('register', JSON.stringify(data));
        }

    }
    return (
        <Helmet title='Register'>
            <div className='container mx-auto mt-16 flex justify-center'>
                <form className='w-1/2 translate-y-72' onSubmit={handleSubmit}>
                    <input type="text" onChange={handleChange} name='username' value={data.username} className='border rounded-md outline-none p-2 text-base w-full my-2' placeholder='username' required />
                    <input type="password" onChange={handleChange} name='password' value={data.password} className='border rounded-md outline-none p-2 text-base w-full my-2' placeholder='password' required />
                    <button className='w-full mt-5 outline-none bg-indigo-600 hover:bg-indigo-500 transition duration-500 text-white uppercase font-semibold py-2 rounded-md'>Register</button>
                    <Link to='/login'>
                        <p className='text-center mt-2 underline text-indigo-500'>Login</p>
                    </Link>
                </form>
            </div>
        </Helmet>
    )
}

export default Register