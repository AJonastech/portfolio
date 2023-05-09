import Nav from "./Navbar/Nav";
import grid from "../assets/Images/grid-dot.svg"
import zigzag from "../assets/Images/newIllustravtion.svg"
function ContactMe() {
  return (
    <div>
      <Nav>
        <section className="h-[70vh] relative">
        <img className='absolute  top-[90px] w-[25%] left-2   ' src={grid} alt=""/>
              <img className=" absolute  right-[-30px] bottom-[60px] hidden md:block md:w-20% rotate-90 " src={zigzag} alt=""/>
          <h1 className='text-[28px] md:text-[36px] text-purple  mb-12  '>CONTACT ME/</h1>
          <h2 className="text-center text-darkBlue text-[28px] font-bold">Get In Touch</h2>
          <p className="text-gray w-full max-w-[450px] mx-auto text-lg text-center mb-5">
            Looking for a passionate web developer with an eye for creative and
            exciting projects? Look no further! I'm currently available for
            freelance, part-time, or junior developer roles, and I'd love to
            hear from you. Please don't hesitate to reach out and get in touch
            with me.
          </p>
          <div className="text-center mb-12">
            <button className="px-5 py-2 border-2 text-purple hover:bg-purple hover:text-white border-purple ">
                Send An Email
            </button>
          </div>
        </section>
      </Nav>
    </div>
  );
}

export default ContactMe;
