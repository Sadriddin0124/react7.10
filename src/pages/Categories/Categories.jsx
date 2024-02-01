import React from 'react'
import { useGetCategoriesQuery } from './CategoriesSlice'

const Categories = () => {
  const {data: categories} = useGetCategoriesQuery()
  return (
    <section className='bg-[#2B2B2B] flex justify-center px-[115px] py'>
      <div className='w-[1050px] flex flex-col gap-[40px]'>
        <h1 className='text-[38px] text-white'>Browse Categories</h1>
        <div className='flex w-[100%] flex-wrap justify-between gap-[30px]'>
          {
            categories?.map((item,index)=> {
              return <div key={index} className='w-[240px] h-[316px] rounded-[20px] overflow-hidden bg-[#3b3b3b]'>
                <img src={item.img} alt={item.title} className='w-[240px] h-[240px] object-cover'/>
                <h4 className='text-[22px] font-[600] px-[30px] py-[20px] text-white'>{item.title}</h4>
              </div>
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Categories
