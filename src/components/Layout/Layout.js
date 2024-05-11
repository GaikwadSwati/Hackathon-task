import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../common/Header';
import Sidebar from '../common/sidebar';

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="">
          <Header />
        </div>
        <div className="flex h-full">
            <Sidebar />
            <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </div>

    </>
  );
}

export default Layout;


// {/* <div className=" h-screen  ">
// <div className="flex h-full w-full">
//   <div className="ml- ">
//     <Sidebar isOpen={sidebarOpen} />
//   </div>
//   <div className={`flex-1 justify-center items-center  w-full  max-h-screen overflow-scroll `}>
//       <Header onSidebarToggle={toggleSidebar} isOpen={sidebarOpen} />
//     <div>
//       <div className=" p-2">
//         <Outlet />
//       </div>
//     </div>
//   </div>
// </div>
// </div> */}


{/* <div className="flex h-full w-full">
  <div className="h-screen flex">
    <Sidebar/>
  </div>
  <div className={`flex-1 justify-center items-center  w-full  max-h-screen overflow-scroll `}>
      <Header/>
    <div>
      <div className=" p-2">
        <Outlet />
      </div>
    </div>
  </div>
</div> */}