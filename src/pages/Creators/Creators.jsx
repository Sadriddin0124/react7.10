import React from "react";
import { useGetCreatorsQuery } from "./CreatorsSlice";
import { GoRocket } from "react-icons/go";

const Creators = () => {
  const { data: creators } = useGetCreatorsQuery();
  return (
    <section className="bg-[#2B2B2B] w-100%] p-[115px]">
      {creators?.map((item, index) => {
        return (
          <div
            key={index}
            className="flex flex-col items-center w-[100%] gap-[60px]"
          >
            <div className="w-[1050px] flex justify-between">
              <div>
                <h1 className="text-[38px] font-[600] text-white">
                  {item.title}
                </h1>
                <p className="text-white text-[22px]">{item.subtitle}</p>
              </div>
              <button className="px-[50px] py-[20px] border-2 rounded-[20px] flex items-center gap-[5px] text-white border-[#A259FF]">
                <GoRocket className="text-[#A259FF] " />
                {item.btn}
              </button>
            </div>
            <div className="flex w-[1050px] flex-wrap justify-between gap-[30px]">
              {item?.card?.map((el, index) => {
                return (
                  <div
                    key={index}
                    className="flex w-[240px] h-[240px] bg-[#3B3B3B] flex-col rounded-[20px] items-center p-[20px] position-relative justify-between"
                  >
                    <p className="bg-[#2B2B2B] w-[30px] h-[30px] rounded-full flex items-center justify-center text-[#858584] position-absolute left-[20px] top-[20px]">
                      {el.id}
                    </p>
                    <img
                      src={el.img}
                      alt={el.title}
                      className="w-[110px] h-[110px] object-cover rounded-full"
                    />
                    <h3 className="text-[22px] text-white font-[600] mt-2">{el.title}</h3>
                    <div className="flex gap-[5px]">
                      <p className="text-[#858584] text-[16px]">{el.desc__left}</p>
                      <p className="text-white">{el.desc__right}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Creators;
