import aboutImg from "../assets/about.jpg"
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import resume from "../assets/Vishnu S Resume1.pdf";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">About
        <span className="text-neutral-500"> Me </span>
        </h2>
        <div className="flex flex-wrap">
            <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5}}
            className="w-full lg:w-1/2 lg:p-8">
              <div className="flex items-center justify-center">
                <img className="rounded-2xl" src={aboutImg}></img>
               </div>
            </motion.div>
            <motion.div
             whileInView={{ opacity: 1, x: 0 }}
             initial={{ opacity: 0, x: 100 }}
             transition={{ duration: 0.5}}
            className="w-full lg:w-1/2">
              <div className="flex justify-center lg:justify-start">
              <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}
              </p>
              </div>
              <button type="button" className="mt-3 rounded bg-purple-600 px-4 py-2 text-white hover:bg-purple-700">
              <a href={resume} download className="block w-full h-full">Resume</a>
             </button>
            </motion.div>

        </div>
    </div>
  )
}

export default About;