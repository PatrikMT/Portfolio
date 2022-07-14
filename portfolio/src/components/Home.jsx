import React from 'react';
import {Link} from 'react-scroll';


const Home = () => {
    return (
        
        <div name='home' className='w-full h-screen bg-[#FBFAF5]'>

            {/*Container*/}

            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                
                
                <h1 className='text-4xl sm:text-7xl font-bold text-[#191919] '> Patrik Martins</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#191919]'> Desenvolvedor front-end</h2>
                <p className='text-xl text-[#191919] font-semibold  py-4 max-w-[700px]'>Meu objetivo é ajudar você </p>
               
                <div>
                <Link to="about"  smooth={true} duration={500} > 
                    <button className='text-[#191919]  group border-2 font-semibold px-6 py-3 my-20 flex items-center hover:text-[#FBFAF5] hover:bg-[#191919] border-[#191919]'>
                   Conheça-me
                    </button>
                </Link>
                </div>

            </div>

        </div>
    )
}

export default Home;