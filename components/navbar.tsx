import Link from "next/link";

import { Disclosure } from "@headlessui/react";

import ThemeChanger from "./DarkSwitch";

export default function Navbar() {
  const navigation = [
    "الرئيسية",
    "الاشتراكات",
    "تواصل معنا"
  ];

  return (
    <div className="w-full relative">
    <nav className="container relative flex items-center  justify-evenly p-8 mx-auto lg:justify-evenly ">
      {/* Logo  */}
      <Disclosure>
        {({ open }) => (
            <div className="flex flex-wrap items-center ml-auto justify-right w-full lg:w-auto">
            <Link href="/">
              <a className="flex items-center text-5xl font-medium text-primary dark:text-gray-100">
                <span>
                </span>
                <span>صيغها</span>
              </a>
            </Link>
          </div>
  
        )}
      </Disclosure>
  
      {/* menu  */}
      <div id="ppp" className="hidden text-center lg:flex  lg:items-center absolute top-0 left-0 right-0 bottom-0">
        <ul className="items-center justify-center   flex-1 pt-6 list-none lg:pt-0 lg:flex">
          {navigation.map((menu, index) => (
            <li className="mr-3 nav__item" key={index}>
              <Link href="/">
                <a className={`
                  inline-block px-4 py-2 text-lg
                  font-normal text-gray-500 no-underline 
                  rounded-md dark:text-gray-300
                  hover:text-primary
                  focus:text-primary
                  focus:bg-primary focus:outline-none
                  dark:focus:bg-gray-800
                  ${index == 0 ? "text-primary dark:text-white" : ""}
                `}>
                  {menu}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
  
      <div className="mr-3 space-x-4 lg:flex nav__item">
        <ThemeChanger />
      </div>
    </nav>
  </div>
    );
}
