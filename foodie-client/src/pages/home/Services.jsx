import React from 'react'


const serviceList  = [
    {id:1, title:"Catering", des:"Delight your guest with our flavours  and presentation", image:"/image/home/services/icon1.png"},
    {id:2, title:"Fast Delivery", des:"We deliver your order promptly to your door", image:"/image/home/services/icon2.png"},
    {id:3, title:"Online Ordering", des:"Explore menu & order with ease using our Online ordering", image:"/image/home/services/icon3.png"},
    {id:4, title:"Gift Cards", des:"Give the Gift of exceptional dinning with Foodi Gift Card", image:"/image/home/services/icon4.png"},
]

const Services = () => {
  return (
    <div className='section-container my-16'>
         <div className='section-container'>
        <div className='flex flex-col md:flex-row justify-between gap-12 items-center'>
            <div className='md:w-1/2:'>
            <div className='text-left md:w-4/5'>
            <p className='subtitle'>Our Stories & Services</p>
            <h5 className='title'>Our Culinary Journey And Services</h5>
            <p className='my-5 text-secondary leading-[30px]'>
                Rooted in passion, we currate unforgettable dining experience and offer exeptional services, blending culinary artistry with warm hospitality
            </p>

            <button className='btn bg-green text-white px-8 py-3 rounded-full'>
                   Explore
            </button>
    </div>
    </div>
    <div className='md:w1/2'>
      <div className='grid sm:grid-cols-2 grid-cols-1 gap-8 items-center'>
      {
        serviceList.map((service) => (
          <div key={service.id} className='shadow-md rounded-md py-5 px-4 text-center space-y-2 text-green cursor-pointer hover:border-indigo-600 transition-all duration-200 hover:border'>
            <img src={service.image} className='mx-auto' />
            <h5 className='pt-3 font-semibold'>{service.title}</h5>
            <p className='text-[#90B095]'>{service.des}</p>
          </div> 
        ))
      }    
    </div>      
    </div>
    </div>
    </div>
    </div>
  )
}

export default Services