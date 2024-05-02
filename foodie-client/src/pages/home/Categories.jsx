import React from 'react'

const Categories = () => {

    const categoryItems = [
        {id: 1, title:"Main dish", des:"(86 dishes)", image:"/image/home/category/img1.png"},
        {id: 2, title:"Break fast", des:"(12 Breakfast)", image:"/image/home/category/img2.png"},
        {id: 3, title:"Dessert", des:"(48 dessert)", image:"/image/home/category/img3.png"},
        {id: 4, title:"Browse All", des:"(255 items)", image:"/image/home/category/img4.png"}
    ]

  return (
    <div className='section-container py-16'>
        <div className='text-center'>
            <p className='subtitle'>Customer Favourites</p>
            <h2 className='title'>Popular Categories</h2>
        </div>
        <div className='flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12'>
            {
                categoryItems.map((item, i) => (
                    <div key={i} className='shadow-lg rounded-md bg-white py-4 px-4 w-56 mx-auto text-center cursor-pointer hover:-translate-y-4 duration:300 transition-all'>
                     <div className='flex w-full mx-auto items-center justify-center'> 
                        < img className='bg-[#C1F1C6] p-5 rounded-full w-28 h-28' src={item.image} alt='' />
                    </div>
                    <div>
                        <h5 className='mt-5 space-y-1'>{item.title}</h5>
                        <p>{item.des}</p>
                    </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Categories