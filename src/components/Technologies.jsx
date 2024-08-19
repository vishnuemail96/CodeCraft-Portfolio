import { RiReactjsLine } from "react-icons/ri";
import { FaBootstrap, FaHtml5, FaCss3Alt, FaJs, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiMysql } from "react-icons/si";
import Python from "../assets/Python.png";
import { motion } from "framer-motion";

// Icon animation variant
const iconVariants = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

// Container animation variant to stagger the children
const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.4, // delay between each icon's animation
    },
  },
};

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
       whileInView={{ opacity: 1, y: 0}}
       initial={{opacit: 0, y: -100 }}
       transition={{ duration : 1.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div
        className="flex flex-wrap items-center justify-center gap-4"
        whileInView={{ opacity: 1, x: 0}}
        variants={containerVariants}
        initial={{opacit: 0, x: -100 }}
        transition={{ duration : 1.5}}
        animate="animate"
      >
        <motion.div variants={iconVariants} className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaHtml5 className="text-7xl text-orange-700" />
        </motion.div>
        <motion.div variants={iconVariants} className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaCss3Alt className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div variants={iconVariants} className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaJs className="text-7xl text-yellow-500" />
        </motion.div>
        <motion.div variants={iconVariants} className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div variants={iconVariants} className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaBootstrap className="text-7xl text-purple-500" />
        </motion.div>
        <motion.div variants={iconVariants} className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTailwindcss className="text-7xl text-teal-500" />
        </motion.div>
        <motion.div variants={iconVariants} className="rounded-2xl border-4 border-neutral-800 p-4">
          <img className="w-[4.5rem] h-[4.5rem]" src={Python} alt="Python Logo" />
        </motion.div>
        <motion.div variants={iconVariants} className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaJava className="text-7xl text-red-500" />
        </motion.div>
        <motion.div variants={iconVariants} className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMysql className="text-7xl text-blue-900" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
