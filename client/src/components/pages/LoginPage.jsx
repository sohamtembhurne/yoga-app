import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useMobile } from '../context/MobileContext';
import { notifyHello, notifyUser } from '../common/Toaster';

const LoginPage = () => {
  const navigate = useNavigate();
  const {setMobileNumber} = useMobile();
  const [mobile, setMobile] = useState('');

  const url = process.env.REACT_APP_API_URL;

  const handleMobileSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${url}/api/users/checkPayment`, { mobile });
      const responseData = response.data;

      setMobileNumber(mobile);
      if (responseData.hasPaid) {
        notifyUser();
        navigate(`/receipt`);
      } else {
        notifyHello();
        navigate(`/payment`)
      }
    } catch (error) {
      console.error('Error checking payment:', error.message);
    }
  };

  return (
    <div className="flex justify-center py-16 h-screen bg-[#e7d2fa]">
    {/* <div className="flex justify-center py-16 h-screen bg-[#dceeff]"> */}
      <div className='bg-white flex flex-row shadow-lg w-2/3 rounded-xl'>
        <div className='w-1/2 flex items-center justify-center'>
          <img src='/meditate.png' className='w-[300px]' alt="Meditation Illustration" />
        </div>
        <div className="w-1/2 bg-[#e9f2fb] px-8 rounded-tl-3xl rounded-bl-3xl flex flex-col justify-center">
        {/* <div className="w-1/2 bg-[#f3ebfa] px-8 rounded-tl-3xl rounded-bl-3xl flex flex-col justify-center"> */}

          <form onSubmit={handleMobileSubmit} className='flex flex-col space-y-8'>
            <h2 className="text-3xl font-semibold text-left">Welcome to Mindful</h2>
            <p className="text-gray-600">Enter your mobile number to continue</p>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={mobile}
              placeholder='Enter your mobile number'
              onChange={(e) => setMobile(e.target.value)}
              required
              className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:outline-none focus:ring-[#66279a] focus:border-[#66279a] sm:text-sm"
            />

            <button
              type="submit"
              className="border bg-[#774a9d] hover:bg-[#66279a] text-white rounded-lg px-4 py-2 mt-2 w-1/2 self-center"
            >
              Submit
            </button>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
