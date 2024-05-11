import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
    const navivate =useNavigate()
    const [formData, setFormData] = useState({ email: '', password: '' });
    const Goback =() =>{
        navivate('/')
    }

    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <h1 className="forgot-pass-h1 font-poppins text-xxl text-center font-bold mb-4 mt-0">Did you forget your password?</h1>
            <p className="text-center font-poppins text-lg font-medium mb-10">Enter your email address and we'll send you a link to restore password</p>

            <div className='pt-3'>
                <label htmlFor="email" className="block text-gray-600 pb-1">
                   Email Address
                </label>
                <input type='email' className='border-2 rounded-md  min-h-20 w-[730px]'></input>
                {/* <p className="mt-1 text-red-500">{errors.email}</p>} */}
            </div>
            <div className='pt-10'>
                <button className='purple w-[730px] p-5 text-white  font-poppins text-lg font-medium rounded-md'>Request reset link</button>
            </div>
            <p className='text-gray-400 underline  pt-5 text-lg' onClick={Goback}>Back to log in</p>
        </div>
    );
};

export default ForgetPassword;
