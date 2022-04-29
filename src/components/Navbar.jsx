import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin,} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.png'
import "./Navbar.css"
import {Link} from 'react-scroll'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-50'>
        <div className='pl-8'>
            <img src={Logo} alt="#" style={{width: '50px'}}   />
        </div>

            {/* ------------------MENU----------------------  */}

    <nav className='shift'>
    <ul className='hidden md:block'>
    <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
    <li><Link to="about" smooth={true} duration={500}>About</Link></li>
    <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
    <li><Link to="work" smooth={true} duration={500}>Work</Link></li>
      
    </ul>
  </nav>
            
        

        {/* -----------hamburger----------------- */}
        <div onClick={handleClick}  className='md:hidden z-50 duration-75 ease-in'>
            {!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
        </div>
            {/* -----Mobile Menu------ */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center gap-2 z-10'} >
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Work</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>
                {/* ------Social Icons------ */}
                <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                    <ul>
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 p-4'>
                            <a className='flex justify-between items-center w-full text-gray-300 font-semibold' 
                            href="https://www.linkedin.com/in/hikmal-pramudya-a54b07221/">
                                LinkedIn <FaLinkedin size={30} />
                            </a>
                        </li>
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] p-4'>
                            <a className='flex justify-between items-center w-full text-gray-300 font-semibold' 
                            href="https://github.com/mhikmal03">
                                Github <FaGithub size={30} />
                            </a>
                        </li>
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] p-4'>
                            <a className='flex justify-between items-center w-full text-gray-300 font-semibold' 
                            href="/">
                                Email <AiOutlineMail size={30} />
                            </a>
                        </li>
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] p-4'>
                            <a className='flex justify-between items-center w-full text-gray-300 font-semibold' 
                            href="/">
                                Resume <BsFillPersonLinesFill size={30} />
                            </a>
                        </li>
                    </ul>
                </div>
    </div>
  )
}

export default Navbar