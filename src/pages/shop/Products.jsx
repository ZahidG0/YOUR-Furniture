import React from 'react'
import { useState } from 'react';
import { products } from "../../utils/products";

import btnIcon from "../../assets/button-icon.png"
import ProductCard from './ProductCard';
// import ProductCard from "./ProductCard";

const Products = ({ headline }) => {
  const categories = ["Chair", "Beds", "Sofa", "Lamp"];

  const [selectedCategory, setSelectedCategory] = useState("Chair");
  const [visibleProducts, setVisibleProducts] = useState(4);

  // Filter products based oncategory
  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  const loadMoreProducts = () => {
    setVisibleProducts((prev) => prev + 4);
  };

  return (
    <div>
      <div className='section-container'>
        <h2 className='text-4xl font-bold text-center my-8'>{headline}</h2>

        {/* Catagory Tabs */}
        <div className='bg-[#EEEEEE] max-w-md mx-auto sm:rounded-full md:p-2.5 py-5 mb-16'>
          <div className='flex flex-col sm:flex-row items-center md:justify-between justify-center gap-4'>
            {
              categories.map((category) => (
                <button key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setVisibleProducts(4); // Reset product view count
                  }}
                  className={`py-1.5 sm:px-5 px-8 bg-amber-200 rounded-full ${selectedCategory === category ? "bg-white text-primary" : " text-secondary"} hover:bg-primary hover:text-amber-300 transition-colors`}
                >
                  {category}
                </button>
              ))
            }
          </div>

        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredProducts.slice(0, visibleProducts).map((product, index) => (
            <ProductCard key={index} products={product} />
          ))}
        </div>

        {/* Load More Button */}
        {visibleProducts < filteredProducts.length && (
          <div className="flex justify-center items-center mt-8">
            <button
              onClick={loadMoreProducts}
              className="text-primary font-bold flex items-center px-4 py-2 rounded-full hover:text-white  gap-1 hover:bg-gray-700 duration-300 transition-colors"
            >
              View More
              <img src={btnIcon} alt="btnIcon" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Products;