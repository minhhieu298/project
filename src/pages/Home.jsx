import React from 'react';
import Helmet from '../components/utils/Helmet'
import Product from '../components/utils/Product'
import { getProducts } from '../data'


const Home = () => {
    return (
        <Helmet title="Home">
            <section>
                <div className="banner"></div>
                <div className='mt-5'>
                    <h1 className='text-center font-bold text-3xl my-4'>New Products</h1>
                    <div className='grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-5 px-12'>
                        {
                            getProducts(5).map(item => (
                                <Product key={item.id} item={item} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </Helmet>
    )
}

export default Home