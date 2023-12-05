
import heroImage from "../assets/heroImage.png"
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <div className="max-w-screen bg-gradient-to-b mx-auto from-white via-white to-cyan-800 flex flex-col px-24 md:flex-row items-center justify-between  h-screen">
      <div className="flex flex-col justify-center h-full">
        <h2 className="text-lg mb-4">Hi, I am Mahlet👋</h2>
         <h1 className="text-6xl font-bold text-cyan-black mb-8">I am a <span className="text-cyan-800">Front End Developer</span></h1>
         <p className="text-gray-500 max-w-md italic">I have 4 years of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Next JS and GraphQL.</p>
            <div>
                <button className=" group bg-gradient-to-r mt-6 gap-2  from-cyan-400 to-cyan-900 flex items-center px-4 py-2 font-bold text-sm  text-white">
                    <span>Portfolio</span>
                    <FaArrowRight className="group-hover:rotate-90 duration-700"/>
                </button>
            </div>
      </div>
      <div>
          <img className= "rounded-2xl mx-auto w-2/3 md:w-[1000px]" src ={heroImage} alt="heroImage" />
      </div>
    </div>
  )
}

export default Home
