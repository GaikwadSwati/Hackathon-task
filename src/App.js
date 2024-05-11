import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import ForgetPassword from './components/Foregtpassword';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Category from './components/pages/Category';
import Layout from './components/Layout/Layout';
import Addcatagory from './components/pages/Addcatagory';
import Addproduct from './components/pages/Addproduct';
function App() {

  // const [loggedIn, setLoggedIn] = useState(false);

  // const login = () => {
  //   // Perform login logic here
  //   setLoggedIn(true);
  // };

  // const logout = () => {
  //   // Perform logout logic here
  //   setLoggedIn(false);
  // };
  
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/" element={<Layout />}>
             <Route path="/" element={<Home />} />
            <Route path="category" element={<Category />} />
            <Route path="products" element={<Products />} />
            <Route path='/addcatagory' element={<Addcatagory/>} />
            <Route path='/addproduct' element={<Addproduct/>} />
          </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}


const NoMatch = () => {
  return <h1>Page not found!</h1>;
};

export default App;
