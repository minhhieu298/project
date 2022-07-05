import React from 'react'
import Helmet from '../components/utils/Helmet';
import { useDispatch, useSelector } from 'react-redux'
import { decreaseCart, deleteCart, increaseCart } from '../redux/action/cartAction';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems } = useSelector(state => state.cart)
  const dispatch = useDispatch();
  const handleDelete = (index) => {
    if (window.confirm('Do you want to delete')) {
      dispatch(deleteCart(index))
      alert('Delete success')
    }
  }
  if (!cartItems.length) {
    return (
      <Helmet title="Cart">
        <div className='mt-16 container mx-auto flex items-center flex-col'>
          <img src="https://assets.materialup.com/uploads/66fb8bdf-29db-40a2-996b-60f3192ea7f0/preview.png" alt="" />
          <Link to="/products" className="px-2 py-2 bg-black text-white hover:opacity-80 uppercase font-bold transition duration-500">Go to shop</Link>
        </div>
      </Helmet>
    )
  }
  return (
    <Helmet title="Cart">
      <div className='container mx-auto flex mt-16 xl:flex-row flex-col'>
        <div className='xl:w-3/4 w-full grid grid-cols-3 items-center py-3'>
          {
            cartItems.map((item, index) => (
              <React.Fragment key={index}>
                <div className='w-40 mx-auto'>
                  <img src={item.image} alt={item.name} />
                </div>
                <h1>{item.name} - {item.size} - ${item.price * item.quantity}</h1>
                <div className='flex justify-center relative'>
                  <button className='w-10 h-6 border flex items-center justify-center text-xl' onClick={() => item.quantity - 1 < 1 ? handleDelete(index) : dispatch(decreaseCart(item))}>-</button>
                  <div className='w-6 h-6 text-center border'>{item.quantity}</div>
                  <button className='w-10 h-6 border flex items-center justify-center text-xl' onClick={() => dispatch(increaseCart(item))}>+</button>
                  <span className='absolute -top-20 right-5 text-xl cursor-pointer' onClick={() => dispatch(deleteCart(index))}>X</span>
                </div>
              </React.Fragment>
            ))
          }
        </div>
        <div className='xl:w-1/4 w-full px-2 border flex  flex-col'>
          <h1 className='xl:text-center text-left font-bold xl:text-2xl text-xl'>Orders</h1>
          <div className='flex items-center justify-between font-bold my-2'>
            <p>Quantity:</p>
            <p>{cartItems.length}</p>
          </div>
          <div className='flex items-center justify-between font-bold my-2'>
            <p>Total:</p>
            <p>
              {
                cartItems.reduce((a, b) => a + b.price * b.quantity, 0)
              }
            </p>
          </div>
          <div className='mt-auto'>
            <p className='font-bold text-xl xl:text-2xl'>Bill: ${
              cartItems.reduce((a, b) => a + b.price * b.quantity, 0)
            }</p>
          </div>
        </div>
      </div>
    </Helmet>
  )
}

export default Cart