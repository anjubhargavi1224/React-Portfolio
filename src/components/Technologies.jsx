import {RiReactjsLine} from "react-icons/ri";
import {FaNodeJs} from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa6";
import { DiPhp } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { PiFigmaLogoFill } from "react-icons/pi";
import { motion } from "framer-motion";

const iconVariants = (duration) =>({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
})

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1.5}}
        className='my-20 text-center text-4xl'>Technologies</motion.h1>
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 1.5}}
        className="flex flex-wrap flex-row items-center justify-center gap-4">
            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-2 border-neutral-800 p-4">
                <RiReactjsLine className="text-5xl text-cyan-400"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-2 border-neutral-800 p-4">
                <FaHtml5 className="text-5xl text-orange-400"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-2 border-neutral-800 p-4">
                <FaNodeJs className="text-5xl text-green-400"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-2 border-neutral-800 p-4">
                <FaCss3Alt className="text-5xl text-blue-400"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-2 border-neutral-800 p-4">
                <IoLogoJavascript className="text-5xl text-yellow-400"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-2 border-neutral-800 p-4">
                <FaBootstrap className="text-5xl text-purple-400"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-2 border-neutral-800 p-4">
                <DiPhp className="text-5xl text-indigo-400"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(1)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-2 border-neutral-800 p-4">
                <DiMysql className="text-5xl text-cyan-400"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-2 border-neutral-800 p-4">
                <PiFigmaLogoFill className="text-5xl text-cyan-400"/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies

