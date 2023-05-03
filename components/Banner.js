import React from "react";
import Button from "./Button";
import Link from "next/link";

function Banner() {
  return (
    <div
      className="banner-web h-full w-full text-white font-poppins py-8"
      id="inicio"
    >
      <div className="flex flex-col lg:w-[90%] 2xl:w-[60%] lg:p-48 text-center lg:text-left">
        <h1 className="text-[22px] sm:text-[50px]">
          Conheça a clínica <span className="font-extrabold">Rennovi!</span>
        </h1>
        <p className="mt-2 text-xs sm:text-lg">
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
