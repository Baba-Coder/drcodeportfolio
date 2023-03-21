import React from 'react';
import CVDEV from '../../assets/BabaUpdate.pdf';

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CVDEV} download className='btn'>Download CV</a>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  );
}

export default CTA;
