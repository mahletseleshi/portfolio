import { FaBars, FaTimes, FaHome, FaFileSignature  } from "react-icons/fa";
import {useState} from "react"
import { IoMdPerson, IoIosContacts } from "react-icons/io";
import { IoIosSchool } from "react-icons/io";



const NavBar = () => {

const [nav, setNav] = useState(false)

    const links = [
        {
            id: 1,
            link: "Home",
            icon: <FaHome size={25} />
        },

        {
            id: 2,
            link: "About",
            icon: <IoMdPerson size={25}/>
        },

        {
            id: 3,
            link: "Portfolio",
            icon : <FaFileSignature size={25} />
        },

        {
            id: 4,
            link: "Experience",
            icon: <IoIosSchool size={25} />
    
        },

        {
            id: 5,
            link: "Contact",
            icon: <IoIosContacts  size={25}/>
        },
    ]
  return (
    <div className="bg-black w-full flex items-center px-8   justify-between h-[60px]">
      <div className="">
       <h1 className="font-signature text-white px-4 my-8 text-4xl">Ms</h1>
      </div>
      <ul className=" hidden md:flex">
          {links.map((link) => (
            <li
                key = {link.id}
                className="text-gray-200 px-4 text-sm hover:scale-150 cursor-pointer hover:text-orange-500 duration-500 hover:cursor-pointer"
             >
                {link.link}
            </li>

          ))}
      </ul>
      
      <div className="text-gray-500 cursor-pointer z-10 md:hidden" onClick={() =>setNav(!nav) }>
       {nav ? <FaTimes size={30} /> : <FaBars size ={30} />}
      </div>

      {nav &&  <ul className="flex flex-col justify-between  items-start pl-10 absolute bg-black top-0 right-0 h-[300px] py-10 rounded-xl w-[200px] space-y-2 text-white">
      {links.map((link) => (
            <li
                key = {link.id}
                className="flex items-center gap-2 hover:scale-105 hover:text-orange-500 duration-500 hover:cursor-pointer"
             >
                {link.icon}{link.link}
            </li>

          ))}
      </ul>}

     
    </div>
  )
}

export default NavBar
