import React from "react";
import { useGetWorksQuery } from "./WorksSlice";

const Works = () => {
  const { data: works } = useGetWorksQuery();
  return (
    <section className="w-[100%] bg-[#2b2b2b] p-[115px] flex justify-center ">
      <div className="flex flex-col gap-[50px]">
        <div className="flex flex-col">
          <h1 className="text-[38px] text-white font-[600]">How it works</h1>
          <p className=" text-white text-[22px]">Find out how to get started</p>
        </div>
        <div className="flex w-[1050px] justify-between">
          {works?.map((item, index) => {
            return (
              <div
                key={index}
                className="w-[330px] bg-[#3b3b3b] p-[30px] rounded-[20px] flex flex-col items-center h-[440px] justify-between"
              >
                <img
                  src={item.img}
                  alt={item.theme}
                  className="w-[220px] h-[220px] rounded-full mb-[10px]"
                />
                <h1 className="text-white text-[22px] font-[600]">
                  {item.theme}
                </h1>
                <p className="text-white text-center">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Works;
