import { motion } from "framer-motion";

type Props = {
  details: {
    name: string;
    speciality: string;
    level: string;
    image: string;
  };
};

function Cards({ details }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      className="w-full max-w-sm border border-gray-200 rounded-lg shadow-md  dark:border-gray-700 text-center">
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={details.image}
          alt="Bonnie "
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {details.name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {details.speciality}
        </span>
        <p className="text-white text-[24px] hover:text-white border-b border-[#FE9E16] focus:ring-2 focus:outline-none focus:ring-[#FE9E16] rounded-lg p-1 mt-4 tracking-widest">
          {details.level}
        </p>
      </div>
    </motion.div>
  );
}

export default Cards;
