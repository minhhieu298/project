import React, { useState } from 'react'
import NotFound from './NotFound';
import Helmet from './utils/Helmet';
import { useDispatch } from 'react-redux';
import { createProduct } from '../redux/action/productAction';

const Category = ['Men', 'Women', 'Children'];

const CreateProduct = () => {
    const login = localStorage.getItem("login");
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [data, setData] = useState([]);
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.set('id', Math.floor(Math.random() * (9999 - 1000)))
        myForm.set('name', name);
        myForm.set('price', price);
        myForm.set('description', description);
        myForm.set('image', image);
        myForm.set('category', category)
        setData([...data, Object.fromEntries(myForm.entries())])
        dispatch(createProduct(Object.fromEntries(myForm.entries())))
    }
    const handleCreateImg = e => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setImage(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }
    if (!login) {
        return <NotFound />
    }
    return (
        <Helmet title='Create Product'>
            <div className='container mx-auto mt-16 h-screen flex justify-center flex-col items-center'>
                <form className='w-1/2 flex flex-col' onSubmit={handleSubmit}>
                    <div className='w-full border my-4'>
                        <input type="file" accept="image/*" onChange={handleCreateImg} name='image' className='w-full h-20 rounded-md' />
                    </div>
                    {
                        image && <div className='w-16 h-16 my-2'>
                            <img src={image} alt="" className='w-full h-full object-cover' />
                        </div>
                    }
                    <div className='w-full border my-4'>
                        <input type="text" name='name' onChange={e => setName(e.target.value)} value={name} className='w-full outline-none p-2 rounded-md' placeholder='Product name' required />
                    </div>
                    <div className='w-full border my-4'>
                        <input type="number" name='price' onChange={e => setPrice(e.target.value)} value={price} className='w-full outline-none p-2 rounded-md' placeholder='Product price' required />
                    </div>
                    <div className='w-full border my-4'>
                        <input type="text" name='description' onChange={e => setDescription(e.target.value)} value={description} className='w-full outline-none p-2 rounded-md' placeholder='Product description' required />
                    </div>
                    <div className='w-full border my-4'>
                        <select className='w-full outline-none p-3 rounded-md' onClick={(e) => setCategory(e.target.value)} required>
                            <option value="" hidden>Filter</option>
                            {
                                Category.map(item => (
                                    <option value={item} key={item}>{item}</option>
                                ))
                            }
                        </select>
                    </div>
                    <button className='outline-none p-2 ml-auto bg-green-600 text-white rounded-md font-semibold hover:bg-green-500 transition duration-500'>Create</button>
                </form>
                {
                    data && <div className='grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4 my-6 px-12'>
                        {
                            data.map((item, index) => (
                                <div key={index} className='w-full min-h-[150px] border p-2 border-gray-200 rounded-md hover:shadow-md transition duration-500'>
                                    <div className='flex flex-col h-full'>
                                        <div className='w-full overflow-hidden flex-shrink-0 border border-gray-200 rounded-md'>
                                            <img src={item?.image} alt={item?.name} />
                                        </div>
                                        <div className='flex-1 py-2 flex flex-col'>
                                            <h2 className='flex-1'>{item.name}</h2>
                                            <div className='flex justify-between items-center'>
                                                <p className='text-lg font-bold text-gray-600'>${item?.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                }
            </div>
        </Helmet>
    )
}

export default CreateProduct