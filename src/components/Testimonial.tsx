import React from "react";

type Props = {};

function Testimonial({}: Props) {
  return (
    <div>
      <h1 className="md:text-[28px] text-[24px] text-white tracking-[10px] text-center pt-[80px] mb-6">
        <span className="border-b border-[#FE9E16] rounded-md px-3">
          TESTIMONIES
        </span>
      </h1>

      <div className=" grid md:grid-cols-4 mb-8 md:mb-12 gap-3">
        <figure className="flex flex-col items-center justify-center p-8 text-center  border-b border-gray-200 rounded-tr-lg  md:border-b-0 md:border-r  dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <p className="my-4 font-light">
              I have been a member of Script Gym for the past year and it has
              completely changed my life. The staff is friendly and helpful, and
              the facilities are top-notch. I love the variety of classes and
              the personal training sessions have helped me reach my goals
              faster than I ever thought possible. I highly recommend XYZ Gym to
              anyone looking to get fit and have fun doing it!
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
            <img
              className="rounded-full w-9 h-9"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
              alt="profile "
            />
            <div className="space-y-0.5 font-medium dark:text-white text-left">
              <div>Bonnie Green</div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 text-center  border-b border-gray-200 rounded-tr-lg  md:border-b-0 md:border-r  dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <p className="my-4 font-light">
              I have been a member of several gyms over the years, but none of
              them compare to XYZ Gym. The staff is so welcoming and the
              equipment is always clean and well-maintained. I love the variety
              of classes, and the personal trainers are amazing. I feel like I
              have truly found my fitness home at XYZ Gym.
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
            <img
              className="rounded-full w-9 h-9"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
              alt="profile "
            />
            <div className="space-y-0.5 font-medium dark:text-white text-left">
              <div>Roberta Casas</div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 text-center  border-b border-gray-200 rounded-tr-lg  md:border-b-0 md:border-r  dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Mindblowing workflow
            </h3>
            <p className="my-4 font-light">
              As a busy person, it can be tough to find time for myself. But
              since joining Script Gym, I have been able to prioritize my health
              and wellness in a way that fits into my busy schedule. The
              flexible class times and convenient location make it easy for me
              to fit in a workout, and the supportive community at the gym keeps
              me motivated. I am so grateful to have found Script Gym!
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
            <img
              className="rounded-full w-9 h-9"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
              alt="profile "
            />
            <div className="space-y-0.5 font-medium dark:text-white text-left">
              <div>Jese Leos</div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 text-center  border-b border-gray-200 rounded-tr-lg  md:border-b-0 md:border-r  dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <p className="my-4 font-light">
              I was hesitant to join a gym because I wasn't sure if I would be
              able to keep up with the workouts. But from the moment I walked
              into Script Gym, I knew it was the right fit for me. The staff is
              so friendly and encouraging, and the classes are challenging but
              also fun. I have made so much progress since joining and I am so
              proud of myself for taking the leap and joining Script Gym. I
              highly recommend it to anyone looking to improve their fitness
              level.
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
            <img
              className="rounded-full w-9 h-9"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
              alt="profile"
            />
            <div className="space-y-0.5 font-medium dark:text-white text-left">
              <div>Joseph McFall</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default Testimonial;
