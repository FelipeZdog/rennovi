import React, { useState, useRef } from "react";
import { servicos } from "../constants/index";
import Card from "../components/Card";

function Servicos() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentServicos = servicos.slice(startIndex, endIndex);

  const totalPages = Math.ceil(servicos.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    scrollToServices(pageNumber);
  };

  const servicesRef = useRef(null);

  const scrollToServices = () => {
    servicesRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <div className="banner-web2 h-[35vh] sm:h-[65vh]" />
      <div className="bg-[#2E2E2E]">
        <div
          className="flex flex-col mx-auto max-w-[1080px] justify-center items-center py-16"
          ref={servicesRef}
        >
          <h1 className="text-white text-3xl sm:text-5xl text-center line">
            Conheça nossos serviços
          </h1>
          <div className="flex flex-col gap-4 mt-12 px-8 sm:px-3">
            {currentServicos.map((item, idx) => (
              <Card
                key={item.id}
                img={item.img}
                titulo={item.titulo}
                desc={item.desc}
                serv={item.serv}
                duracao={item.duracao}
                valor={item.valor}
              />
            ))}
          </div>
          <div className="flex mt-8 gap-3">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`${
                  i + 1 === currentPage
                    ? "bg-black text-white"
                    : "bg-white text-black"
                } font-normal cursor-pointer py-2 px-4 rounded-full`}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servicos;
