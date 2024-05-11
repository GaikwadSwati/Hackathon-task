import React from 'react'
import { NavLink, Routes, Route } from 'react-router-dom';
import home from '../../assets/images/home.png'
import category from '../../assets/images/catagory.png';
import products from '../../assets/images/products.png'

const Sidebar = () => {
  return (
    <>
            <div
          className="text-white w-60 p-4"
          style={{ backgroundColor: 'rgba(244, 244, 244, 1)' }}
        >
          <ul>
            <li className="p-2 pb-4 pt-5 flex gap-3">
              <img src={home} alt='home' className='w-6 '/>
              <NavLink
                to="/"
                className="text-lg text-gray-700 font-semibold"
                activeClassName="text-white"
              >
                Home
              </NavLink>
            </li>
            <li className="p-2 flex gap-3 pb-4">
            <img src={category} alt='home' className='w-6 '/>
              <NavLink
                to="/category"
                className="text-lg text-gray-700 font-semibold"
                activeClassName="text-white"
              >
                Category
              </NavLink>
            </li>
            <li className="p-2 flex gap-3 pb-4">
            <img src={products} alt='home' className='w-6 '/>
              <NavLink
                to="/products"
                className="text-lg text-gray-700 font-semibold"
                activeClassName="text-white"
              >
                Products
              </NavLink>
            </li>
          </ul>
        </div></>
  )
}

export default Sidebar