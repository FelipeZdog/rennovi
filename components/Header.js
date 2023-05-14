import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "../constants/index";
import { useRouter } from "next/router";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Header() {
  const [toggle, setToggle] = useState(false);
  const router = useRouter();

  const handleNavLinkClick = (navLinkId) => {
    setToggle(false);
  };

  return (
    <nav
      className={`w-full flex sticky top-0 z-50 ${
        router.pathname === `/servicos` ? "bg-black" : "bg-white"
      } p-1 lg:p-3 justify-between items-center font-poppins font-semibold"`}
    >
      <Link href="/">
        <Image
          src={`${
            router.pathname === `/servicos`
              ? "/logos/renovi_white.png"
              : "/logos/renovi_black.png"
          }`}
          width={60}
          height={60}
          priority={true}
          alt="header"
          className="hidden lg:flex mx-4 lg:mx-12"
          onClick={() => router.push("/")}
        />
        <Image
          src={`${
            router.pathname === `/servicos`
              ? "/logos/renovi_white.png"
              : "/logos/renovi_black.png"
          }`}
          width={50}
          height={50}
          priority={true}
          alt="header"
          className="flex lg:hidden mx-2"
          onClick={() => router.push("/")}
        />
      </Link>

      <ul className="list-none hidden md:flex justify-end items-center flex-1 mx-4 lg:mx-12">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`font-normal cursor-pointer sm:text-[12px] md:text-[12px] lg:text-[17px] ${
              router.pathname === `/${nav.id}` ? "underline" : ""
            } ${
              nav.id === navLinks[navLinks.length - 1].id ? "mr-0" : "mr-10"
            } ${router.pathname === `/servicos` ? "text-white" : "text-black"}`}
            onClick={() => handleNavLinkClick(nav.id)}
          >
            <Link href={`/${nav.id}`}>{nav.title}</Link>
          </li>
        ))}
      </ul>
      <div className="md:hidden flex flex-1 justify-end items-center mx-4">
        <div onClick={() => setToggle((prev) => !prev)}>
          {toggle ? (
            <AiOutlineClose
              className={`${
                router.pathname === `/servicos` ? "text-white" : "text-black"
              } text-[25px]`}
            />
          ) : (
            <AiOutlineMenu
              className={`${
                router.pathname === `/servicos` ? "text-white" : "text-black"
              } text-[25px]`}
            />
          )}
        </div>

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-normal cursor-pointer text-[16px] ${
                  router.pathname === `/${nav.id}` ? "underline" : ""
                } ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                } text-white`}
              >
                <Link href={`/${nav.id}`} onClick={() => setToggle(false)}>
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
