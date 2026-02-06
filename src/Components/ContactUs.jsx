import { memo } from 'react';

const ContactUs = () => {
  return (
    <div>
        <div className='xl:flex xl:justify-around m-10  grid grid-cols-1 md:grid-cols-2 mt-30 mb-30' >
        <div>
            <iframe  className='rounded-md xl:w-[560px] xl:h-[315px] w-[430px] h-[300px]' src="https://www.youtube.com/embed/cxchWpM_I-0?si=oPycfV-EGp3kNssu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className='text-4xl font-bold mt-5'>Apple Support app</div>
            <div className='text-black/60 mt-2'>Get help for all of your Apple products in one place, or connect with an expert.   </div>
        </div>
        <div className='w-full h-auto p-5 xl:w-1/3 xl:mt-0 rounded-sm text-center shadow-2xl mt-10 md:mt-0'>
        <div className='text-4xl text-black/70 m-4 font-bold xl:text-3xl'>Contact Apple Support</div>
            <div className='xl:flex'>
                <input type="text" placeholder='Enter Name' className='border-[1px]  h-8 px-5 border-gray-50000 rounded-sm w-full'/>
                <input type="text" placeholder='Enter Email' className='border-[1px]  h-8 px-5 border-gray-50000 rounded-sm w-full xl:ms-2 xl:mt-0 mt-5' />
            </div>
            <div>
                <textarea name="" id="" placeholder='Enter Message'className='border-[1px]  h-30 px-5 border-gray-50000 rounded-sm w-full mt-5'></textarea>
            </div>
            <button className='w-40 h-10 bg-blue-500 rounded-sm text-white text-xl mt-5'>Submit</button>
        </div>
        </div>
    </div>
  );
};

export default memo(ContactUs);