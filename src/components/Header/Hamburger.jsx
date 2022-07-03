import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

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

const Hamburger = ({ open, setOpen }) => {
    const hamRef = useRef();

    const openNav = () => {
        if (hamRef.current.classList.contains('closed')) {
            hamRef.current.classList.remove('closed')
            hamRef.current.classList.add('opened')
        } else {
            hamRef.current.classList.add('closed')
            hamRef.current.classList.remove('opened')
        }
        setOpen(!open)
    }

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                setOpen(false)
            }
            if (window.innerWidth > 768 && hamRef.current.classList.contains('opened')) {
                hamRef.current.classList.add('closed')
                hamRef.current.classList.remove('opened')
            }
        })

        return () => {
            window.removeEventListener('resize', () => { })
        }
    })
    return (
        <React.Fragment>
            <div className="hamburger">
                <button onClick={openNav} className='closed' ref={hamRef}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            {
                open ? (<div className={`fixed top-16 bg-white w-full h-full block lg:hidden ${open ? 'left-0' : '-left[100%]'}`}>
                    <ul>
                        {
                            navLink.map(item => (
                                <li key={item.title} className='uppercase h-16 flex items-center px-2 font-bold'>
                                    <Link to={item.path} className='w-full h-16 flex items-center' onClick={() => {
                                        if (hamRef.current.classList.contains('opened')) {
                                            hamRef.current.classList.add('closed')
                                            hamRef.current.classList.remove('opened')
                                        }
                                        setOpen(!open)
                                    }}>{item.title}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>) : <></>
            }
        </React.Fragment >
    )
}

export default Hamburger