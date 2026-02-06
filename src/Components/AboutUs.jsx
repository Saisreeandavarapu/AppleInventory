import { memo } from 'react';

const AboutUs = () => {
  return (
    <div>
      <div className='w-full xl:h-[400px] xl:m-20 text-center relative h-[500px]'>
        <div className='xl:text-7xl text-6xl mt-10'>About Us</div>
     <div className='xl:w-2/3 bg-white/50 rounded-xl p-10 shadow-2xl w-full absolute xl:left-50 mt-10 xl:p-5'>
        <span className='text-4xl hover:border-b-2 hover:border-blue-400'>Beware of counterfeit parts</span>
        <div className='mt-4 text-justify text-black/70'>Some counterfeit and third-party power adapters and batteries may not be designed properly and could result in safety issues. To ensure you receive a genuine Apple battery during a battery replacement, we recommend visiting an Apple Authorised Service Provider. If you need a replacement adapter to charge your Apple device, we recommend getting an Apple power adapter.</div>
<div className='mt-4 text-justify text-black/70'>
Also non-genuine replacement displays may have compromised visual quality and may fail to work correctly. Apple-certified screen repairs are performed by trusted experts who use genuine Apple parts.</div>
     </div>
     
     </div>
     <div className='w-full h-[500px] bg-gray-500/10 text-center '>
     <div className='xl:text-4xl font-semibold pt-10 text-2xl'>Set up your device with one to one <br />sessions with a Specialist.</div>
     <div className='xl:w-2/3 '>
      <img src="/image copy 31.png" alt="" className='w-[90vh] xl:ms-90  p-10'  />
     </div>
     <div className='text-md text-black/70  '>When you buy directly from Apple, you can get help transferring your data and making the <br /> most of your new device with our free online Personal Setup sessions.</div>
     </div>
    </div>
  );
};

export default memo(AboutUs);