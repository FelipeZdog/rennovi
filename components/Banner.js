import React from "react";
import Button from "./Button";
import Link from "next/link";

function Banner() {
  return (
    <div
      className="flex justify-center items-center lg:justify-start lg:items-start banner-web h-[30vh] lg:h-[65vh] text-white font-poppins"
      id="inicio"
    >
      <div className="flex flex-col lg:w-[80%] 2xl:w-[70%] md:p-24 2xl:p-48 text-center lg:text-left">
        <h1 className="text-[22px] sm:text-[40px] md:text[50px]">
          Conheça a <span className="font-extrabold">Clínica Rennovi</span>®!
        </h1>
        <p className="mt-2 text-xs sm:text-lg fold:mx-5 sm:mx-0">
          A primeira clínica boutique da região metropolitana de Fortaleza.
          Somos o maior time de especialistas com as maiores tecnologias no
          cuidado da saúde, beleza e bem estar.
        </p>
        <div className="mt-6">
          <Link href={`/servicos`}>
            <Button text="Veja mais" style="text-[9px] sm:text-[20px]" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
