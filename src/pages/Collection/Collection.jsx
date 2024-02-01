import React from 'react'
import { useGetCollectionQuery } from './CollectionSlice'

const Collection = () => {
    const {data: collections} = useGetCollectionQuery()
  return (
    <section className='w-[100%] bg-[#2B2B2B] min-h-[100vh] p-[115px] flex flex-col gap-[60px] items-center'>
      <div className='w-[1035px]'>
        <h1 className='text-[38px] font-[600] text-white'>Trending Collection</h1>
        <p className='text-white text-[22px]'>Checkout our weekly updated trending collection.</p>
      </div>
      <div className='flex gap-[30px] justify-center'>
        {
            collections?.map((item,index)=> {
                return <div key={index} className='w-[330px] flex flex-col gap-[15px]'>
                    <img src={item.img} alt="collection" className='w-[330px] h-[330px] rounded-[20px]'/>
                    <div className='flex w-[100%] justify-between'>
                        {
                            item?.sm__img?.map(item => <img src={item.img} alt="collection" className='w-[100px] h-[100px] rounded-[20px]'/>)
                        }
                    </div>
                    <h3 className='text-[22px] font-[600] text-white'>{item.title}</h3>
                    <div className='w-[100%] flex items-center gap-[5px]'>
                        <img src={item.img2} alt="collection__img" className='w-[24px] h-[24px]'/>
                        <p className='text-white'>{item.subtitle}</p>
                    </div>
                </div>
            })
        }
      </div>
    </section>
  )
}

export default Collection
