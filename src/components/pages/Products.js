import React from 'react';
import { NavLink } from 'react-router-dom';
import product from '../../assets/images/products.png';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const Products = () => {

  const dummyData = [
    { id: 1, name: 'Product A', packsize: '10', category: 'Category A', image: 'image ', status: 'Active' },
    { id: 2, name: 'Product B', packsize: '20', category: 'Category B', image: 'image-url', status: 'Inactive' },
  ];

  const bodyTemplate = (rowData, column) => {
    return <span className="p-column-body">{rowData[column.field]}</span>;
  };

  return (
    <>
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <img src={product} className="w-[30px]" alt="product" />
          <h2 className="text-lg font-bold ml-2">Products</h2>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 px-4 py-2 rounded-lg w-[563px]"
          />
        </div>
        <NavLink to="/addproduct" className="purple text-white px-4 py-2 rounded">
          Add new
        </NavLink>
      </div>
      
      <div className="datatable-responsive p-8">
        <DataTable value={dummyData} className="p-datatable-sm">
          <Column field="id" header="ID" sortable className="p-2" headerClassName="header-color" body={bodyTemplate}></Column>
          <Column field="name" header="Name" sortable headerClassName="header-color" body={bodyTemplate}></Column>
          <Column field="packsize" header="Pack Size" sortable headerClassName="header-color" body={bodyTemplate}></Column>
          <Column field="category" header="Category" sortable headerClassName="header-color" body={bodyTemplate}></Column>
          <Column field="image" header="Image" headerClassName="header-color" body={bodyTemplate}></Column>
          <Column field="status" header="Status" sortable headerClassName="header-color" body={bodyTemplate}></Column>
        </DataTable>
      </div>
    </>
  );
};

export default Products;
