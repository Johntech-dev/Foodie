import React from 'react'
import Banner from '../../components/Banner'
import Categories from '../home/Categories'
import SpecialDishes from './SpecialDishes'
import Testimonial from './Testimonial'
import Services from './Services'
const Home = () => {
  return (
    <div>
       <Banner />
       <Categories />
       <SpecialDishes />
       <Testimonial />
       <Services />
    </div>
  )
}

export default Home