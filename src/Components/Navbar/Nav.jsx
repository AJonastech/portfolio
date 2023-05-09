import React from "react";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
function Nav({ children }) {
  const [nav, setNav] = useState(false);
  const path = useLocation().pathname;
  console.log(path);
  return (
    <section className="relative  mx-auto h-[100vh]">
      <header className="flex  md:px-10 px-7 fixed top-0 right-0 bg-white z-20 w-[100%]   md:text-xl justify-between items-center  h-[10vh] text-[#0a0430]">
        <motion.h1
        initial={{opacity:0.2}}
        animate={{opacity:1}}
        transition={{duration:0.6, delay:0.2}}
        className="font-medium text-2xl md:text-3xl ">ReactZen</motion.h1>
        <AiOutlineMenu
          onClick={() => {
            setNav(true);
          }}
          className="md:hidden text-3xl cursor-pointer"
        />
        <nav className="hidden md:block">
          <ul className="flex gap-2 text-lg ">
            <motion.li
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2 , duration:0.1}}
              className={path === "/" ? "text-purple" : ""}
            >
              {" "}
              <Link to="/"> HOME</Link>
            </motion.li>
            <motion.li
            initial={{ y: -10 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3 , duration:0.1}}
            className={path === "/experience" ? "text-purple" : ""}>
              {" "}
              <Link to={"/experience"}>ABOUT</Link>
            </motion.li>
            <motion.li 
            initial={{ y: -10 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4 , duration:0.1}}
            className={path === "/projects" ? "text-purple" : ""}>
              {" "}
              <Link to="/projects">PROJECTS</Link>
            </motion.li>
            <motion.li 
            initial={{ y: -10 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5 , duration:0.1}}
            className={path === "/contact" ? "text-purple" : ""}>
              {" "}
              <Link to="/contact">CONTACT ME</Link>
            </motion.li>
          </ul>
        </nav>
        {nav && (
          <motion.ul
            initial={{ width: 0, height: 1 }}
            animate={{ width: 250, height: 400 }}
            transition={{ duration: 0.2 }}
            className="shadow-2xl bg-purple text-white w-[250px] h-[400px] fixed z-20 top-2 right-2 p-4 gap-3 text-lg "
          >
            <motion.div
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex justify-end mb-8 "
            >
              <AiOutlineClose
                onClick={() => {
                  setNav(false);
                }}
                className="text-3xl cursor-pointer"
              />
            </motion.div>
            <motion.li
              initial={{ y: 20, opacity: 0.5 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.1 }}
              className="cursor-pointer"
            >
              <Link to="/"> HOME</Link>
            </motion.li>
            <motion.li
              initial={{ y: 20, opacity: 0.5 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.1 }}
              className="cursor-pointer"
            >
              <Link to={"/experience"}>ABOUT</Link>
            </motion.li>
            <motion.li
              initial={{ y: 20, opacity: 0.5 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.1 }}
            >
              <Link to="/projects">PROJECTS</Link>
            </motion.li>
            <motion.li
              initial={{ y: 20, opacity: 0.5 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.1 }}
              className="cursor-pointer"
            >
              <Link to="/contact">CONTACT ME</Link>
            </motion.li>
          </motion.ul>
        )}
      </header>
    <main className="pt-[10vh] w-100% md:px-10 px-7">{children}</main>:
    

   
<footer className="bg-purple gap-5 flex justify-center flex-col items-center h-[20vh] text-white">
      <h2 className="md:text-xl text-lg text-center">Lets Create Magic Together, contact Me</h2>
      <div className="flex gap-2 md:text-3xl text-xl ">
        <AiFillGithub />
        <AiFillLinkedin />
        <AiFillTwitterCircle />
      </div>
    </footer>

    </section>
  );
}

export default Nav;
