import { memo } from "react";
import products from "../data";

const AllProducts = () => {
  return (
    <div className="w-full">
      <h1 className="text-6xl font-bold text-center mt-10">
        All Products
      </h1>

      <div className="mt-20 overflow-x-auto">
        <div className="flex gap-6 w-max px-6">
          {products.map((item) => (
            <div
              key={item.id}
              className="w-64 flex-shrink-0 rounded-lg border shadow-md bg-white"
            >
              
              <div className="w-full h-60 overflow-hidden rounded-t-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold truncate">
                  {item.name}
                </h2>

                <button className="mt-3 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">
                  {item.add}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(AllProducts);
