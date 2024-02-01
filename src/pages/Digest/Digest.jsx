import React, { useState } from 'react'
import { useGetDigestQuery } from './DigestSlice'
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { useAddSubscribersMutation } from '../../components/SubscribersApiSlice';

const Digest = () => {
  const {data: digest} = useGetDigestQuery()
  const [addEmail] = useAddSubscribersMutation()
  const [email, setEmail] = useState('')
  const handleEmail =()=> {
    let payload = {
      email: email
    }
    addEmail({...payload})
  }
  return (
    <section className='py-[60px] px-[115px] flex items-center justify-center bg-[#2b2b2b]'>
      {
        digest?.map((item,index)=> {
          return <div key={index} className='flex w-[1050px] bg-[#3b3b3b] p-[60px] rounded-[20px] gap-[80px]' >
            <img src={item.img} alt={item.title} className='w-[425px] h-[310px] object-cover rounded-[20px]'/>
            <div className='h-[310px] flex flex-col justify-between w-[360px]'>
              <h1 className='text-white text-[38px] font-[600] capitalize'>{item.title}</h1>
              <p className='text-[22px] text-white'>{item.desc}</p>
              <div className='w-[380px] h-[60px] bg-white rounded-[20px] flex justify-between '>
                <input type="email" placeholder={item.placeholder} className='p-[20px] rounded-[20px] outline-none' onChange={(e)=>setEmail(e.target.value)}/>
                <button onClick={handleEmail} className='text-white bg-[#A259FF] py-[20px] px-[50px] rounded-[20px] flex items-center gap-[10px]'><MdOutlineLocalPostOffice />{item.btn}</button>
              </div>
            </div>
          </div>
        })
      }
    </section>
  )
}

export default Digest
