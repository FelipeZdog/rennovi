import React, { useState, useRef } from "react";
import { servicos } from "../../constants/index";
import Card from "../../components/Card";
import { useRouter } from "next/router";
import Head from "next/head";

function Servicos() {
  const router = useRouter();
  const { id } = router.query;
  const filteredServicos = servicos.filter((item) => item.filterId === id);

  // Obtém o nome da página atual
  const paginaAtual =
    filteredServicos.length > 0 ? filteredServicos[0].filterId : ""; // Use o campo "categoria" do primeiro item filtrado como nome da página

  return (
    <div className="min-h-screen">
      <Head>
        <title>Clínica Rennovi® | {paginaAtual}</title>
        <meta name="description" content="by medusa" />
        <link rel="icon" href="/logos/renoviicon.png" />
      </Head>
      <div className="banner-web2 h-[35vh] lg:h-[60vh]" />
      <div className="bg-[#222222]">
        <div className="flex flex-col mx-auto max-w-[1080px] justify-center items-center py-10">
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
