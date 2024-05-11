import React from 'react';
import DataTable from 'react-data-table-component';
import catagory from '../../assets/images/catagory.png';
import { NavLink } from 'react-router-dom';

const Category = () => {
  const data = [
    { id: 1, name: 'Product 1', description: 'Description 1', status: 'Active' },
    { id: 2, name: 'Product 2', description: 'Description 2', status: 'Inactive' },
    { id: 3, name: 'Product 3', description: 'Description 3', status: 'Active' },
    { id: 4, name: 'Product 4', description: 'Description 4', status: 'Inactive' },
  ];

  const columns = [
    {
      name: 'ID',
      selector: 'id',
      sortable: true,
      cell: (row) => <div>{row.id}</div>,
    },
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
      cell: (row) => <div>{row.name}</div>,
    },
    {
      name: 'Description',
      selector: 'description',
      sortable: true,
      cell: (row) => <div>{row.description}</div>,
    },
    {
      name: 'Status',
      selector: 'status',
      sortable: true,
      cell: (row) => <div>{row.status}</div>,
    },
  ];

  return (
    <>
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <img src={catagory} className="w-[30px]" alt="category" />
          <h2 className="text-lg font-bold ml-2">Category</h2>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 px-4 py-2 rounded-lg w-[563px]"
          />
        </div>
        <NavLink to="/addcatagory" className="purple text-white px-4 py-2 rounded">
          Add new
        </NavLink>
      </div>
      <div className='pt-10'>
        <DataTable
          columns={columns}
          data={data}
          pagination
        />
      </div>
    </>
  );
};

export default Category;
