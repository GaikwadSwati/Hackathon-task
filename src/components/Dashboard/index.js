import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Category from '../pages/Category';
import Products from '../pages/Products'

const Dashboard = () => {
  return (
    <>

      <nav className="flex items-center justify-between purple text-white p-4 min-h-24">
        <div className="flex items-center">
          <span className="text-lg font-bold">Your Logo</span>
        </div>

        <div className="flex items-center">
          <span className="text-sm mr-4">Welcome, Username</span>
        </div>
      </nav>


      <div className="flex min-h-screen">
        <aside
          className="text-white w-64 p-4"
          style={{ backgroundColor: 'rgba(244, 244, 244, 1)' }}
        >
          <ul>
            <li className="py-2">
              <NavLink
                to="/home"
                className="text-gray-300 hover:text-white"
                activeClassName="text-white"
              >
                Home
              </NavLink>
            </li>
            <li className="py-2">
              <NavLink
                to="/category"
                className="text-gray-300 hover:text-white"
                activeClassName="text-white"
              >
                Category
              </NavLink>
            </li>
            <li className="py-2">
              <NavLink
                to="/products"
                className="text-gray-300 hover:text-white"
                activeClassName="text-white"
              >
                Products
              </NavLink>
            </li>
          </ul>
        </aside>


        {/* <main className="flex-1 p-4">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/category" element={<Category />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </main> */}
      </div>
    </>
  );
};

export default Dashboard;
