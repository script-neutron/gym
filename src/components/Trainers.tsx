import trainer1 from "../utils/trainer1.png";
import Cards from "./Cards";
import Testimonial from "./Testimonial";
import { motion } from "framer-motion";
const trainers = [
  {
    name: "James dong",
    speciality: "muscles building",
    level: "Expert",
    image: trainer1,
  },
  {
    name: "James dong",
    speciality: "Nutrition and general health",
    level: "Expert",
    image: trainer1,
  },
  {
    name: "James dong",
    speciality: "muscles building",
    level: "Expert",
    image: trainer1,
  },
  {
    name: "James dong",
    speciality: "Physical therapy",
    level: "Expert",
    image: trainer1,
  },
];

function Trainers() {
  return (
    <div
      className="flex items-center justify-center min-h-screen relative max-w-7xl mx-auto"
      id="trainers">
      <div className="w-full">
        <h1 className="md:text-[38px] text-[24px] text-white tracking-[10px] text-center pt-[40px] mb-6">
          <span className="border-x border-[#FE9E16] rounded-md px-3">
            OUR TOP TRAINERS
          </span>
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 justify-center gap-3 mx-3">
          {trainers.map((card, index) => (
            <Cards key={index} details={card} />
          ))}
        </div>
        <Testimonial />
      </div>
    </div>
  );
}

export default Trainers;
