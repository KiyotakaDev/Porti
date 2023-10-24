import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { fadeIn } from "../utils";

const TechnologyCard = ({ icon, name, index }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="blue-violet-gradient p-[2px] shadow-card rounded-full"
    >
      <div className="bg-blacky-700 flex items-center justify-center p-5 rounded-full">
        <img
          src={icon}
          alt={name}
          className="h-10 w-10 sm:w-24 sm:h-24 xs:h-16 xs:w-16 object-contain"
        />
      </div>
    </motion.div>
  );
};

function Tech() {
  return (
    <div className="t-2 flex flex-wrap items-center justify-center gap-10">
      {technologies.map((technology, index) => (
        <TechnologyCard
          key={index}
          icon={technology.icon}
          name={technology.name}
        />
      ))}
    </div>
  );
}

export default SectionWrapper(Tech, "");
