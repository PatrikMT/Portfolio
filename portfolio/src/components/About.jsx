import React from 'react';

const About = () => {
    return(

        <div name='about' className=' w-full h-screen bg-[#FBFAF5] text-[#191919]'>
          
            <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
               <div className='pb-8'>
                   <p className='text-4xl font-bold inline border-b-4 border-[#191919] '>Sobre mim</p>
               </div>
                    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 '>
                        <div className='text-4xl font-bold'>
                            <p>Olá, me chamo Patrik, e estudo programação a 2 anos. </p>
                        </div>
                        <div>
                            <p className='text-xl text-[#191919] font-semibold  py-4 max-w-[700px}'>
                                Comecei a estudar programação na faculdade e desde então desenvolvi um interesse por essa área.
                                 Aprendi muito sobre as tecnologias envolvidas na programação WEB e quero tornar esse conhecimento em algo benéfico.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

    )
}

export default About;