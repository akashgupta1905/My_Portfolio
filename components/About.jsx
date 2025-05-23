const About = () => {
  return (
    <section className="w-full h-fit px-[40px] py-10 max-xs:px-[20px] relative bg-white" id="about">
      <div className="max-w-[1250px] mx-auto">
        <div className="inline-block">
          <p className="section-title">
            <span className="mb-1">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0 L16 8 L8 16 L0 8 L8 0Z" fill="currentColor"></path>
              </svg>
            </span>
            About Me
          </p>
        </div>

        <div className="mt-7">
          <p className="mt-6 text-gray-600 text-[20px] leadiing-10">
            {/* Welcome to my portfolio website! My name is Akash Gupta, and I am a focused and driven Computer Science & Engineering student recently attending Feroze Gandhi Institute of Engineering and Technology in Raebareli.

          As a beginner in the field of Information Technology, I am passionate about leveraging my skills to contribute to the development of an organization while growing in my career journey. I am committed to continuous learning and improvement, and I strive to keep myself updated with the latest trends and technologies in the industry

          I believe that communication, critical thinking, and problem-solving skills are essential for success in any field, and I have honed these skills through my academic pursuits and practical experience. I am proficient in a range of programming languages and web development tools, including HTML5, CSS3, JavaScript, React.js/Redux.js, Node.js, Express.js, and MongoDB. I am also proficient in using Git, a version control system for software development */}

            Welcome to my portfolio website!<br/>

            I'm Akash Gupta, a dedicated and ambitious Computer Science & Engineering student at Feroze Gandhi Institute of Engineering and Technology, Raebareli. With a strong foundation in Information Technology, I’m passionate about using technology to solve real-world problems and contribute meaningfully to innovative projects.<br/>

            As an aspiring developer, I’m constantly learning and staying updated with the latest tools, trends, and technologies in the tech industry. My journey so far has helped me build a solid skill set in web development, critical thinking, and problem-solving.<br/><br/>

            🚀 What I Bring to the Table:<br/>
            A strong grasp of HTML5, CSS3, JavaScript, and modern frameworks like React.js/Redux.js<br/>

            Backend expertise using Node.js, Express.js, and MongoDB<br/>

            Version control with Git for collaborative and efficient development<br/>

            A proactive mindset and a commitment to continuous learning and growth<br/>

            I believe in clear communication, teamwork, and the power of technology to drive change. Feel free to explore my projects and get in touch—I'm currently open to new opportunities and collaborations!<br/>
          </p>
        </div>
      </div>

      <div className="mt-10">
        <div className="w-full">
          <ul className="flex justify-between gap-10 flex-col md:flex-row">
            <li className="w-full shadow-sm">
              <div className="w-full text-center py-[30px] md:py-[60px] rounded-md bg-light-bg">
                <h3 className="text-[40px] mb-[3px font-bold text-dark-red">100+</h3>
                <span className="uppercase">DSA Problems Solved</span>
              </div>
            </li>
            <li className="w-full shadow-sm">
              <div className="w-full text-center py-[30px] md:py-[60px] rounded-md bg-light-bg">
                <h3 className="text-[40px] mb-[3px font-bold text-dark-red">10+</h3>
                <span className="uppercase">Projects Completed</span>
              </div>
            </li>
            <li className="w-full shadow-sm">
              <div className="w-full text-center py-[30px] md:py-[60px] rounded-md bg-light-bg">
                <h3 className="text-[40px] mb-[3px font-bold text-dark-red">1+</h3>
                <span className="uppercase">Years of Experience</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
