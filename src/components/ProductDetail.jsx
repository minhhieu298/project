import React, { useState } from 'react'
import Helmet from './utils/Helmet';
import { products } from '../data'
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/action/cartAction';


const ProductDetail = () => {
    const { id } = useParams();
    const html = products.find(e => e.id === Number(id));
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState(undefined);
    const dispatch = useDispatch();
    const check = JSON.parse(localStorage.getItem('login'));


    const update = (type) => {
        if (type === 'minus') {
            setQuantity(prev => prev - 1 < 1 ? 1 : prev - 1)
        }
        if (type === 'add') {
            setQuantity(prev => prev + 1)
        }
    }
    const addCart = () => {
        if (size === undefined) {
            alert('Choose your size')
        } else {
            let product = {
                id: html.id,
                name: html.name,
                price: html.price,
                image: html.image,
                size: size,
                quantity
            }
            if (check) {
                dispatch(addToCart(product))
            } else {
                alert('login to buy something')
            }
        }
    }

    return (
        <Helmet title="">
            <div className='container mx-auto flex xl:flex-row flex-col mt-16 p-3'>
                <div className='xl:w-1/3 border w-full p-2'>
                    <img src={html.image} alt={html.name} />
                </div >
                <div className='xl:w-2/3 xl:px-3 xl:pt-3 w-full flex flex-col'>
                    <h1 className='xl:text-3xl font-medium text-xl'>{html.name}</h1>
                    <div className='mt-5 grid grid-cols-8 gap-2'>
                        {
                            html.size.map((item, index) => (
                                <div key={index} className={`text-center border cursor-pointer ${size === item ? 'border-red-500' : 'border'}`} onClick={() => setSize(item)}>{item}</div>
                            ))
                        }
                    </div>
                    <p className='mt-5 font-bold text-3xl mb-8'>${html.price}</p>
                    <span >{html.description}</span>
                    <div className='flex items-center my-5'>
                        <button className='w-10 h-6 border flex items-center justify-center text-xl' onClick={() => update('minus')}>-</button>
                        <div className='w-6 h-6 text-center border'>{quantity}</div>
                        <button className='w-10 h-6 border flex items-center justify-center text-xl' onClick={() => update('add')}>+</button>
                    </div>
                    <button onClick={() => addCart(html)} className='xl:w-1/2 bg-black text-white mt-auto px-3 py-2 rounded-md w-full hover:opacity-80 uppercase font-bold transition duration-500'>Add to cart</button>
                </div>
            </div>
        </Helmet>
    )
}

export default ProductDetail