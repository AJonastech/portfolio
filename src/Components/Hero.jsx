/* eslint-disable jsx-a11y/img-redundant-alt */
import {React, useRef, useEffect} from 'react'
import profileone from "../assets/Images/profileone.png"
import Nav from './Navbar/Nav'
import {  motion } from 'framer-motion';
import {
    AiFillGithub,
    AiFillLinkedin,
    AiFillTwitterCircle,
  } from "react-icons/ai";
  import splash from "../assets/Images/splash.png";
import Typed from 'typed.js';
import { Link } from 'react-router-dom';
import grid from "../assets/Images/grid-dot.svg"
import zigzag from "../assets/Images/newIllustravtion.svg"
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
          <section className="flex relative bg-[#fff] flex-col md:flex-row w-full h-[80vh]">
          
              <img className='absolute  top-[52px] w-[60%] right-2 md:top-3 md:right-[50%] md:w-[30%]' src={grid} alt=""/>
              <img className=" absolute  right-[-30px] bottom-8 hidden md:block md:w-20% rotate-90 " src={zigzag} alt=""/>
            
            <motion.div initial={{opacity: 0}} animate={{opacity:1}} transition={{delay:0.6}} className="basis-1/2  flex flex-col md:justify-center">
              <motion.p initial={{opacity:0.8, y:30}} animate={{opacity:1, y:0}} transition={{delay:0.7}}  className="md:text-3xl  text-2xl md:pt-0 pt-5 text-darkBlue mb-1 font-medium ">
                Hi! My name is
              </motion.p>
              <motion.h1 initial={{opacity:0.8, y:30}} animate={{opacity:1, y:0}} transition={{delay:0.8}} className="md:text-[40px] text-[30px]  mb-4 text-purple font-bold ">
                Agu Jonas O.
              </motion.h1>
              <motion.div initial={{opacity:0.8, y:30}} animate={{opacity:1, y:0}} transition={{delay:0.9}} className="flex gap-4">
                <button className=" bg-purple  hover:bg-white hover:text-purple hover:border-2 hover:border-purple text-white md:px-5 md:text-[20px] text-[18px] px-2 py-1 rounded-full">
                  Contact
                </button>
                <button className="hover:bg-purple hover:border-0 hover:text-white border-2 border-purple text-purple md:px-5 text-[18px] md:text-[20px] px-2 py-1 rounded-full">
                  Projects
                </button>
              </motion.div>
              
              <p className="md:text-xl text-darkBlue text-[16px] mt-[20px] md:mt-[70px]">
                Creative FrontEnd Developer
              </p>
              <p className="md:text-xl mt-[10px] text-[16px] text-darkBlue">
                Crafting <span className=' font-medium text-purple' ref={el}/> web experiences.
              </p>
            </motion.div>
            <motion.div initial={{opacity: 0}} animate={{opacity:1}} transition={{delay:0.6}} className="relative basis-1/2  flex md:justify-center items-center">
              <motion.div initial={{left:30}} animate={{left:0}} transition={{delay:0.6}} className="absolute  items-center justify-center flex  w-full h-full">
                <motion.div
                  className="container "
                  initial={{ scale: 0, borderRadius: 0,}}
                  animate={{  scale: 1, borderRadius: "50%" }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                  }}
                >
                  <img
                    className="w-[220px] md:w-[300px] lg:w-[350px] shrink-0 grow-0 mx-auto rounded-full"
                    src={profileone}
                    alt="Profile Image"
                  />
                </motion.div>
              </motion.div>
              <motion.img   initial={{ scale: 0 }}
                  animate={{  scale: 1 }} className="w-[250px] md:w-[350px] lg:w-[450px] object-cover mx-auto" src={splash} />
            </motion.div>
          </section>
          <div className="w-full flex justify-between items-center h-[10vh]">
            <div className="basis-[41%] h-[2px] border-t-2 border-darkBlue"></div>
            <div className="flex gap-2 md:text-3xl text-xl text-darkBlue">
             <Link to="https://github.com/Ajonastech" target="_blank"> <AiFillGithub /> </Link> 
              <Link to="https://www.linkedin.com/in/agu-jonas-211a651b6/" target="_blank"><AiFillLinkedin /></Link>
              <Link to="https://twitter.com/Agujonas1" target="_blank"> <AiFillTwitterCircle /></Link>
             
            </div>
            <div className="basis-[41%]  border-t-2 border-darkBlue"></div>
          </div>
        </div>
      </Nav>
    )
}

export default Hero
