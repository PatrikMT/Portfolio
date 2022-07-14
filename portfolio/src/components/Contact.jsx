import React from 'react';

const Contact = () => {
    return(
        <div name="contact" className='w-full md:h-screen  bg-[#FBFAF5]'>

            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '> 
            <form  action="https://getform.io/f/0d512ee9-c69b-41a0-9ab8-7037f16116f9" method="POST" className='flex flex-col max-w-[600px] w-full justify-center'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#191919] '>Contato</p>
                    <p className='text-xl text-[#191919] font-semibold  py-4 max-w-[700px]'>Entre em contato comigo por aqui ou caso queira meu e-mail: patrik_martins_torres@hotmail.com</p>
                </div>

                
               
                
                <input className='my-2 p-2 bg-[#CAC9C6] ' type="text" placeholder='Nome' name='Nome'/>
                <input className='my-2 p-2 bg-[#CAC9C6] ' type="email" placeholder='E-mail' name='email'/>
                <textarea className='my-2 p-2 bg-[#CAC9C6] ' name="message" rows="10" placeholder='Mensagem'></textarea>
                
                <button className='text-[#191919] border-2 hover:text-[#FBFAF5] font-semibold  hover:bg-[#191919] border-[#191919] px-4 py-3 my-8 mx-auto flex items-center'>Entre em contato comigo</button>
                
                </form>
            
            </div>
         </div>
    )
        
    
}

export default Contact;