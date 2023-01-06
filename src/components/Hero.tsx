import React from "react";
import pic from "../utils/background2.png";
import cardio from "../utils/cardio.svg";
import group from "../utils/group.svg";
import training from "../utils/training.svg";
import swim from "../utils/swim.svg";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="flex flex-wrap md:flex-nowrap lg:justify-center items-start mx-auto text-[#ffff] md:justify-end min-h-screen ">
      <motion.img
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        src={pic}
        alt="background"
        className=" lg:mt-16 object-fill lg:max-w-[800px] md:max-w-[500px] md:mt-24 "
      />
      <div className="md:mt-20 mt-3 mx-3">
        <h1 className="md:text-[38px] text-[24px] font-semibold text-left font-mono">
          Get Fit with Us at Script{"’"}s Gym.
        </h1>
        <p className="tracking-widest text-left md:text-[32px] text-[19px] font-thin ">
          Where fitness meets fun
        </p>
        <button
          type="button"
          className="text-white text-[24px] hover:text-white border border-[#FE9E16] hover:bg-[#FE9E16] focus:ring-4 focus:outline-none focus:ring-[#FE9E16] rounded-[20px] px-2 py-1 mt-[8.5rem] absolute top-20 right-0 mr-[5.5rem] md:relative md:top-0 tracking-widest">
          Contact Us
        </button>
        <h1 className="mt-12 mb-2">What we Offer</h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className=" my-3 text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <div className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
            <img
              src={cardio}
              className="w-4 h-4 mr-2 fill-current"
              alt="cardio"
            />
            <p>State-of-the-art cardio and weight training equipments</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className=" my-3 text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <div className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
            <img
              src={training}
              className="w-4 h-4 mr-2 fill-current"
              alt="cardio"
            />
            <p>Personal training sessions with experienced trainers</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className=" my-3 text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <div className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
            <img
              src={group}
              className="w-4 h-4 mr-2 fill-current"
              alt="cardio"
            />
            <p>Group fitness classes led by certified instructors</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className=" my-3 text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <div className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
            <img
              src={swim}
              className="w-4 h-4 mr-2 fill-current"
              alt="cardio"
            />
            <p>Amenities such as a sauna, steam room, and pool</p>
          </div>
        </motion.div>
        <div className="flex flex-wrap items-center justify-between">
          <div>
            <h1 className="mt-12 tracking-[10px] text-base mb-3">Location</h1>
            <ul className=" space-y-3">
              <li>Canada</li>
              <li>Street: 447 Granville St</li>
              <li>State/province/area: Nova Scotia</li>
              <li>Phone number: +1902-843-1941</li>
              <li>Zip code: B3K 5M1</li>
            </ul>
          </div>
          <div>
            <h1 className="mt-8 tracking-[10px] text-base mb-2">
              Hours of operation
            </h1>
            <p>
              Mon-Sun <br /> 8am - 11pm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
