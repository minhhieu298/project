import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import { useDispatch } from 'react-redux/es/exports';
import { hateProduct, heartProduct } from '../../redux/action/productAction';

const Product = ({ item }) => {
  const [heart, setHeart] = useState(false);
  const dispatch = useDispatch()
  const Love = (item) => {
    if (!heart) {

      dispatch(heartProduct(item));
      setHeart(true)
    }
    else {
      dispatch(hateProduct(item))
      setHeart(false)
    }
  }
  return (
    <div className='w-full min-h-[350px] border p-2 border-gray-200 rounded-md hover:shadow-md transition duration-500'>
      <div className='flex flex-col h-full'>
        <div className='w-full overflow-hidden flex-shrink-0 border border-gray-200 rounded-md'>
          <Link to={`/product/${item.id}`}>
            <img src={item.image} alt={item.name} />
          </Link>
        </div>
        <div className='flex-1 py-2 flex flex-col'>
          <h2 className='flex-1'>{item.name}</h2>
          <div className='flex justify-between items-center'>
            <p className='text-lg font-bold text-gray-600'>${item?.price}</p>
            <span className='text-2xl cursor-pointer' onClick={() => Love(item)}>
              {
                heart ? <AiIcons.AiFillHeart style={{ color: 'pink' }} /> : <AiIcons.AiOutlineHeart />
              }
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Product