import React from "react";
import { useGetDiscoverQuery } from "./DiscoverSlice";
import { IoEyeOutline } from "react-icons/io5";

const Discover = () => {
  const { data: discover } = useGetDiscoverQuery();
  return (
    <section className="px-[115px] py-[60px] bg-[#2B2B2B]">
      {discover?.map((item, index) => {
        return (
          <div key={index} className="flex flex-col gap-[60px] items-center">
            <div className="flex w-[1050px] justify-between">
              <div className="flex flex-col gap-[10px]">
                <h1 className="text-[38px] font-[600] text-white">
                  {item.title}
                </h1>
                <p className="text-white">{item.subtitle}</p>
              </div>
              <button className="px-[50px] py-[20px] border-2 rounded-[20px] flex items-center gap-[5px] text-white border-[#A259FF]">
                <IoEyeOutline className="text-[#A259FF]" /> {item.btn}
              </button>
            </div>
            <div className="flex w-[1050px] justify-between">
              {item?.card?.map((el, index) => {
                return (
                  <div
                    key={index}
                    className="w-[330px] h-[470px] rounded-[20px] overflow-hidden bg-[#3B3B3B]"
                  >
                    <img
                      src={el.img}
                      alt={el.title}
                      className="w-[330px] h-[300px] object-cover"
                    />
                    <div className="p-[20px] flex flex-col justify-between">
                      <h1 className="text-[22px] font-[600] text-white">
                        {el.title}
                      </h1>
                      <div className="flex gap-[10px] mt-[10px]">
                        <img
                          src={el.img}
                          alt={el.title}
                          className="w-[024px] h-[24px] rounded-full"
                        />
                        <p className="text-white">{el.name}</p>
                      </div>
                      <div className="mt-[20px] flex flex-col">
                        <div className="flex w-[100%] justify-between text-[#858584]">
                          <p>{el.price}</p>
                          <p>{el.highest}</p>
                        </div>
                        <div className="flex w-[100%] justify-between text-white">
                          <p>{el.desc_1}</p>
                          <p>{el.desc_2}</p>
                        </div>
                      </div>
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

export default Discover;
