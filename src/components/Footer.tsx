import React from "react";

type Props = {};

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full p-4  border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6  dark:border-gray-600">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          Script Gym
        </a>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a href="#aboutus" className="mr-4 hover:underline md:mr-6 ">
            About Us
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
