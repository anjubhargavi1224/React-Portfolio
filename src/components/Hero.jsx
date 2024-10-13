import { HERO_CONTENT } from "../constants";
import profilepic from "../assets/SBProfile.jpeg";
import { motion } from "framer-motion";

const containter = (delay) =>({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay},
    },
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
             variants={containter(0)}
             initial="hidden"
             animate="visible"
              className="pb-16 text-3xl font-thin tracking-tight lg:mt-10 lg:text-8xl"
            >
              Sarikonda Bhargavi
            </motion.h1>
            <motion.span  variants={containter(0.5)}
             initial="hidden"
             animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
              Frontend Developer
            </motion.span>
            <motion.p  variants={containter(1)}
             initial="hidden"
             animate="visible" className="my-2 max-w-xl py-6 font-light teacking-tighter">
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center size-50">
            <motion.img initial={{x: 100, opacity: 0}}
            animate={{x: 0,opacity: 1}}
            transition={{duration: 1, delay: 1.2}} src={profilepic} width={350} height={350} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
