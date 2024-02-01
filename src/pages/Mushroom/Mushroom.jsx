import React from "react";
import { useGetMushroomsQuery } from "./MushroomSlice";
import { IoEyeOutline } from "react-icons/io5";

const Mushroom = () => {
  const { data: mushroom } = useGetMushroomsQuery();
  return (
    <section className="w-[100%] h-[100vh] bg-gradient-to-t from-[#A259FF] to-[transparent] relative">
      {mushroom?.map((item, index) => {
        return (
          <div key={index} className="flex justify-center">
            <img
              src={item.bg}
              alt={item.title}
              className=" absolute w-[100%] h-[100%] object-cover -z-[1]"
            />
            <div className="flex w-[1050px] justify-between items-end relative top-[400px]">
              <div className="flex flex-col items-start gap-[30px]">
                <div className="px-[20px] py-[10px] bg-[#3b3b3b] w-[150px] flex gap-[10px] items-center rounded-[20px]">
                  <img
                    src={item.bg}
                    alt={item.username}
                    className="w-[24px] h-[24px] rounded-full"
                  />
                  <h6 className="text-white">{item.username}</h6>
                </div>
                <h1 className="text-[51px] font-[600] text-white">
                  {item.title}
                </h1>
                <button className="px-[50px] py-[20px] flex items-center gap-[10px] bg-white rounded-[20px]">
                  <IoEyeOutline className="text-[#A259FF]" /> {item.btn}
                </button>
              </div>
              <div className="bg-[#3b3b3b71] w-[260px] h-[140px] rounded-[20px] p-[30px] flex flex-col justify-between ">
                <h1 className="text-white text-[12px]">{item.timer__text}</h1>
                <div className="flex  gap-[10px]">
                  <div className="flex flex-col">
                    <h1 className="text-white text-[38px] font-[600]">
                      {item.timer__num}
                    </h1>
                    <h1 className="text-white text-[12px]">{item.hours}</h1>
                  </div>
                  <h1 className="text-white text-[38px] font-[600]">:</h1>
                  <div className="flex flex-col">
                    <h1 className="text-white text-[38px] font-[600]">
                      {item.timer__num}
                    </h1>
                    <h1 className="text-white text-[12px]">{item.minutes}</h1>
                  </div>
                  <h1 className="text-white text-[38px] font-[600]">:</h1>
                  <div className="flex flex-col">
                    <h1 className="text-white text-[38px] font-[600]">
                      {item.timer__num}
                    </h1>
                    <h1 className="text-white text-[12px]">{item.seconds}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Mushroom;
