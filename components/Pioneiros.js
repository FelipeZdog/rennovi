import React from "react";
import Slider from "./Slider";
import { slider } from "../constants/index";

function Pioneiros() {
  return (
    <div
      className="flex flex-col 2xl:flex-row font-poppins justify-between items-center lg:mx-60"
      id="tecnologias"
    >
      <div className="">
        <h1 className="text-[24px] fold:text-[18px] xs:text-[20px] sm:text-[34px] md:text[50px] leading-[50px] mt-4 sm:my-10 2xl:my-0">
          Pioneira em <span className="font-bold">Tecnologias Avançadas!</span>
        </h1>
      </div>
      <div className="sm:pl-0 md:pl-15">
        <Slider slider={slider} width={500} height={500} style="rounded-md" />
      </div>
    </div>
  );
}

export default Pioneiros;
