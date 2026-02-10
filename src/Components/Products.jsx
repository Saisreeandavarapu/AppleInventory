import { memo, useState } from 'react';
import products from '../data/data';
import{ ShoppingBag } from 'lucide-react';
const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [previewProduct, setPreviewProduct] = useState(null);


  
  const handleCategoryClick = (category) => {
    setSelectedCategory((prev) => (prev === category ? null : category));
  };

  
  const filterCategory =
    !selectedCategory || selectedCategory === "All"
      ? products
      : products.filter((item) => item.category === selectedCategory);

  return (
    <div className='w-full'>
      <div className='w-full h-auto text-center'>
        <div className='text-6xl font-bold tracking-wider mt-10'>Products</div>

        
        <div className='xl:flex xl:justify-around grid grid-cols-2 md:grid-cols-3 gap-5 p-10'>
          {["All","Phones","Ipad","Watches","Airpods","Laptops","Accessories",].map((item) => (
            <button
              className={`border-2 w-40 h-10 rounded-sm font-bold text-lg tracking-wider
                ${selectedCategory === item ? 'text-blue-400' : 'text-black/80'} 
                hover:text-black/40`}
              key={item}
              onClick={() => handleCategoryClick(item)}
            >
              {item}
            </button>
          ))}
        </div>

        
        {selectedCategory && (
          <div className='grid grid-cols-2 md:grid-cols-3 gap-6 p-10 lg:grid-cols-4 '>
            {filterCategory.map((item) => (
              <div key={item.id} className='border rounded-lg p-4 '>
                <div className='flex relative'>
                <img src={item.image} alt="" className='w-full h-48 object-cover rounded'/> <button className="absolute right-0"><ShoppingBag /></button></div>
                <div className='font-bold text-lg'>{item.name}</div>
                <div className='text-center text-black/40 p-1'>{item.description}</div>
                <strike>
                  <div className='text-xl font-bold tracking-wide'>${item.price}</div>
                </strike>
                <div className='text-3xl text-red-700'>${item.offer_price}</div>
               
                <button className='bg-blue-500 text-white p-2 rounded-full text-sm hover:bg-blue-950' onClick={()=>setPreviewProduct(item)}>{item.view}</button>
              </div>
            ))}
          </div>
        )}

        
{previewProduct && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
    
   
    <div className="relative bg-white/90 backdrop-blur-xl
                    rounded-2xl shadow-2xl
                    w-[95%] max-w-4xl
                    grid md:grid-cols-2
                    overflow-hidden
                    animate-[scaleIn_0.3s_ease]">

     
      <button
        onClick={() => setPreviewProduct(null)}
        className="absolute top-4 right-4 text-2xl text-black/70 hover:text-red-500"
      >
        ✕
      </button>

     
      <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 flex items-center justify-center">
        <img
          src={previewProduct.image}
          alt={previewProduct.name}
          className="h-72 object-contain hover:scale-110 transition-transform"
        />
      </div>

      
      <div className="p-6 flex flex-col justify-between">
        
        <div>
          <h2 className="text-3xl font-bold tracking-wide">
            {previewProduct.name}
          </h2>

          <p className="text-black/60 mt-3 leading-relaxed">
            {previewProduct.description}
          </p>

          <div className="mt-4">
            <strike className="text-gray-400 text-lg">
              ${previewProduct.price}
            </strike>
            <div className="text-4xl font-extrabold text-red-600">
              ${previewProduct.offer_price}
            </div>
          </div>

          
          <div className="flex gap-2 mt-4">
            <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-600">
              {previewProduct.category}
            </span>
            <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-600">
              Free Delivery
            </span>
          </div>
        </div>

        
        <div className="flex gap-4 mt-6">
          <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-800 transition">
            Add to Cart
          </button>
          <button className="flex-1 border border-blue-600 text-blue-600 py-3 rounded-xl hover:bg-blue-50 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  </div>
)}


      </div>
    </div>
  );
};

export default memo(Products);
