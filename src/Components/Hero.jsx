import { memo } from 'react';

const Hero = () => {
  return (
    <div>
     <div className='bg-[url("/image1.png")] bg-cover bg-center w-full h-[70vh]'>
       <div className='bg-black/50 w-full h-[70vh]  relative'><span className='xl:text-7xl text-white font-bold tracking-wider absolute top-50 xl:left-100 text-5xl left-30 md:left-80 animate-pulse'>Handled with <br /> AppleCare.</span></div>
     </div>
    </div>
  );
};

export default memo(Hero);