import React from 'react';
import { Link } from 'react-router-dom';

const HomeMobile = () => {
    return (
        <div className='h-full border'>
            <div className='flex flex-col-reverse md:flex-row bg-white mx-auto'>
                <div className='w-full md:w-2/3 relative'>
                    <img src='/yoga.png' alt='Yoga hero' className='w-full h-auto' />
                </div>
                <div className='w-full md:w-1/3 mx-auto md:mx-0 space-y-4 text-center md:text-left px-4 py-8'>
                    <div>
                        <h1 className='text-4xl font-semibold'>Transformation to self and nature with Yoga</h1>
                    </div>
                    <div className='w-full text-sm my-2 text-[#585c61]'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae labore ad porro voluptas .</p>
                    </div>
                    <Link to='/mobile'>
                        <button
                            type="submit"
                            value="Enroll for classes"
                            className='border bg-[#774a9d] hover:bg-[#66279a] text-white rounded-lg px-4 py-2 mt-4'
                        >
                            Enroll for classes
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomeMobile;
