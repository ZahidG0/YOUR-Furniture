import React from 'react'
import bannerImg from '../../assets/banner.png'
import Products from './Products';

const Shop = () => {
  return (
    <section className='min-h-screen '>
      {/* Banner */}
      <div className='w-full h-[400px] bg-cover bg-center flex items-center justify-center text-white' style={{ backgroundImage: `url(${bannerImg})` }}>
        <h1 className='text-4xl font-bold '>Shop Our Products</h1>
      </div>
      {/* Products Section */}
      <Products headline = "What's Your Chooice"/>
    </section>
  )
}

export default Shop;