import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navbarRef = useRef();

  useEffect(() => {
    let tl = gsap.timeline();
    gsap.from(".logo", { y: -300, rotate: 365, duration: 1 });
    gsap.from(".nav-link", {
      x: 800,
      stagger: 0.25,
      duration: 0.5,
    });
    tl.from(".home__first-section", {
      x: -1000,
      // stagger: 0.25,
      duration: 0.5,
    });
    tl.from(".home__second-section__image", {
      x: 1000,
      // stagger: 0.25,
      duration: 1,
    });
    tl.from(".gradient__zone", {
      opacity: 0,
      stagger: 0.25,
      duration: 0.5,
    });
  }, []);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img
        ref={navbarRef}
        src={logo}
        alt="hoobank"
        className="w-[124px] h-[32px] logo"
      />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`nav-link font-poppins font-normal cursor-pointer text-[16px] text-white  ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prevState) => !prevState)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white  ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                }`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
