import React from "react";

type Props = {};

function AboutUs() {
  return (
    <div
      className=" pb-[150px] items-center justify-center min-h-screen relative max-w-7xl md:mx-auto mx-3"
      id="aboutus">
      <h1 className="md:text-[38px] text-[24px] text-white tracking-[10px] text-center pt-[40px] mb-6">
        <span className="border-x border-b border-[#FE9E16] rounded-md px-3">
          About Us
        </span>
      </h1>
      <p className="text-xl font-medium text-gray-500 dark:text-gray-400">
        Welcome to Script Gym! We are a community-focused fitness facility
        located in the heart of downtown.
      </p>
      <p className="text-xl font-medium text-gray-500 dark:text-gray-400">
        Our mission is to help people of all fitness levels achieve their goals
        and lead healthy, active lifestyles. We offer a wide range of equipment
        and classes, including cardio and weight training, yoga, pilates, and
        kickboxing.
      </p>
      <p className="text-xl font-medium text-gray-500 dark:text-gray-400">
        Our team of certified trainers is dedicated to providing personalized
        attention and support to help you reach your full potential.
      </p>
      <p className="text-xl font-medium text-gray-500 dark:text-gray-400">
        In addition to our state-of-the-art facilities and expert staff, we also
        offer a variety of amenities to enhance your workout experience. These
        include a sauna, steam room, and pool. At XYZ Gym, we believe that
        fitness should be accessible and enjoyable for everyone.
      </p>
      <p className="text-xl font-medium text-gray-500 dark:text-gray-400">
        We offer flexible membership options to suit your needs and budget, and
        we welcome people of all ages and abilities. We hope you will join us on
        your fitness journey!
      </p>
    </div>
  );
}

export default AboutUs;
