import React from 'react';
import RoboFriends from '../assets/RoboFriends.jpg';
import FaceBrain from '../assets/FaceBrain.jpg';


const Projects = () => {
    return (

        <div name='projects' className='w-full md:h-screen bg-[#FBFAF5]'>
           
           <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
               <div className='pb-8'>
                   <p className='text-4xl font-bold inline border-b-4 border-[#191919] '>Projetos</p>
                   <p className='text-xl text-[#191919] font-semibold  py-4 max-w-[700px]'>Aqui estão alguns dos projetos que fiz recentemente.</p>
               </div>
                {/*Container*/ }
               <div  className='grid sm:gtid-cols-2 md:grid-cols-2 gap-8 '>

                   {/*Grid Item*/ }
                   <div style={{backgroundImage: `url(${RoboFriends})`}} className='shadow-lg shadow-[#040c16]  group container rounded-md justify-center items-center mx-auto container-div'>
                      
                      {/*Hover Effects*/ }
                       <div className='opacity-0 group-hover:opacity-100'>
                           <span className='text-3xl font-bold inline border-b-4  border-[#191919] text-center'>
                               <p className='m-10'>Robo Friends </p>
                           </span>
                           <div className='pt-8 text-center  my-6'>
                               <a href="https://patrikmt.github.io/robofriends/">
                                   <button className='text-center rounded-lg px-6  py-3 m-2 bg-white border-[#191919] font-bold text-lg'>Demonstração</button>
                               </a>
                               <a href="https://github.com/PatrikMT/robofriends">
                                   <button className='text-center rounded-lg px-6 py-3 m-2 bg-white border-[#191919] font-bold text-lg'>Código</button>
                               </a>
                           </div>
                       </div>

                   </div>

                   <div style={{backgroundImage: `url(${FaceBrain})`}} className='shadow-lg shadow-[#040c16] group container rounded-md justify-center items-center mx-auto container-div'>
                      
                      {/*Hover Effects*/ }
                      <div className='opacity-0 group-hover:opacity-100'>
                           <span className='text-3xl font-bold inline border-b-4  border-[#191919] text-center'>
                               <p className='m-10'>FaceBrain</p>
                           </span>
                           <div className='pt-8 text-center  my-6'>
                               <a href="https://patrikmt.github.io/facebrain/">
                                   <button className='text-center rounded-lg px-6  py-3 m-2 bg-white border-[#191919] font-bold text-lg'>Demonstração</button>
                               </a>
                               <a href="https://github.com/PatrikMT/facebrain">
                                   <button className='text-center rounded-lg px-6 py-3 m-2 bg-white border-[#191919] font-bold text-lg'>Código</button>
                               </a>
                           </div>
                       </div>
                   </div>


                    

               </div>
           </div>
            
        </div>
    )
}

export default Projects;