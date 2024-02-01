import React from "react";
import Logo from "../../assets/Storefront.png";
import { RiUser6Line } from "react-icons/ri";
import { useGetHeaderQuery } from "./HeaderSlice";
import { GoRocket } from "react-icons/go";
import { useGetNavbarQuery } from "../navbar/NavbarApiSlice";

const Header = () => {
  const { data: navbar } = useGetNavbarQuery();
  const { data: header } = useGetHeaderQuery();
  return (
    <div className=" w-[100%] flex flex-col">
      {navbar?.map((item, index) => {
        return (
          <nav
            className="px-[50px] flex items-center bg-[#2B2B2B] w-[100%] h-[100px] justify-between position-fixed z-10"
            key={index}
          >
            <div className="flex items-center">
              <img src={Logo} alt="logo" />
              <h3 className="text-[#fff] text-[20px]">{item.logo}</h3>
            </div>
            <ul className="flex gap-[50px] items-center">
              {item?.list?.map((item) => (
                <li className="text-white list-none">{item.title}</li>
              ))}
              <li>
                <button className="px-[20px] py-[15px] bg-[#A259FF] text-white flex items-center text-[16px] gap-[10px] rounded-3xl">
                  <RiUser6Line /> Sign Up{" "}
                </button>
              </li>
            </ul>
          </nav>
        );
      })}
      {header?.map((item, index) => {
        return (
          <header key={index} className="w-[100%] min-h-[100vh] bg-[#2B2B2B] flex justify-center items-center px-[115px]">
            <div className="flex gap-[60px] mt-[100px] justify-center w-[100%]">
              <div className="flex flex-col items-start gap-[30px]">
                <h1 className="w-[460px] text-[67px] font-[600] text-white">{item.title}</h1>
                <p className="w-[490px] text-white text-[22px]">{item.desc}</p>
                <button className="text-[16px] flex items-center text-white gap-[5px] py-[20px] px-[50px] bg-[#A259FF] rounded-[20px]">
                  <GoRocket /> {item.btn}
                </button>
                <div className="flex gap-[50px]">
                  {item?.statistics?.map((item, index) => {
                    return (
                      <div key={index} className="flex flex-col">
                        <h2 className="text-[28px] font-[700] text-white">
                          {item.number}
                        </h2>
                        <p className="text-[24px] text-white">{item.text}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="w-[510px] flex flex-col rounded-[20px] overflow-hidden bg-[#3B3B3B] h-[510px]" >
                <img src={item.img} alt="header" className="w-[100%] h-[400px] object-cover"/>
                <div className="text-white w-[100%] h-[100px] rounded-[20px] bg-[#3B3B3B] p-[20px] flex flex-col gap-[15px]">
                  <h4 className="text-[22px]">{item.img__title}</h4>
                  <div className="flex gap-[5px]">
                  <img src={item.user} alt="user" className="w-[24px] h-[24px]"/>
                  <p>{item.img__subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          </header>
        );
      })}
    </div>
  );
};

export default Header;
