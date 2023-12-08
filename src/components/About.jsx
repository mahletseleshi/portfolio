const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-white text-black"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Mahlet Seleshi, a seasoned frontend developer with 4+ years specializing in React. Proficient in crafting intuitive user interfaces, I excel in responsive design, creating seamless web experiences. Skilled in architecting robust solutions, I bring a blend of creativity and functionality to every project. Committed to staying ahead in technology, I am dedicated to pushing the boundaries of frontend innovation
        </p>

        <br />

        <p className="text-xl">
        Throughout my career, I have honed my skills in crafting intuitive user interfaces leveraging frameworks like Tailwind and React Framer to create visually stunning and responsive designs. Additionally, my proficiency in integrating frontend components seamlessly with REST APIs has contributed to the development of robust and efficient applications.
        </p>
      </div>
    </div>
  );
};

export default About;