/* import React from "react";
import Button from "./Button";
import { useForm, SubmitHandler } from "react-hook-form";

function Grupo() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (formData) => {
    const subject = "Quero fazer parte do grupo vip.";
    const body = `NOME: ${formData.name}\nEMAIL: ${formData.email} <br> NÚMERO: ${formData.number}`;
    window.location.href = `mailto:atendimentorennovi@gmail.com?subject=${subject}&body=${body}&bodyIsHtml=true`;
  };

  return (
    <div
      className="flex flex-col bg-[#2E2E2E] font-poppins text-white py-12 sidebar"
      id="grupo-vip"
    >
      <div className="mx-12">
        <div className="flex justify-center">
          <h1 className="text-lg lg:text-3xl lg:w-1/2 text-center select-none">
            Faça parte do nosso grupo Vip e receba novidades, informações,
            ofertas e convites especiais.
          </h1>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3 lg:w-1/2 mx-auto py-6"
        >
          <input
            {...register("name")}
            type="text"
            placeholder="Seu nome"
            required
          />
          <input
            {...register("email")}
            type="email"
            placeholder="Seu email"
            required
          />
          <input
            {...register("number")}
            type="number"
            placeholder="Seu número"
            required
          />
          <Button
            text="Quero fazer parte do grupo Vip!"
            style="w-full text-sm sm:text-[20px] py-4"
          />
        </form>
      </div>
    </div>
  );
}

export default Grupo; */

import React from "react";
import Button from "./Button";
import { useForm, SubmitHandler } from "react-hook-form";

function Grupo() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (formData) => {
    const name = encodeURIComponent(formData.name);
    const email = encodeURIComponent(formData.email);
    const number = encodeURIComponent(formData.number);
    const message = `Olá, meu nome é ${name} e gostaria de fazer parte do grupo vip.%0A%0AEste é meu Email: ${email}%0AEste é meu Número: ${number}`;
    const url = `https://api.whatsapp.com/send?phone=+5585992971826&text=${message}`;

    window.open(url);
  };

  return (
    <div
      className="flex flex-col bg-[#222222] font-poppins text-white py-12 sidebar"
      id="grupo-vip"
    >
      <div className="mx-12">
        <div className="flex justify-center">
          <h1 className="text-lg lg:text-3xl lg:w-1/2 text-center select-none">
            Faça parte do nosso grupo Vip e receba novidades, informações,
            ofertas e convites especiais.
          </h1>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3 lg:w-1/2 mx-auto py-6"
        >
          <input
            {...register("name")}
            type="text"
            placeholder="Seu nome"
            required
          />
          <input
            {...register("email")}
            type="email"
            placeholder="Seu email"
            required
          />
          <input
            {...register("number")}
            type="number"
            placeholder="Seu número com (DDD)"
            required
          />
          <Button
            text="Quero fazer parte do grupo Vip!"
            style="w-full text-sm sm:text-[20px] py-4"
          />
        </form>
      </div>
    </div>
  );
}

export default Grupo;
