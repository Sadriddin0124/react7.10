import React, { useState } from "react";
import { useGetFooterQuery } from "./FooterSlice";
import Logo from "../../assets/Storefront.png";
import { FaRobot } from "react-icons/fa";
import { PiYoutubeLogoBold } from "react-icons/pi";
import { SlSocialTwitter } from "react-icons/sl";
import { BsInstagram } from "react-icons/bs";
import { useAddSubscribersMutation } from "../../components/SubscribersApiSlice";

const Footer = () => {
  const [addEmail] = useAddSubscribersMutation()
  const [email, setNewEmail] = useState('')
  const handleEmail =()=> {
    let payload = {
      email: email
    }
    addEmail({...payload})
  }
  const { data: footer } = useGetFooterQuery();
  return (
    <footer className="py-[60px] px-[115px] bg-[#2b2b2b] flex justify-center">
      {footer?.map((item, index) => {
        return (
          <div key={index} className="flex w-[1050px]   flex-col justify-center">
            <div className="flex w-[100%] justify-between border-b-2 pb-[20px]  border-[silver]">
              <div className="flex w-[250px] flex-col gap-[30px]">
              <div className="flex items-center">
                <img src={Logo} alt="logo" />
                <h1 className="text-white text-[20px] font-[600]">{item.title1}</h1>
              </div>
              <h3 className="text-[#CCCCCC]">{item.subtitle1}</h3>
              <h3 className="text-[#CCCCCC]">{item.subtitle2}</h3>
              <div className="flex items-center gap-[10px]">
                <FaRobot  className="text-[#858584] text-[32px]"/>
                <PiYoutubeLogoBold  className="text-[#858584] text-[32px]"/>
                <SlSocialTwitter  className="text-[#858584] text-[26px]"/>
                <BsInstagram  className="text-[#858584] text-[24px]"/>
              </div>
              </div>
              <div className="flex w-[250px] flex-col gap-[30px]">
                <h1 className="text-white text-[20px] font-[600]">{item.title2}</h1>
                <p className="text-[#CCCCCC]">{item.subtitle3}</p>
                <p className="text-[#CCCCCC]">{item.subtitle4}</p>
                <p className="text-[#CCCCCC]">{item.subtitle5}</p>
              </div>
              <div className="flex  flex-col gap-[30px]">
                <h1 className="text-white text-[20px] font-[600]">{item.title3}</h1>
                <p className="text-[#CCCCCC]">{item.subtitle6}</p>
                <div className="w-[380px] h-[60px] bg-white rounded-[20px] flex justify-between ">
                  <input
                    type="email"
                    placeholder={item.placeholder}
                    className="p-[20px] rounded-[20px] outline-none"
                    onChange={(e)=>setNewEmail(e.target.value)}
                  />
                  <button onClick={handleEmail} className="text-white bg-[#A259FF] py-[20px] px-[50px] rounded-[20px] flex items-center gap-[10px]">
                    {item.btn}
                  </button>
                </div>
              </div>
            </div>
            <p className="mt-[20px] text-[#CCCCCC]">{item.footer}</p>
          </div>
        );
      })}
    </footer>
  );
};

export default Footer;
