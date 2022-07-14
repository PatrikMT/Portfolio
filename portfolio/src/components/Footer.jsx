import React from 'react';
import logopreto from '../assets/logopreto.png';
import {Link} from 'react-scroll';



const Footer = () => {
    return (

<footer>
<div class="Footer w-full  bg-[#191919] text-[#FBFAF5] font-semibold">
<div class="  max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
<div class="col-sm-6   col-lg-4-12 contact ">
<h3>Informações de contato</h3>
<p>Sinta a vontade para se comunicar comigo a qualquer hora.</p>
  <p className='mt-2'> <a href="mailto:patrik_martins_torres@hotmail.com">E-mail: patrik_martins_torres@hotmail.com</a> </p>
  <p className='mt-1'> <a href="https://wa.me/13974108011">  WhatsApp: (+13) 97410-8011 </a> </p>

</div>



<div class="col-sm-6-6 col-md-12-12 col-smd-12-12 col-lg-12-12 copyright  mt-10">
<Link to="home"  smooth={true} duration={500} >                 
<img className='hover:cursor-pointer' src={logopreto} alt="Logo Imagem"  style={{width:'50px'}} />
</Link>
<p class="small copyright-text">&copy;{new Date().getFullYear()} Patrik Martins Torres</p>
</div>
</div>
</div>
</footer>



    )
}

export default Footer;