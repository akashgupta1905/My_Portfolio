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
          Welcome to my portfolio website! My name is Akash Gupta, and I am a focused and driven Computer Science & Engineering student recently attending Feroze Gandhi Institute of Engineering and Technology in Raebareli.

          As a beginner in the field of Information Technology, I am passionate about leveraging my skills to contribute to the development of an organization while growing in my career journey. I am committed to continuous learning and improvement, and I strive to keep myself updated with the latest trends and technologies in the industry

          I believe that communication, critical thinking, and problem-solving skills are essential for success in any field, and I have honed these skills through my academic pursuits and practical experience. I am proficient in a range of programming languages and web development tools, including HTML5, CSS3, JavaScript, React.js/Redux.js, Node.js, Express.js, and MongoDB. I am also proficient in using Git, a version control system for software development
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
                <h3 className="text-[40px] mb-[3px font-bold text-dark-red">5+</h3>
                <span className="uppercase">Projects Completed</span>
              </div>
            </li>
            <li className="w-full shadow-sm">
              <div className="w-full text-center py-[30px] md:py-[60px] rounded-md bg-light-bg">
                <h3 className="text-[40px] mb-[3px font-bold text-dark-red">2+</h3>
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
