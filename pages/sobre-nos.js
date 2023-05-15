import React from "react";
import Image from "next/image";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import Head from "next/head";

/* function SobreNos() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (formData) => {
    const subject = "Quero entrar em contato.";
    const body = `NOME: ${formData.name} | EMAIL: ${formData.email} | NÚMERO: ${formData.number} | MENSAGEM: ${formData.message}`;
    window.location.href = `mailto:atendimentorennovi@gmail.com?subject=${subject}&body= ${body}`;
  }; */

function SobreNos() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (formData) => {
    const name = encodeURIComponent(formData.name);
    const email = encodeURIComponent(formData.email);
    const number = encodeURIComponent(formData.number);
    const message = encodeURIComponent(formData.message);
    const message2 = `Gostaria de entrar em contato. %0ANome: ${name}%0AEmail: ${email}%0ANúmero: ${number} %0A${message}`;
    const url = `https://api.whatsapp.com/send?phone=+5585992971826&text=${message2}`;

    window.open(url);
  };

  return (
    <div className="min-h-screen bg-[#2E2E2E] text-white">
      <Head>
        <title>Clínica Rennovi® | Sobre Nós</title>
        <meta name="description" content="by medusa" />
        <link rel="icon" href="/logos/renoviicon.png" />
      </Head>
      <div className="flex flex-col mx-auto max-w-[1080px] py-16">
        <h1 className="text-center text-3xl sm:text-5xl font-poppins underline">
          Conheça <span className="font-bold">quem somos</span>
        </h1>
        {/* missao */}
        <div className="flex justify-center items-center mt-12 mx-4">
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
            <div className="flex justify-center">
              <Image
                src="/about/img1.png"
                alt="slide_image"
                width={410}
                height={410}
                className="hidden sm:flex"
              />
              <Image
                src="/about/img1.1.png"
                alt="slide_image"
                width={173}
                height={201}
                className="flex sm:hidden"
              />
            </div>

            <div className="flex flex-col justify-center gap-3">
              <h1 className="text-2xl sm:text-3xl font-bold">Missão</h1>
              <p className="text-lg sm:text-xl">
                Proporcionar aos pacientes beleza e bem estar com excelência,
                humanidade, acompanhando os avanços científicos e investindo em
                tecnologias avançadas.
              </p>
            </div>
          </div>
        </div>
        {/* visao */}
        <div className="flex justify-center items-center mx-4 mt-12 sm:mt-0">
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
            <div className="flex justify-center sm:hidden">
              <Image
                src="/about/img1.2.png"
                alt="slide_image"
                width={173}
                height={201}
                className=""
              />
            </div>
            <div className="flex flex-col justify-center gap-3">
              <h1 className="text-2xl sm:text-3xl font-bold">Visão</h1>

              <p className="text-lg sm:text-xl">
                Ser reconhecida como uma clínica de excelência que proporciona
                grandes experiências e que possui compromisso com a vida.
              </p>
            </div>
            <div className="justify-center hidden sm:flex">
              <Image
                src="/about/img2.png"
                alt="slide_image"
                width={335}
                height={335}
                className=""
              />
            </div>
          </div>
        </div>
        {/* valores */}
        <div className="flex flex-col justify-center items-center mt-12 mx-4">
          <div className="flex justify-center sm:hidden pb-6">
            <Image
              src="/about/img1.6.png"
              alt="slide_image"
              width={203}
              height={201}
              className=""
            />
          </div>
          <div className="justify-center pb-10 hidden sm:flex">
            <Image
              src="/about/img1.6.png"
              alt="slide_image"
              width={353}
              height={351}
              className=""
            />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold">Valores</h1>
          <div className="flex flex-col gap-6 text-lg mt-8">
            <h1 className="text-lg sm:text-2xl">
              <span className="font-bold">Excelência:</span> Busca contínua
              pelos melhores especialistas e equipamentos de ponta para atender
              as necessidades dos pacientes.
            </h1>
            <h1 className="text-lg sm:text-2xl">
              <span className="font-bold">Humanização:</span> Atendimento
              individualizado e com respeito ao bem estar de pacientes e corpo
              clínico.
            </h1>
            <h1 className="text-lg sm:text-2xl">
              <span className="font-bold">Inovação:</span> Estudo e solução que
              proporcionem melhores alternativas as queixas dos pacientes e que
              superem as expectativas dos mesmos.
            </h1>
            <h1 className="text-lg sm:text-2xl">
              <span className="font-bold">Sustentabilidade:</span> Implementação
              de práticas que colaboram para a preservação do meio ambiente e
              qualidade de vida.
            </h1>
            <h1 className="text-lg sm:text-2xl">
              <span className="font-bold">Inclusão:</span> Implementação de
              práticas que ofereça a todos oportunidades iguais de acesso aos
              serviços.
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-0 mx-0 bg-white">
        <h1 className="text-center text-3xl sm:text-5xl font-poppins underline text-black my-10">
          <span className="font-bold">Curiosidades</span>
        </h1>
      </div>
      {/* pioneirismo */}
      <div className="bg-[#ffffff] sm:py-8">
        <div className="flex flex-col mx-auto max-w-[1080px]">
          <div className="flex flex-col mx-4 gap-12 sm:gap-8">
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 ">
              <div className="flex justify-center">
                <Image
                  src="/about/img3.png"
                  alt="slide_image"
                  width={500}
                  height={500}
                  className="hidden sm:flex"
                />
                <Image
                  src="/about/img1.3.png"
                  alt="slide_image"
                  width={173}
                  height={201}
                  className="flex sm:hidden"
                />
              </div>

              <div className="flex flex-col justify-center gap-3">
                <h1 className="text-2xl sm:text-3xl font-bold text-black">
                  Pioneirismo em tecnologias avançadas
                </h1>
                <p className="text-lg sm:text-xl text-black font-regular">
                  Sempre que surge um novo equipamento na área dermatológica,
                  estética ou odontológica e que possui estudos de comprovação
                  científica de resultados e segurança, a Rennovi traz em
                  primeira mão.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-10 ">
              <div className="flex sm:hidden justify-center">
                <Image
                  src="/about/img1.4.png"
                  alt="slide_image"
                  width={173}
                  height={201}
                  className=""
                />
              </div>
              <div className="flex flex-col justify-center gap-3">
                <h1 className="text-2xl sm:text-3xl font-bold text-black">
                  Como a ideia de clínica boutique surgiu?
                </h1>
                <p className="text-lg sm:text-xl text-black font-regular">
                  Os sócios proprietários Vinícius Ferreira e Rógerio Rodrigues
                  tiveram a ideia de instalar a primeira clínica boutique na
                  zona metropolitana de Fortaleza, em Pacajus-CE, no dia 9 de
                  fevereiro de 2018.
                </p>
                <p className="text-lg sm:text-xl text-black font-regular">
                  Segundo eles, a ideia inicial foi criar um espaço que além de
                  entregar qualidade nos serviços de estética e odontologia,
                  fosse capaz de proporcionar experiências, zelo, humanização,
                  inovação, arsenal tecnológico e grandes especialistas.
                </p>
              </div>
              <div className="hidden sm:flex justify-center">
                <Image
                  src="/about/img4.png"
                  alt="slide_image"
                  width={550}
                  height={550}
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* simbolo */}
      <div className="bg-[#ffffff] sm:py-0">
        <div className="flex flex-col mx-auto max-w-[1080px] bg-white text-black py-8 sm:py-16">
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <div className="flex sm:hidden justify-center">
              <Image
                src="/about/img1.5.png"
                alt="slide_image"
                width={173}
                height={201}
              />
            </div>
            <div className="flex flex-col gap-4 mx-4">
              <h1 className="text-2xl sm:text-3xl font-bold">O símbolo</h1>
              <p className="text-lg sm:text-xl font-normal">
                O símbolo celta chamado “Trisquel” foi a inspiração para a
                criação da logomarca Rennovi.
              </p>
              <p className="text-lg sm:text-xl font-normal">
                Entre os seus significados está a busca pela renovação,
                equilíbrio entre corpo, mente e espírito.
              </p>
              <p className="text-lg sm:text-xl font-normal">
                Além disso, duas características semelhantes entre a Rennovi e o
                símbolo Trisquel é a busca pela evolução e a aprendizagem
                contínua.
              </p>
            </div>

            <div className="hidden sm:flex justify-center">
              <Image
                src="/about/img5.png"
                alt="slide_image"
                width={350}
                height={350}
              />
            </div>
          </div>
        </div>
        <div className="bg-[#222222] py-0">
          <div className="flex flex-col mx-auto max-w-[1080px]">
            <div className="flex flex-col bg-[#222222] font-poppins text-white py-6 sm:py-12 sidebar">
              <div className="mx-12 sm:mx-4">
                <div className="flex justify-center">
                  <h1 className="text-3xl lg:text-4xl lg:w-1/2 text-center select-none">
                    Entre em contato
                  </h1>
                </div>

                <form
                  className="flex flex-col gap-3 lg:w-1/2 mx-auto py-8"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <input
                    {...register("name")}
                    type="text"
                    placeholder="Seu nome"
                    required
                  />
                  <input
                    {...register("email")}
                    type="text"
                    placeholder="Seu email"
                    required
                  />
                  <input
                    {...register("number")}
                    type="text"
                    placeholder="Seu número"
                    required
                  />
                  <textarea
                    {...register("message")}
                    type="text"
                    placeholder="Digite seu texto"
                    required
                  />
                  <Button
                    text="Enviar Mensagem"
                    style="w-full text-[15px] sm:text-[20px]"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SobreNos;
