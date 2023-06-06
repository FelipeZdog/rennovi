import React from "react";
import Slider from "./Slider";
import Slider2 from "./Slider2";
import { slider } from "../constants/index";
import { slidemobile } from "../constants/index";

function Pioneiros() {
  return (
    <div
      className="flex flex-col 2xl:flex-row font-poppins justify-between items-center lg:mx-40"
      id="tecnologias"
    >
      <div className="">
        <h1 className="text-[24px] fold:text-[18px] xs:text-[px] sm:text-[30px] md:text[40px] leading-[50px] mt-4 sm:my-10 2xl:my-0">
          Pioneira em <span className="font-bold">Tecnologias Avançadas!</span>
        </h1>
      </div>
      <div className="sm:pl-0 md:pl-15 hidden sm:flex">
        <Slider slider={slider} width={500} height={500} style="rounded-md" />
      </div>
      <div className="sm:pl-0 md:pl-15 sm:hidden lg:hidden">
        <Slider2
          slider={slidemobile}
          width={500}
          height={500}
          style="rounded-md"
        />
      </div>
    </div>
  );
}

export default Pioneiros;
