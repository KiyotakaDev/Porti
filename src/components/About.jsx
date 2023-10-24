import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils";
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full blue-violet-gradient p-[1px] rounded-2xl shadow-card"
    >
      <div className="bg-blacky-800 rounded-2xl py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-blacky-50 font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  );
};

function About() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-blacky-50 max-w-3xl leading-8"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
        tempore, enim deserunt recusandae sunt praesentium consequatur expedita
        porro fugit adipisci aliquid ut aperiam, ducimus veritatis minus sequi
        sed magni quasi odio quam nisi mollitia. Aperiam provident, hic esse
        quia voluptatem, a distinctio adipisci incidunt repudiandae autem ut
        vitae, ullam consectetur!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-20 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(About, "about")
