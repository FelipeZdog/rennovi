import React, { useState, useRef } from "react";
import { servicos } from "../constants/index";
import Card from "../components/Card";
import Select from "react-select";
import Head from "next/head";

function Servicos() {
  const [selectedOption, setSelectedOption] = useState({
    value: null,
    label: "TODOS",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [servicosFiltrados, setServicosFiltrados] = useState(servicos);
  const itemsPerPage = 5;

  const startIndex = (currentPage - 1) * itemsPerPage;

  const options = [
    { value: null, label: "TODOS" },
    { value: 1, label: "THE SPA" },
    { value: 2, label: "DERMATOLOGIA" },
    { value: 3, label: "ESTÉTICA AVANÇADA" },
    { value: 4, label: "DEPILAÇÃO A LASER - FEMININO" },
    { value: 5, label: "DEPILAÇÃO A LASER - MASCULINO" },
    { value: 6, label: "ODONTOLOGIA" },
    { value: 7, label: "TERAPIA CAPILAR" },
    { value: 8, label: "NUTRIÇÃO" },
    { value: 9, label: "NUTROLOGIA" },
  ];

  const totalPages = Math.ceil(servicosFiltrados.length / itemsPerPage);

  const displayedServicos = servicosFiltrados.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (pageNumber) => {
    if (pageNumber > totalPages) {
      setCurrentPage(totalPages);
    } else {
      setCurrentPage(pageNumber);
    }
    scrollToServices(pageNumber);
  };

  const handleSelectChange = (selected) => {
    setSelectedOption(selected);

    const selectedValue = selected.value;
    const filteredServicos = selectedValue
      ? servicos.filter((servico) => servico.filterId === selectedValue)
      : servicos;

    setCurrentPage(1);
    setServicosFiltrados(filteredServicos);
  };

  const servicesRef = useRef(null);

  const scrollToServices = () => {
    servicesRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderRadius: "8px",
      boxShadow: "none",
    }),
  };

  return (
    <div className="min-h-screen">
      <Head>
        <title>Clínica Rennovi® | Serviços</title>
        <meta name="description" content="by medusa" />
        <link rel="icon" href="/logos/renoviicon.png" />
      </Head>
      <div className="banner-web2 h-[35vh] lg:h-[65vh]" />
      <div className="bg-[#222222]">
        <div
          className="flex flex-col mx-auto max-w-[1080px] justify-center items-center py-16"
          ref={servicesRef}
        >
          <h1 className="text-white text-3xl sm:text-5xl text-center underline">
            Conheça nossos <span className="font-bold">serviços</span>
          </h1>
          <div className="flex flex-row justify-center items-center gap-5 pt-3 pb-0">
            <h1 className="text-xl text-white">Filtrar por:</h1>
            <Select
              value={selectedOption}
              onChange={handleSelectChange}
              options={options}
              placeholder="Selecione uma opção"
              className="w-56 py-2 rounded"
              styles={customStyles}
              classNamePrefix="react-select"
            />
          </div>

          <div className="flex flex-col gap-4 mt-12 px-3">
            {displayedServicos.map((item, idx) => (
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
                } font-normal cursor-pointer py-2 px-4 rounded-full page-number`}
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
