import React from 'react'
import * as BsIcons from 'react-icons/bs'
const Footer = () => {
  return (
    <div className='bg-black text-white grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-3 px-12 py-4'>
      <div>
        <h1 className='font-bold text-2xl'>About Us</h1>
        <p className='text-gray-400 text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
      </div>
      <div className='md:flex md:flex-col md:items-center'>
        <h1 className='font-bold text-2xl md:text-center'>Social Connect</h1>
        <ul className='list-none flex mt-2'>
          <li className='mx-2'><BsIcons.BsFacebook className='text-3xl' /></li>
          <li className='mx-2'><BsIcons.BsYoutube className='text-3xl' /></li>
          <li className='mx-2'><BsIcons.BsInstagram className='text-3xl' /></li>
        </ul>
      </div>
      <div>
        <h1 className='font-bold text-2xl'>Support</h1>
        <p className='text-gray-400 text-sm'>Tech support</p>
        <p className='text-gray-400 text-sm'>Documentation</p>
        <p className='text-gray-400 text-sm'>F.A.Q</p>
      </div>
    </div>
  )
}

export default Footer