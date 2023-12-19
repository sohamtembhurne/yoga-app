import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useMobile } from '../context/MobileContext';

const Receipt = () => {
    const { mobile } = useMobile();
    const [receiptDetails, setReceiptDetails] = useState({});


    useEffect(() => {
        const fetchReceiptDetails = async () => {
            const url = process.env.REACT_APP_API_URL;
            try {
                const response = await axios.get(`${url}/api/users/receipt/${mobile}`);
                setReceiptDetails(response.data);
            } catch (error) {
                console.error('Error fetching receipt details:', error.message);
            }
        };

        if (mobile) {
            fetchReceiptDetails();
        }
    }, [mobile]);

    return (
        <div className="flex justify-center md:py-16 h-fit md:h-screen md:bg-[#e7d2fa]">
            <div className='bg-white flex flex-col md:flex-row shadow-lg w-full md:w-2/3 rounded-xl'>
                <div className='w-full md:w-1/2 flex items-center justify-center'>
                    <img
                        src='/meditate.png'
                        className='w-full max-w-[350px] mx-auto md:mx-0 hidden md:block'
                        alt="Meditation Illustration"
                    />
                </div>
                <div className="w-full md:w-1/2 h-screen md:h-full bg-[#e9f2fb] p-8 rounded-tl-3xl rounded-bl-3xl flex flex-col justify-center">
                    <div className='w-full md:w-1/2 flex items-center justify-center'>
                        <img
                            src='/meditate.png'
                            className='w-[300px] md:hidden'
                            alt="Meditation Illustration"
                        />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Payment Receipt</h2>

                        {Object.keys(receiptDetails).length > 0 ? (
                            <>
                                <p className="mb-4">Thank you for your payment!</p>

                                {/* Display receipt details */}
                                <div className="mb-2">
                                    <strong>Name:</strong> {receiptDetails.name}
                                </div>
                                <div className="mb-2">
                                    <strong>Age:</strong> {receiptDetails.age}
                                </div>
                                <div className="mb-2">
                                    <strong>Mobile:</strong> {receiptDetails.mobile}
                                </div>
                                <div className="mb-2">
                                    <strong>Email:</strong> {receiptDetails.email}
                                </div>
                                <div className="mb-2">
                                    <strong>Month:</strong> {receiptDetails.month}
                                </div>
                                <div className="mb-2">
                                    <strong>Shift:</strong> {receiptDetails.shift}
                                </div>
                                <div className="mb-2">
                                    <strong>Payment Date:</strong> {new Date(receiptDetails.createdAt).toLocaleDateString()}
                                </div>
                                {/* Add any other details you need */}
                            </>
                        ) : (
                            <p>Loading receipt details...</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Receipt;
