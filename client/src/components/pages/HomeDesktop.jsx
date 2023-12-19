import React from 'react'
import { Link } from 'react-router-dom';

const HomeDesktop = () => {
    return (
        <div className='h-full border'>

            <div className='flex bg-white mx-auto'>
                <div className='space-y-4 absolute left-24 top-80 z-20'>
                    <div className=''>
                        <h1 className='text-4xl font-semibold'> Transformation to <br /> self and nature with Yoga </h1>
                    </div>
                    <div className='w-96 text-sm my-4 text-[#585c61]'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae labore ad porro voluptas impedit asperiores.</p>
                    </div>
                    <Link to='/mobile'>
                        <button
                            type="submit"
                            value="Enroll for classes"
                            className='border bg-[#774a9d] hover:bg-[#66279a] text-white rounded-lg px-4 py-2 mt-2'
                        >
                        Enroll for classes
                        </button>
                    </Link>
                </div>
                <div className='w-2/3 absolute right-0 top-16 z-10'>
                    <img src='/yoga.png' alt='Yoga hero' />
                </div>
            </div>
        </div>
    )
}

export default HomeDesktop;