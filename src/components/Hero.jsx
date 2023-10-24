import { motion } from "framer-motion";
import { styles } from "../styles";
import { log } from "../assets";

function Hero() {
  return (
    <section className="relative w-full h-screen flex justify-center">
      <div
        className={`${styles.paddingX} absolute inset-0 top-32 max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-blacky-400" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-slate-200`}>
            Hi, I'm <span className="text-blacky-400">Camilo</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-blacky-50`}>
            I'm a FullStack developer <br className="sm:block hidden" /> Lorem
            ipsum dolor sit.
          </p>
        </div>
      </div>

        <div
          className={`absolute top-1/2`}
        >
          <img src={log} alt="Image" className="h-52 w-52 sm:w-64 xs:h-64" />
        </div>

      <div className="absolute bottom-10 w-full xl:flex justify-center items-center hidden">
        <a href="#about">
          <div className="w-9 h-16 rounded-3xl border-4 border-blacky-200 flex justify-center items-center p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-blacky-200 mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero;
