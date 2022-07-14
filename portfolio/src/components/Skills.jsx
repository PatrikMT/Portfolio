import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import Github from '../assets/github.png';
import JavaScript from '../assets/javascript.png';
import Tailwind from '../assets/tailwind.png';
import ReactImg from '../assets/react.png';
import alura from '../assets/alura.png';
import dio from '../assets/dio.png';
import udemy from '../assets/udemy.png';

const Skills = () => {
    return (

        <div name='skills' className=' w-full h-screen bg-[#FBFAF5] '>
           
            {/*Container*/}
            <div className='max-w-[1000px] text-[#191919] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div >
                    <p className='text-4xl font-bold inline border-b-4 border-[#191919] '>Habilidades</p>
                    <p className='text-xl text-[#191919] font-semibold  py-4 max-w-[700px]'>Tecnologias e conhecimentos que obtive nos últimos anos</p>
                </div>
                
                <div className='w-full grid grid-cols-3  gap-8 text-center py-8 '>

                    <div className='shadow-md bg-[#CAC9C6] shadow-[#040c16] hover:scale-110  duration-500 rounded-md'>
                        <img className='w-20 mx-auto mt-4' src={HTML} alt="HTML icon" />
                        <p className='text-xl text-[#191919] font-semibold  py-2 max-w-[700px]'>HTML</p>
                    </div>
                    <div className='shadow-md bg-[#CAC9C6] shadow-[#040c16] hover:scale-110 duration-500 rounded-md'>
                        <img className='w-20 mx-auto mt-4'  src={CSS} alt="CSS icon" />
                        <p className='text-xl text-[#191919] font-semibold  py-2 max-w-[700px]'>CSS</p>
                    </div>
                    <div className='shadow-md bg-[#CAC9C6] shadow-[#040c16] hover:scale-110 duration-500 rounded-md'>
                        <img className='w-20 mx-auto mt-4'  src={JavaScript} alt="JavaScript icon" />
                        <p className='text-xl text-[#191919] font-semibold  py-2 max-w-[700px]'>JAVASCRIPT</p>
                    </div>
                    <div className='shadow-md bg-[#CAC9C6] shadow-[#040c16] hover:scale-110 duration-500 rounded-md'>
                        <img className='w-20 mx-auto mt-4'  src={Tailwind} alt="Tailwind icon" />
                        <p className='text-xl text-[#191919] font-semibold  py-2 max-w-[700px]'>TAILWIND</p>
                    </div>
                    <div className='shadow-md bg-[#CAC9C6] shadow-[#040c16] hover:scale-110 duration-500 rounded-md'>
                        <img className='w-20 mx-auto mt-4'  src={ReactImg} alt="React icon" />
                        <p className='text-xl text-[#191919] font-semibold  py-2 max-w-[700px]'>REACT</p>
                    </div>
                    <div className='shadow-md bg-[#CAC9C6] shadow-[#040c16] hover:scale-110 duration-500 rounded-md'>
                        <a href='https://github.com/PatrikMT'>
                        <img  className='w-20 mx-auto mt-4' src={Github} alt="Github icon" />
                        <p className='text-xl text-[#191919] font-semibold  py-2 max-w-[700px]'>GITHUB</p>
                        </a>
                    </div>
                    <div className='shadow-md bg-[#CAC9C6] shadow-[#040c16] hover:scale-110 duration-500 rounded-md'>
                        <a href='https://web.dio.me/users/patrik_martins_torres?tab=achievements' >
                        <img  className='w-20 mx-auto mt-4' src={dio} alt="DIO icon" />
                        <p className='text-xl text-[#191919] font-semibold  py-2 max-w-[700px]'>DIO</p>
                        </a>
                    </div>
                    <div className='shadow-md bg-[#CAC9C6] shadow-[#040c16] hover:scale-110 duration-500 rounded-md'>
                        <a href='https://cursos.alura.com.br/user/patrikmartins5/fullCertificate/edeed975f2795715be7c9a92b808ab5f'>
                        <img  className='w-20 mx-auto mt-4' src={alura} alt="Alura icon" />
                        <p className='text-xl text-[#191919] font-semibold  py-2 max-w-[700px]'>ALURA</p>
                        </a>
                    </div>
                    <div className='shadow-md bg-[#CAC9C6] shadow-[#040c16] hover:scale-110 duration-500 rounded-md'>
                        
                        <img  className='w-20 mx-auto mt-4 ' src={udemy} alt="Udemy icon" />
                        <p className='text-xl text-[#191919] font-semibold  py-2 max-w-[700px]'>UDEMY</p>
                        
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Skills;