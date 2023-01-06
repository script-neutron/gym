import React, { useEffect, useState } from "react";
import logo from "../utils/logo1.svg";
import { motion } from "framer-motion";

function Navbar() {
  const [open, setopen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setopen(false);
    }, 10000);

    return () => {
      clearTimeout(10000);
    };
  }, [open]);

  return (
    <motion.nav
      initial={{ opacity: 0, x: -400, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      className=" py-2.5 fixed w-full z-20 top-0 left-0">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="https://flowbite.com/" className="flex items-center">
          <img src={logo} className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Script Fitness
          </span>
        </a>
        <button
          onClick={() => setopen(!open)}
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-1  dark:text-gray-400 "
          aria-controls="navbar-default"
          aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 border rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  ">
            <li>
              <a
                href="/"
                className="text-gray-900 hover:text-white border-t border-gray-800 hover:border-b focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-[#FE9E16] dark:text-gray-400 dark:hover:text-white dark:hover:border-t dark:focus:ring-border-t">
                HOME
              </a>
            </li>
            <li>
              <a
                href="#trainers"
                className="text-gray-900 hover:text-white border-t border-gray-800 hover:border-b focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-[#FE9E16] dark:text-gray-400 dark:hover:text-white dark:hover:border-t dark:focus:ring-border-t">
                TRAINERS
              </a>
            </li>

            <li>
              <a
                href="#pricing"
                className="text-gray-900 hover:text-white border-t border-gray-800 hover:border-b focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-[#FE9E16] dark:text-gray-400 dark:hover:text-white dark:hover:border-t dark:focus:ring-border-t">
                PRICING
              </a>
            </li>
            <li>
              <a
                href="#aboutus"
                className="text-gray-900 hover:text-white border-t border-gray-800 hover:border-b focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-[#FE9E16] dark:text-gray-400 dark:hover:text-white dark:hover:border-t dark:focus:ring-border-t">
                ABOUT US
              </a>
            </li>
          </ul>
        </div>
      </div>
      {open && (
        <motion.div
          initial={{ opacity: 0, x: -400, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          id="dropdown"
          className=" mx-2 rounded shadow  ">
          <ul className="grid grid-cols-4 gap-1 ">
            <li className="text-gray-900 hover:text-white border border-gray-800 hover:border-b focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm text-center py-1 mx-2 mt-2 dark:border-[#FE9E16] dark:text-gray-400 dark:hover:text-white dark:hover:border-t dark:focus:ring-border-t">
              <a href="/">HOME</a>
            </li>
            <li className="text-gray-900 hover:text-white border border-gray-800 hover:border-b focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm text-center py-1 mx-2 mt-2 dark:border-[#FE9E16] dark:text-gray-400 dark:hover:text-white dark:hover:border-t dark:focus:ring-border-t">
              <a href="#trainers">TRAINERS</a>
            </li>

            <li className="text-gray-900 hover:text-white border border-gray-800 hover:border-b focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm text-center py-1 mx-2 mt-2 dark:border-[#FE9E16] dark:text-gray-400 dark:hover:text-white dark:hover:border-t dark:focus:ring-border-t">
              <a href="#pricing">PRICING</a>
            </li>
            <li className="text-gray-900 hover:text-white border border-gray-800 hover:border-b focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm text-center py-1 mx-2 mt-2 dark:border-[#FE9E16] dark:text-gray-400 dark:hover:text-white dark:hover:border-t dark:focus:ring-border-t">
              <a href="#aboutus">ABOUT US</a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;
