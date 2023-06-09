import React from "react";
import Button from "./Button";
import Link from "next/link";

function Banner() {
  return (
    <div
      className="flex justify-center items-center lg:justify-start lg:items-start banner-web h-[40vh] p-10 sm:h-[40vh] lg:h-full text-white font-poppins text-center lg:text-left centered-content w-full sm:p-10 md:p-[10%] lg:p-[10%]"
      id="inicio"
    >
      <div className="flex flex-col centered-content">
        <h1 className="text-[23px] sm:text-[25px] md:text[30px] lg:text-[40px] 2x1:text-[50px] py-0">
          Conheça a <span className="font-extrabold">Clínica Rennovi</span>®!
        </h1>
        <p className="mt-2 text-[12px] sm:text-[12px] md:text-[15px] lg:text-[20px]">
          A primeira clínica boutique da região metropolitana de Fortaleza.
        </p>

        {/* Aqui embaixo é o texto 2 do normal  */}

        <p className="mt-2 text-[12px] sm:text-[12px] md:text-[15px] lg:text-[20px] hidden lg:flex">
          Somos o maior time de especialistas com as maiores tecnologias
          <br></br> no cuidado da saúde, beleza e bem estar.
        </p>

        {/* Aqui embaixo é o texto 2 do mobile  */}

        <p className="mt-2 text-[12px] sm:text-[12px]  md:text-[15px] lg:text-[20px] lg:hidden">
          Somos o maior time de especialistas com as <br></br>maiores
          tecnologias no cuidado da<br></br> saúde, beleza e bem estar.
        </p>
        <div className="mt-4">
          <Link href={`/sobre-nos`}>
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
