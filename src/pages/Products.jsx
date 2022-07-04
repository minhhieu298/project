import React, { useState } from 'react'
import Helmet from '../components/utils/Helmet'
import Product from '../components/utils/Product'

const Category = ['All', 'Men', 'Women', 'Children'];

const Products = () => {
    const products = JSON.parse(localStorage.getItem('products'));
    const [data, setData] = useState(products);

    const filterSelect = (cate) => {
        if (cate === 'All') {
            setData(products)
        } else {
            const result = products.filter(e => e.category === cate)
            setData(result)
        }
    }

    return (
        <Helmet title="Products">
            <section className='mt-16 container mx-auto flex body-product lg:flex-row flex-col'>
                <div className='w-1/4 lg:block hidden'>
                    <ul className='list-none block mt-3'>
                        <li onClick={() => setData(products)} className='h-10 uppercase font-semibold hover:bg-slate-200 flex items-center px-2 transition duration-500 rounded-md'>
                            All
                        </li>
                        <li onClick={() => filterSelect('Men')} className='h-10 uppercase font-semibold hover:bg-slate-200 flex items-center px-2 transition duration-500 rounded-md'>
                            Men
                        </li>
                        <li onClick={() => filterSelect('Women')} className='h-10 uppercase font-semibold hover:bg-slate-200 flex items-center px-2 transition duration-500 rounded-md'>
                            Women
                        </li>
                        <li onClick={() => filterSelect('Children')} className='h-10 uppercase font-semibold hover:bg-slate-200 flex items-center px-2 transition duration-500 rounded-md'>
                            Children
                        </li>

                    </ul>
                </div>
                <div className='w-1/4 block lg:hidden my-2 ml-4'>
                    <select className='border p-2 rounded-md' onChange={e => {
                        filterSelect(e.target.value)
                    }}>
                        <option value="" hidden>Filter</option>
                        {
                            Category.map(item => (
                                <option value={item} key={item}>{item}</option>
                            ))
                        }
                    </select>
                </div>
                <div className='flex-1 grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4 px-12 '>
                    {
                        data.map(item => (
                            <Product key={item.id} item={item} />
                        ))
                    }
                </div>
            </section >

        </Helmet >
    )
}

export default Products