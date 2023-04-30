import React from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

function Card({ img, titulo, desc, serv, duracao, valor }) {
  const text = `Olá, tudo bem ?! Gostaria de obter mais informações à respeito do serviço: ${titulo}.`;
  return (
    <div className="flex flex-col sm:flex-row bg-white rounded-2xl mx-4 font-poppins max-w-4xl h-[560px] sm:h-[320px] md:h-[300px] lg:h-64">
      <Image
        src={img}
        width={200}
        height={200}
        alt="footer_logo"
        className="w-full h-1/2  sm:sm:h-[320px] md:h-[300px] md:w-[256px] lg:w-[256px] lg:h-[256px] rounded-tl-2xl rounded-tr-2xl sm:rounded-tr-none sm:rounded-bl-2xl"
      />
      <div className="flex flex-col justify-between p-3 w-full h-full">
        <div className="flex flex-col">
          <h1 className="font-bold text-[17px] sm:text-xl text-center sm:text-start">
            {titulo}
          </h1>
          <p
            className="text-xs sm:text-sm mt-2"
            style={{ whiteSpace: "pre-line" }}
          >
            {desc}
          </p>
          <div className={`${desc ? "hidden" : "flex"} md:flex flex-col`}>
            {serv && (
              <h1 className="text-sm sm:text-base font-bold mt-1 sm:mt-4">
                Resumo das etapas
              </h1>
            )}
            <p className="text-xs sm:text-sm">{serv}</p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <h1>
            <span className="font-bold text-sm sm:text-base">Duração:</span>{" "}
            {duracao}
          </h1>

          <h1>
            <span className="font-bold text-sm sm:text-base">R$</span> {valor}
          </h1>

          <a
            className="flex justify-center gap-1 items-center bg-black text-white rounded-full text-xs px-2 py-1"
            href={`https://api.whatsapp.com/send?phone=558592971826&text=${text}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-[15px]" />
            AGENDE AGORA
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
