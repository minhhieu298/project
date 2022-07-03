import React, { useEffect, useRef, useState } from 'react'
import Hamburger from './Hamburger';
import { Link } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io'
import { useSelector } from 'react-redux';

const navLink = [
    {
        title: 'home',
        path: '/'
    },
    {
        title: 'product',
        path: '/products'
    },
]
const Header = () => {
    const scrollRef = useRef(null);
    const [open, setOpen] = useState(false);
    const { cartItems, heartProduct } = useSelector(state => state.cart)
    const login = localStorage.getItem('login')
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                scrollRef.current.classList.add('sticky')
            } else {
                scrollRef.current.classList.remove('sticky')
            }
        })

        window.addEventListener('load', () => {
            if (window.scrollY > 0) {
                scrollRef.current.classList.add('sticky')
            }
        })

        return () => {
            window.removeEventListener('scroll', () => { })
            window.removeEventListener('load', () => { })
        }
    })
    return (
        <header className='w-full'>
            <div ref={scrollRef} className='flex fixed w-full h-16 justify-between items-center inset-0 sm:px-5 md:px-5 lg:px-10 xl:px-10 px-5 transition duration-500 ease-in-out'>
                <Hamburger open={open} setOpen={setOpen} />
                <nav>
                    <ul className='block'>
                        {
                            navLink.map(item => (
                                <li key={item.title} className='inline-block uppercase nav-animation'>
                                    <Link to={item.path} className='p-5 font-semibold'>{item.title}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <div className='flex items-center user justify-center nav-animations'>
                    <span className='relative'>
                        <Link to="/cart"><AiIcons.AiOutlineShoppingCart className="text-2xl" />
                            {
                                cartItems.length ? <span className='absolute top-0 left-5 w-5 h-5 rounded-full flex items-center justify-center text-white bg-red-500'>{cartItems.length}</span> : <></>
                            }
                        </Link>
                    </span>
                    {
                        login ? <span>
                            <Link to='/create'><IoIcons.IoMdCreate className="text-2xl" /></Link>
                        </span> : <span>
                            <Link to='/login'><AiIcons.AiOutlineUser className="text-2xl" /></Link>
                        </span>
                    }
                    <span className='relative'>
                        <Link to='/heart'><AiIcons.AiOutlineHeart className="text-2xl" />
                            {
                                heartProduct.length ? <span className='absolute top-0 left-5 w-5 h-5 rounded-full flex items-center justify-center text-white bg-red-500'>{heartProduct.length}</span> : <></>
                            }
                        </Link>
                    </span>
                </div>
            </div>
        </header>
    )
}

export default Header