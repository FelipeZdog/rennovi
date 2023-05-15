import React, { useState, useRef } from "react";
import { servicos } from "../../constants/index";
import Card from "../../components/Card";
import { useRouter } from "next/router";

function Servicos() {
  const router = useRouter();
  const { id } = router.query;
  const filteredServicos = servicos.filter((item) => item.filterId === id);

  return (
    <div className="min-h-screen">
      <div className="banner-web2 h-[35vh] lg:h-[65vh]" />
      <div className="bg-[#222222]">
        <div className="flex flex-col mx-auto max-w-[1080px] justify-center items-center py-16">
          <h1 className="text-white text-3xl sm:text-5xl text-center underline">
            Conheça nossos <span className="font-bold">serviços</span>
          </h1>
          <div className="flex flex-col gap-4 mt-12 px-3">
            {filteredServicos.map((item, idx) => (
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
        </div>
      </div>
    </div>
  );
}

export default Servicos;
