import React from 'react'

const Banner = () => {
  return (
    <div className='section-container mt-20 bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%'>
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        <div className='md:w-1/2'>
                <img src='banner.png' />
                <div className='flex flex-col md:flex-row justify-around items-center -mt-14 gap-4'>
                  <div className='flex bg-white py-2 px-3 rounded-xl items-center gap-3 shadow-md w-64'>
                    <img className='rounded-2xl' src='food.png' />
                    <div className='space-y-1'>
                      <h5 className='font-medium '>Spicy noodles</h5>
                      <div className="rating rating-sm">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked readOnly />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly />
                      </div>
                      <p className='text-red'>$18000</p>
                    </div>
                  </div>
                  <div className='md:flex hidden bg-white py-2 px-3 rounded-xl items-center gap-3 shadow-md w-64'>
                    <img className='rounded-2xl' src='food.png' />
                    <div className='space-y-1'>
                      <h5 className='font-medium '>Spicy noodles</h5>
                      <div className="rating rating-sm">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked readOnly />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly />
                      </div>
                      <p className='text-red'>$18000</p>
                    </div>
                  </div>
                </div>
            </div>
            <div className='md:w-1/2'>
                <h2 className='md:text-5xl text-4xl font-bold md:leading-snug leading-snug '>Dive into Delights Of Delectable <span className='text-green'>Food</span></h2>
                <p className='text-xl text-[#4A4A4A] py-4 mt-2'>Where Each Plate Weaves a Story of Culniray Mastery and passionate Craftmanship</p>
                <button className='btn bg-green rounded-full text-white  py-3 px-8'>Order Now</button>
            </div>
        </div>
    </div>
  )
}

export default Banner