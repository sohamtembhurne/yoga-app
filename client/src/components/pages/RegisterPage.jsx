import React, { useState } from 'react';
import axios from 'axios';
import TextInput from '../common/TextInput';
import { useNavigate } from 'react-router-dom';
import { useMobile } from '../context/MobileContext';
import { notifyEdit, notifyPaymentFail, notifyPaymentSuccess } from '../common/Toaster';

const RegisterPage = () => {
  const { mobile } = useMobile();
  const navigate = useNavigate();
  const url = process.env.REACT_APP_API_URL;

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    mobile: mobile || '',
    email: '',
    month: '',
    shift: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.age < 18 || formData.age > 65) {
      alert('Age must be between 18 and 65.');
      return;
    }

    const monthlyFee = 500;

    try {
      const response = await axios.post(`${url}/api/users`, formData);
      const responseData = response.data;
      const paymentResponse = completePayment(responseData, monthlyFee);

      if (paymentResponse.success) {
        notifyPaymentSuccess();
        navigate(`/receipt`);
      } else {
        notifyPaymentFail();
      }

    } catch (error) {
      console.error('Error submitting form:', error.message);
    }
  };

  const completePayment = (userData, monthlyFee) => {
    const totalPayment = monthlyFee;
    // Adding a function to test failure in payments as well
    const isSuccess = Math.random() < 0.99;

    if (isSuccess) {
      return {
        success: true,
        message: `Payment successful! Total Amount: ${totalPayment} INR`
      };
    } else {
      return {
        success: false,
        message: "Payment failed. Please try again."
      };
    }
  };

  return (
    <>
      <div className="flex justify-center md:py-16 h-full md:h-screen bg-[#e7d2fa]">
        <div className='bg-white flex flex-col md:flex-row shadow-lg w-full md:w-2/3 rounded-xl'>
          <div className='w-full md:w-1/2 flex items-center justify-center'>
            {/* Removed image for smaller screens */}
            <img src='/meditate.png' className='w-[300px] hidden md:block' alt="Meditation Illustration" />
          </div>
          <div className="w-full md:w-1/2 h-screen md:h-full bg-[#e9f2fb] p-8 md:px-8 rounded-tl-3xl rounded-bl-3xl flex flex-col justify-center">
            <h1 className="text-3xl font-semibold mb-4 text-center">Join Mindful</h1>
            <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
              <TextInput
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <TextInput
                id="age"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
                required
              />

              <TextInput
                id="mobile"
                name="mobile"
                placeholder="Mobile"
                value={formData.mobile}
                required
                disabled
                onClick={() => { notifyEdit(); }}
                style={{ backgroundColor: "#f7f2f2" }}
              />

              <TextInput
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <div className="flex flex-col md:flex-row gap-4 mt-3">
                <select
                  id="month"
                  name="month"
                  value={formData.month}
                  onChange={handleChange}
                  required
                  className="text-gray-400 flex-1 p-2 border rounded-md shadow-sm focus:outline-none focus:ring-[#66279a] focus:border-[#66279a] sm:text-sm"
                >
                  <option value="">Select a Month</option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>

                <select
                  id="shift"
                  name="shift"
                  value={formData.shift}
                  onChange={handleChange}
                  required
                  className="text-gray-400 flex-1 p-2 border rounded-md shadow-sm focus:outline-none focus:ring-[#66279a] focus:border-[#66279a] sm:text-sm"
                >
                  <option value="">Select a Shift</option>
                  <option value="6-7AM">6-7AM</option>
                  <option value="7-8AM">7-8AM</option>
                  <option value="8-9AM">8-9AM</option>
                  <option value="5-6PM">5-6PM</option>
                </select>
              </div>
              <div className='flex justify-center mt-4'>
                <button
                  type="submit"
                  className="border bg-[#774a9d] hover:bg-[#66279a] text-white rounded-lg px-4 py-2 w-full md:w-1/2 self-center"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
