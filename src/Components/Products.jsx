import { memo, useState } from 'react';
import products from '../data';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  
  const handleCategoryClick = (category) => {
    setSelectedCategory((prev) => (prev === category ? null : category));
  };

  
  const filterCategory =
    !selectedCategory || selectedCategory === "All"
      ? products
      : products.filter((item) => item.category === selectedCategory);

  return (
    <div>
      <div className='w-full h-auto text-center'>
        <div className='text-6xl font-bold tracking-wider mt-10'>Products</div>

        
        <div className='xl:flex xl:justify-around grid grid-cols-2 md:grid-cols-3 gap-5 p-10'>
          {["All","Phones","Ipad","Watches","Airpods","Laptops","Accessories"].map((item) => (
            <button
              className={`border-2 w-40 h-10 rounded-sm font-bold text-lg tracking-wider
                ${selectedCategory === item ? 'text-red-600' : 'text-black/80'} 
                hover:text-black/40`}
              key={item}
              onClick={() => handleCategoryClick(item)}
            >
              {item}
            </button>
          ))}
        </div>

        
        {selectedCategory && (
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 p-10'>
            {filterCategory.map((item) => (
              <div key={item.id} className='border rounded-lg p-4'>
                <img src={item.image} alt="" className='w-full h-48 object-cover rounded'/>
                <div className='font-bold text-lg'>{item.name}</div>
                <div className='text-center text-black/40 p-1'>{item.description}</div>
                <strike>
                  <div className='text-xl font-bold tracking-wide'>${item.price}</div>
                </strike>
                <div className='text-3xl text-red-700'>${item.offer_price}</div>
                <button className="mt-3 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">{item.add}</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(Products);
