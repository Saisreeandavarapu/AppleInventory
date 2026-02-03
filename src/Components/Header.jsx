import { memo, useState } from 'react';
import{ Menu, ShoppingBag, X, } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const[open,setopen]=useState(false);
    
  return (
    <div>
     <div className='w-full h-24 bg-black flex items-center xl:justify-around justify-between p-5 relative'>
        <div className='flex gap-5 items-center'>
        <div className='h-15 w-15 rounded-full bg-white/80'></div>
        <div className='text-white font-bold tracking-wider text-2xl'>apple.</div></div>
      
      <div className='md:flex md:gap-5 hidden  '> <a href="" className='text-white font-bolder hover:text-white/70 tracking-wide'>Home</a>
        <a href="" className='text-white font-bolder hover:text-white/70 tracking-wide'id='/AboutUs'>About</a>
        <a href="" className='text-white font-bolder hover:text-white/70 tracking-wide'>Products</a>
        <a href="" className='text-white font-bolder hover:text-white/70 tracking-wide' id='/'>ContactUs</a>
        <a href="" className='text-white font-bolder hover:text-white/70 tracking-wide'>All Products</a></div>
        <div className='flex gap-5 items-center'>
        <ShoppingBag className='text-white' />
         <button onClick={()=>setopen(!open)} className='md:hidden'>
        {open ? <X size={28} className='text-white'/>:<Menu size={28} className='text-white'/>}
        </button>
        </div>
        
     </div>
     {/* <MessageCircle size={50} className='bg-black/50 text-white rounded-xl  xl:top-170 left-340 z-99  sticky'/>
      <PhoneCallIcon size={50} className='bg-black/50 text-white rounded-xl  xl:top-185 left-340 z-99  sticky'/> */}
     {open && (
        <div>
            <div className='bg-black/90 w-full text-center md:hidden flex flex-col gap-2 '>
        <a href="" className='text-white font-bolder hover:text-white/70 tracking-wide'>Home</a>
        <a href="" className='text-white font-bolder hover:text-white/70 tracking-wide'>About</a>
        <a href="" className='text-white font-bolder hover:text-white/70 tracking-wide'>Products</a>
        <a href="" className='text-white font-bolder hover:text-white/70 tracking-wide'>ContactUs</a>
        <a href="" className='text-white font-bolder hover:text-white/70 tracking-wide'>All Products</a>
            </div>
        </div>
     )}
      
    </div>
  );
};

export default memo(Header);