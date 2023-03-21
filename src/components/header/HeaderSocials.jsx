import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://linkedin.com/babatunde-olaniyi-530036139/" target="_blank" className='header__linkedin'><BsLinkedin/></a>
      <a href="https://github.com/Baba-Coder" target="_blank" className='header__github'><BsGithub/></a>
      <a href="https://studio.youtube.com/channel/UCAp1jG1_bG1dAgPHhLwil9A/videos/upload?filter=%5B%5D&sort=%7B" target="_blank" className='header__dribble'><BsYoutube /></a>


    </div>
  );
}

export default HeaderSocials;
