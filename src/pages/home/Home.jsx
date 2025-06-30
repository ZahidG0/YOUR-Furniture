import React from 'react'
import Hero from './Hero';
import WhyChoose from './WhyChoose';
import Products from '../shop/Products';
import Expricence from './Exprience';
import Meterials from './Meterials';
import Testimonials from './Testimonials';

const Home = () => {
  return (
    <>
      <Hero/>
      <WhyChoose/>
      <Products headline = "Best Selling Products"/>
      <Expricence/>
      <Meterials/>
      <Testimonials/>
    </>
  )
}

export default Home;