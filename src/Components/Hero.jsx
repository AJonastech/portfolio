/* eslint-disable jsx-a11y/img-redundant-alt */
import {React, useRef, useEffect} from 'react'
import profileone from "../assets/Images/profileone.png"
import Nav from './Navbar/Nav'
import { motion } from 'framer-motion';
import {
    AiFillGithub,
    AiFillLinkedin,
    AiFillTwitterCircle,
  } from "react-icons/ai";
  import splash from "../assets/Images/splash.png";
import Typed from 'typed.js';
function Hero() {
    const el = useRef(null);
    useEffect(()=>{
        const typed = new Typed(el.current, {
            strings: ['stunning', 'intuitive', "and interactive"],
            typeSpeed : 160,
        });
        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
          };
    },[])
    
    return (
        <Nav>
        <div>
          <section className="flex bg-[#fff] flex-col md:flex-row w-full h-[80vh]">
            <div className="basis-1/2  flex flex-col md:justify-center">
              <p className="md:text-xl  text-[20px] text-darkBlue mb-1 font-medium ">
                Hi! My name is
              </p>
              <h1 className="md:text-[40px] text-[30px] text-xl mb-4 text-purple font-bold ">
                Agu Jonas O.
              </h1>
              <div className="flex gap-4">
                <button className=" bg-purple  hover:bg-white hover:text-purple hover:border-2 hover:border-purple text-white md:px-5 md:text-[20px] text-[18px] px-2 py-1 rounded-full">
                  Contact
                </button>
                <button className="hover:bg-purple hover:border-0 hover:text-white border-2 border-purple text-purple md:px-5 text-[18px] md:text-[20px] px-2 py-1 rounded-full">
                  Projects
                </button>
              </div>
              
              <p className="md:text-xl text-darkBlue text-[16px] mt-[20px] md:mt-[70px]">
                Creative FrontEnd Developer
              </p>
              <p className="md:text-xl mt-[10px] text-[16px] text-darkBlue">
                Crafting <span className=' font-medium text-purple' ref={el}/> web experiences.
              </p>
            </div>
            <div className="relative basis-1/2  flex md:justify-center items-center">
              <div className="absolute items-center justify-center flex  w-full h-full">
                <motion.div
                  className="container"
                  initial={{ scale: 0, borderRadius: 0,}}
                  animate={{  scale: 1, borderRadius: "50%" }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                  }}
                >
                  <img
                    className="w-[220px] md:w-[300px] shrink-0 grow-0 mx-auto rounded-full"
                    src={profileone}
                    alt="Profile Image"
                  />
                </motion.div>
              </div>
              <motion.img   initial={{ scale: 0 }}
                  animate={{  scale: 1 }} className="w-[250px] md:w-[350px] object-cover mx-auto" src={splash} />
            </div>
          </section>
          <div className="w-full flex justify-between items-center h-[10vh]">
            <div className="basis-[41%] h-[2px] border-t-2 border-darkBlue"></div>
            <div className="flex gap-2 md:text-3xl text-xl text-darkBlue">
              <AiFillGithub />
              <AiFillLinkedin />
              <AiFillTwitterCircle />
            </div>
            <div className="basis-[41%]  border-t-2 border-darkBlue"></div>
          </div>
        </div>
      </Nav>
    )
}

export default Hero
