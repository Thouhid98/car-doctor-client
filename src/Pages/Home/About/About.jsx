import React from 'react';

const About = () => {
    return (
        <div className='flex gap-12 p-12'>
            <div>
                <img className='lg:w-[550px] h-[470px] rounded-sm' src="/public/assets/images/about_us/person.jpg" alt="" />
                <img className='border-[10px]   -mt-64 ml-72 absulate lg:w-[340px] h-[382px]' src="/public/assets/images/about_us/parts.jpg" alt="" />
            </div>
            <div>
                <h4 className='text-[#FF3811] text-2xl font-bold'>About Us</h4>
                <h2 className='text-5xl lg:w-[376px] font-bold my-4 mb-4'>We are qualified & of experience in this field</h2>
                <p className='lg:w-[489px] my-4 mb-2'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>

                <p className='lg:w-[489px]'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

                <button className="btn hover-none bg-[#FF3811] border-none text-white rounded-sm mr-4  my-3">Get More Info</button>
            </div>
        </div>
    );
};

export default About;