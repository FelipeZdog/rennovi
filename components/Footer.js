import React from "react";
import Image from "next/image";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTelegram,
  FaTiktok,
  FaWhatsapp,
  FaMapPin,
  FaPhoneAlt,
} from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";

function Footer() {
  const text = "Olá, poderia me ajudar ?";
  return (
    <div className="flex flex-col font-poppins">
      <div className="bg-black text-white">
        <div className="flex flex-col lg:flex-row justify-between py-8 lg:items-center mx-2 lg:mx-10">
          <div className="flex">
            <Image
              src="/logos/renovi_white.png"
              width={110}
              height={110}
              priority={true}
              alt="footer_logo"
              className="mb-6 lg:mb-0"
            />
          </div>

          <div className="flex flex-col justify-center items-start gap-2">
            <h1 className="text-xl sm:text-2xl mb-2">Contate-nos</h1>
            <div className="flex justify-center items-center gap-2">
              <div className="bg-[#33383b] rounded-full p-1">
                <FaMapPin className="icon" />
              </div>
              <h1 className="fold:text-xs xs:text-sm sm:text-base text-[#8f9296]">
                Rua Tabelião José Gama Filho, 1958 Centro, Pacajus
              </h1>
            </div>
            <div className="flex justify-center items-center gap-2">
              <div className="bg-[#33383b] rounded-full p-1">
                <FaPhoneAlt className="icon" />
              </div>
              <h1 className="fold:text-xs xs:text-sm sm:text-base text-[#8f9296]">
                +55 (85) 99297-1826
              </h1>
            </div>
            <div className="flex justify-center items-center gap-2">
              <div className="bg-[#33383b] rounded-full p-1">
                <AiFillMail className="icon" />
              </div>
              <h1 className="fold:text-xs xs:text-sm sm:text-base text-[#8f9296]">
                atendimentorennovi@gmail.com
              </h1>
            </div>
          </div>
          <div className="flex flex-col max-w-lg mt-6 lg:mt-0">
            <h1 className="text-xl sm:text-2xl">Sobre nós</h1>
            <p className=" text-[#8f9296] text-sm mt-2">
              Somos o maior time de especialistas com as maiores tecnologias no
              cuidado da saúde, beleza e bem estar.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.instagram.com/clinicarennovi/"
                target="_blank"
              >
                <FaInstagram className="social-media" />
              </a>
              <a
                href="https://www.facebook.com/clinicarennovi/"
                target="_blank"
              >
                <FaFacebook className="social-media" />
              </a>
              <a
                href="https://www.youtube.com/@clinicarennovi9852"
                target="_blank"
              >
                <FaYoutube className="social-media" />
              </a>
              <a href="https://t.me/mundorennovi" target="_blank">
                <FaTelegram className="social-media" />
              </a>
              <a href="https://www.tiktok.com/@clinicarennovi" target="_blank">
                <FaTiktok className="social-media" />
              </a>
              <a
                href={`https://api.whatsapp.com/send?phone=558592971826&text=${text}`}
                target="_blank"
              >
                <FaWhatsapp className="social-media" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center mx-4">
          <h1 className="text-black fold:text-xs sm:text-base">
            Todos os direitos reservados © Clínica Rennovi - 2023
          </h1>
          <div className="flex flex-col mt-4 sm:mt-0">
            <Image
              src="/logos/medusa_2.png"
              alt="especialistas"
              width={40}
              height={40}
              className="rounded-md"
              priority="true"
            />
            <Image
              src="/logos/medusa.png"
              alt="especialistas"
              width={40}
              height={40}
              className="rounded-md"
              priority="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
