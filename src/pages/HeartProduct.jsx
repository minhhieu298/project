import React from 'react'
import Helmet from '../components/utils/Helmet';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import { hateProduct } from '../redux/action/productAction.js'

const HeartProduct = () => {
  const dispatch = useDispatch();
  const { heartProduct } = useSelector(state => state.cart)
  if (!heartProduct.length) {
    return (
      <Helmet title='Heart Product'>
        <div className='container mx-auto mt-16 h-[800px] flex items-center justify-center'>
          <h1 className='text-2xl font-bold px-2'>There are no favorite products in the collection</h1>
        </div>
      </Helmet>
    )
  }
  return (
    <Helmet title='Heart Product'>
      <div className='grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-5 px-12 mt-16 container mx-auto'>
        {
          heartProduct.map((item, index) => (
            <div key={index} className='w-full min-h-[350px] border p-2 border-gray-200 rounded-md hover:shadow-md transition duration-500'>
              <div className='flex flex-col h-full'>
                <div className='w-full overflow-hidden flex-shrink-0 border border-gray-200 rounded-md'>
                  <Link to={`/product/${item.id}`}>
                    <img src={item.image} alt={item.name} />
                  </Link>
                </div>
                <div className='flex-1 py-2 flex flex-col'>
                  <h2 className='flex-1'>{item.name}</h2>
                  <div className='flex justify-between'>
                    <p className='text-lg font-bold text-gray-600'>${item?.price}</p>
                    <span className='text-2xl cursor-pointer' onClick={() => dispatch(hateProduct(item))}>
                      <AiIcons.AiOutlineDelete />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </Helmet>
  )
}

export default HeartProduct