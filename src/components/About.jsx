import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hello, I'm Harshal, a passionate Web Developer with a keen eye for creating
          innovative digital solutions. With a strong foundation in web technologies,
          I strive to build impactful and user-friendly applications that solve real-world problems.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <span>
          Bachelor of Engineering in Computer Science, Bapurao Deshmukh college of  engineering, sewagram Wardha, 4th Year
          {/* Web Development Certification, [Platform/Institution], [Year] */}
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <span>
          Proficient in HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS, Clerk Authentication, ShadCN, Git, Github
          Experienced with modern web development tools and frameworks
          Strong grasp of responsive design principles
          Excellent problem-solving skills
          Effective communicator and team player
        </span>
        <br />
        <h1 className="text-green-600 font-semibold text-xl mt-7">
          Mission Statement
        </h1>
        <p>
          My mission is to leverage my skills and creativity to deliver
          innovative IT solutions that exceed client expectations and
          contribute positively to the digital landscape. I am committed to
          continuous learning and growth, always seeking new challenges and
          opportunities to expand my horizons.
        </p>
      </div>
    </div>
  );
}

export default About;
