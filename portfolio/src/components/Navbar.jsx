import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa' ;
// import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import logo from '../assets/logo.png';
import {Link} from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className='fixed text-[#191919] font-semibold w-full h-[80px] flex justify-between items-center px-4 bg-[#FBFAF5] '>
            <div>
            <Link to="home"  smooth={true} duration={500} >
                        
                <img className='hover:cursor-pointer' src={logo} alt="Logo Imagem"  style={{width:'50px'}}  />
                </Link>
            </div>



            {/* menu */}
            
                <ul className='text-lg  hidden md:flex  '>
                   <li>
                     <Link to="home"  smooth={true} duration={500} >
                         Home
                     </Link>
                    </li>
                    <li>
                     <Link to="about"  smooth={true} duration={500} >
                         Sobre mim
                     </Link>
                    </li>
                    <li>
                     <Link to="skills"  smooth={true} duration={500} >
                         Habilidades
                     </Link> 
                    </li>
                    <li>
                     <Link to="projects"  smooth={true} duration={500} >
                         Projetos
                     </Link>
                    </li>
                    <li>
                     <Link to="contact"  smooth={true} duration={500} >
                         Contato
                     </Link>
                    </li>  
                </ul>
            

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                
                {!nav ? <FaBars/> : <FaTimes />}
            </div>

            {/* Mobile menu */}
            
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full  h-screen bg-[#CAC9C6] flex flex-col justify-center items-center'}>
                    <li  className='py-6 text-4xl'><Link onClick={handleClick} to="home"  smooth={true} duration={500} >
                         Home
                     </Link></li>
                    <li className='py-6 text-4xl'><Link onClick={handleClick} to="about"  smooth={true} duration={500} >
                         Sobre mim
                     </Link></li>
                    <li className='py-6 text-4xl'><Link onClick={handleClick} to="skills"  smooth={true} duration={500} >
                         Habilidades
                     </Link> </li>
                    <li className='py-6 text-4xl'><Link onClick={handleClick} to="projects"  smooth={true} duration={500} >
                         Projetos
                     </Link></li>
                    <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact"  smooth={true} duration={500} >
                         Contato
                     </Link></li>
                </ul>
            

            {/* Social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] text-[#FBFAF5] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800'>
                        <a className='flex justify-between items-center w-full ' href="https://www.linkedin.com/in/patrik-martins/">
                            Linkedin <FaLinkedin size={30}/>
                        </a>
                    </li>

                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full ' href="https://github.com/PatrikMT">
                            Github <FaGithub size={30}/>
                        </a>
                    </li>

                    {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="/">
                            Email <HiOutlineMail size={30}/>
                        </a>
                    </li> */}

                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a className='flex justify-between items-center w-full '  href="https://onedrive.live.com/embed?cid=D57F41C5095C37D0&amp;resid=D57F41C5095C37D0%2128971&amp;authkey=AKTkH1JtxLGTzS8&amp;em=2&amp;wdEmbedCode=0&amp;wdStartOn=1&amp;wdPrint=1">
                            Curriculo <BsFillPersonLinesFill size={30}/>
                        </a>
                    </li>

                </ul>
            </div>

        </div>
    )
}

export default Navbar;