"use client";
import React, { useEffect, useState } from "react";

import { navLinks } from "../constants";

import { styles } from "./styles";
import Image from "next/image";
import { logo, menu, close } from "./Common/CdnAssets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 fixed z-20 ${
        scrolled ? "bg-primary rounded-b-xl" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-8xl mx-auto lg:px-16">
        <a
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="bg-transfarent rounded-full border-none  p-1 border-emerald-300">
            <Image
              src={logo}
              alt="logo"
              className="w-10 h-10 object-contain rounded-full "
              width={150}
              height={150}
            />
          </div>
          <p className="text-emerald-400 text-[20px] font-bold cursor-pointer flex font-poppins">
            WeeroDigital
          </p>
        </a>

        <ul className="list-none hidden lg:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-emerald-400" : "text-secondary"
              } hover:text-white text-[18px] md:text-[20px] lg:text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="lg:hidden flex flex-1 justify-end items-center">
          <Image
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
            width={50}
            height={50}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 toggle-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-emerald-400" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
