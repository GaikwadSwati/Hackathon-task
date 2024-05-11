import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoIosArrowRoundBack } from 'react-icons/io';

const Addcatagory = () => {
  return (
    <>
      <div className='flex p-4'>
        <Link to="/category" className='p-2'>
          <IoIosArrowRoundBack style={{ fontSize: '2rem',}}/>
        </Link>
        <p className='font-semibold p-3 text-lg'>Add Category</p>
      </div>
      <div className="flex flex-row px-8">
      <div className="flex flex-col mr-4">
        <label htmlFor="categoryName">Category Name</label>
        <input type="text" id="categoryName" name="categoryName" style={{ width: '300px', height: '40px' }} className='border-2 my-2 rounded-md border-gray-400 '/>
      </div>
      <div className="flex flex-col mr-4">
        <label htmlFor="description">Description:</label>
        <input type="text" id="description" name="description" style={{ width: '300px', height: '40px' }} className='border-2 my-2 rounded-md border-gray-400'/>
      </div>
      <div className="flex flex-col mr-4">
        <label htmlFor="status">Status:</label>
        <select id="status" name="status" style={{ width: '300px', height: '40px' }} className='border-2 my-2 rounded-md border-gray-400'>
          <option value="">Select Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
    </div>

    <div className='flex justify-end gap-12 pt-64 pr-32 '>
        <Link to="#" className='w-28 text-center h-8 rounded-2xl purple-text border-2 border-purple-700'>Cancel</Link>
        <Link to="#" className='w-28 text-center h-8 purple rounded-2xl text-white'>Save</Link>
    </div>
    </>
  );
};

export default Addcatagory;
