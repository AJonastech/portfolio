import React from "react";

import Nav from "./Navbar/Nav";
function Summary() {
  return (
    <Nav>
      <div className="bg-white    w-full min-h-[70vh]">
        <div className="">
          <h1 className="text-[28px] md:text-[36px] text-purple  mb-12">
            {" "}
            MY EXPERIENCE/
          </h1>
          <p className="text-gray">
            <span className="mb-3 inline-block">
              As a diligent and hardworking FrontEnd developer , I have gained
              about two years of experience working with several teams to build
              a variety of products, ranging from e-commerce and healthcare to
              file management systems. My expertise lies in using cutting-edge
              frontend technologies, including ReactJs, JavaScript, TypeScript,
              Tailwind CSS, Redux, NextJs, and several others, to create
              intuitive and responsive user interfaces.
            </span>

            <span className="mb-3 inline-block">
              In addition to my professional work, I am also passionate about
              contributing to the community, which is why I have volunteered
              with several organizations, including the Black Mental Health
              Matters organization. Through my work with these organizations, I
              have gained valuable insights into how technology can be used to
              improve people's lives.
            </span>
            <span className="mb-3 inline-block">
              One of my proudest achievements as a FrontEnd developer was
              co-founding a product that enhances file sharing. During my time
              at Frenbox, I collaborated with a team of developers to build this
              product from the ground up, leveraging the latest frontend
              technologies and best practices. Our efforts resulted in a highly
              efficient and user-friendly file sharing system that has been
              praised by both our clients and end-users.
            </span>
            <span className="mb-3 inline-block">
              As a FrontEnd developer committed to excellence, I am always eager
              to take on new challenges and explore innovative solutions to
              complex problems. If you're looking for a skilled and dedicated
              developer to join your team, please don't hesitate to get in
              touch!
            </span>
          </p>
        </div>
      </div>
    </Nav>
  );
}

export default Summary;
