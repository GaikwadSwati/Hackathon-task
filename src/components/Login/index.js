import React, { useState } from 'react';
import loginImage from '../../assets/images/login.png';
import logo from '../../assets/images/logo.png';
import './login.css';
import { Navigate, useNavigate } from 'react-router-dom';
import ForgetPassword from '../Foregtpassword';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({ email: '', password: '' });

    const navigate= useNavigate()

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        let updatedValue = value;
        let newErrors = { ...errors };
        if (name === 'email') {
            if (!value || !/^\S+@\S+\.\S+$/.test(value)) {
                newErrors.email = 'Please enter a valid email address';
            } else {
                newErrors.email = ''; // Clear error message if valid
            }
        }

        if (name === 'password') {
            if (!value) {
                newErrors.password = 'Password is required';
            } else {
                newErrors.password = ''; // Clear error message if valid
            }
        }

        // Update formData
        setFormData({
            ...formData,
            [name]: updatedValue
        });

        // Update errors
        setErrors(newErrors);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if fields are empty
        if (!formData.email || !formData.password) {
            setErrors({
                email: !formData.email ? 'Email is required' : '',
                password: !formData.password ? 'Password is required' : ''
            });
            return;
        }

        // Submit logic goes here
        console.log('Form submitted!',formData.email,formData.password);
        navigate('/')
    };

    const forgotPassword=()=>{
        navigate('/forget-password')
    }

    return (
        <div className="relative h-screen flex items-center justify-center">
            {/* Image background */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: `url(${loginImage})` }}
            ></div>

            {/* Login form */}
            <div className="absolute top-10 min-h-fit bottom-10 left-5 z-10 w-1/2 p-8 bg-white rounded-md shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className='flex justify-center'>
                        <img src={logo} alt="Logo" className="logo mx-aut0" />
                    </div>
                    <p className="text-center">Welcome to Digitalflake Admin</p>
                    <div className='pt-3'>
                        <label htmlFor="email" className="block text-gray-800">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded px-4 py-2"
                        />
                        {errors.email && <p className="mt-1 text-red-500">{errors.email}</p>}
                    </div>

                    <div className='pt-3'>
                        <label htmlFor="password" className="block text-gray-800">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded px-4 py-2"
                        />
                        {errors.password && <p className="mt-1 text-red-500">{errors.password}</p>}
                        <p onClick={forgotPassword} className='float-right pt-2 text-gray-500'>forgot password</p>
                    </div>
                    <div className='pt-10'>
                        <button
                            type="submit"
                            className="w-full purple text-white font-bold py-2 px-4 rounded"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
