import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "../constants/index";
import { useRouter } from "next/router";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Header() {
  const [toggle, setToggle] = useState(false);
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const onclick = () => {
    setShowDropdown(false);
    setToggle(false);
  };

  return (
    <nav
      className={`w-full flex sticky top-0 z-50 ${
        router.pathname.startsWith("/servicos/") ? "bg-black" : "bg-white"
      } p-1 lg:p-3 justify-between items-center font-poppins font-semibold"`}
    >
      <Link href="/">
        <Image
          src={`${
            router.pathname.startsWith("/servicos/")
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
            router.pathname.startsWith("/servicos/")
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
            className={`font-normal cursor-pointer sm:text-[12px] md:text-[15px] lg:text-[17px] ${
              nav.id === navLinks[navLinks.length - 1].id ? "mr-0" : "mr-10"
            } ${router.pathname === `/${nav.id}` ? "underline" : ""} ${
              router.pathname.startsWith("/servicos/")
                ? "text-white"
                : "text-black"
            }`}
            onClick={() => nav.title === "SERVIÇOS" && handleDropdown()}
          >
            {nav.dropdown ? (
              <>
                <span>{nav.title}</span>
                {showDropdown && (
                  <ul
                    className="absolute right-40 w-40 sm:text-[10px] md:text-[13px] lg:text-[16px]  bg-white border border-gray-200 divide-y divide-gray-200 rounded-md shadow-lg text-black"
                    onClick={() => setShowDropdown(false)}
                  >
                    {nav.dropdown.map((item) => (
                      <li
                        key={item.id}
                        className="hover:bg-black hover:text-white text-center"
                      >
                        <Link href={`/servicos/${item.id}`}>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <Link href={`/${nav.id}`}>{nav.title}</Link>
            )}
          </li>
        ))}
      </ul>

      <div //caixa do menu hamburguer
        className="md:hidden flex flex-1 justify-end items-center mx-4 text-black"
      >
        <div onClick={() => setToggle((prev) => !prev)}>
          {toggle ? (
            <AiOutlineClose
              className={`${
                router.pathname.startsWith("/servicos/")
                  ? "text-white"
                  : "text-black"
              } text-[25px]`}
            />
          ) : (
            <AiOutlineMenu
              className={`${
                router.pathname.startsWith("/servicos/")
                  ? "text-white"
                  : "text-black"
              } text-[25px]`}
            />
          )}
        </div>

        <div //caixa do submenu
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-normal cursor-pointer sm:text-[12px] md:text-[15px] lg:text-[17px] ${
                  nav.id === navLinks[navLinks.length - 1].id ? "mr-0" : "mr-0"
                } ${router.pathname === `/${nav.id}` ? "underline" : ""} ${
                  router.pathname.startsWith("/servicos/")
                    ? "text-white"
                    : "text-white"
                }`}
                onClick={() => nav.title === "SERVIÇOS" && handleDropdown()}
              >
                {nav.dropdown ? (
                  <>
                    <span>{nav.title}</span>
                    {showDropdown && (
                      <ul
                        className="absolute right-40 w-40 sm:text-[7px] md:text-[13px] lg:text-[16px]  bg-black divide-y divide-gray-00 rounded-md shadow-lg text-white"
                        onClick={onclick}
                      >
                        {nav.dropdown.map((item) => (
                          <li
                            key={item.id}
                            className="hover:bg-gray-100 hover:text-black text-center"
                          >
                            <Link href={`/servicos/${item.id}`}>
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link onClick={onclick} href={`/${nav.id}`}>
                    {nav.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
