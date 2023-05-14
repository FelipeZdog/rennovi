import React from "react";
import Button from "./Button";
import Link from "next/link";

function Banner() {
  return (
    <div
      className="flex justify-center items-center lg:justify-start lg:items-start banner-web h-[30vh] md:h[45vh] lg:h-[60vh] text-white font-poppins text-center lg:text-left"
      id="inicio"
    >
      <div className="flex flex-col lg:w-[100%] 2xl:w-[70%] sm:p-20 md:p-24 lg:p-[10%]">
        <h1 className="sm:text-[20px] md:text[30px] lg:text-[38px] 2x1:text-[50px]">
          Conheça a <span className="font-extrabold">Clínica Rennovi</span>®!
        </h1>
        <p className="mt-2 text-xs sm:text-lg fold:mx-5 sm:mx-0">
          A primeira clínica boutique da região metropolitana de Fortaleza.
        </p>
        <p className="mt-2 text-xs sm:text-lg fold:mx-5 sm:mx-0">
          Somos o maior time de especialistas com as maiores tecnologias no
          cuidado da saúde, beleza e bem estar.
        </p>
        <div className="mt-4">
          <Link href={`/servicos`}>
            <Button
              text="Veja mais"
              style="text-[9px] sm:text-[12px] md:text-[15px] lg:text-[20px]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
