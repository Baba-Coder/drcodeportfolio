import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import AVTR5 from '../../assets/avatar5.jpg'


// import Swiper core and required modules
import { Pagination, Navigation} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: ' A great software designer if you looking for a serioius developer for design. development and optimization. He brought our website to the next level.'
  },
  {
    avatar: AVTR2,
    name: 'Tuấn Kiệt',
    review: 'I would like to pass my personal best wishes and big thanks to the entire teram on your side for delivering our busuniess website, with suck a delight, and excellence. You did a wonderful job, up to our exquisite expectations and we are infinitely grateful.'
  },
  {
   avatar: AVTR3,
   name: 'Oliver Josh',
    review: 'When  I want a experienced web designer drcode dame to my aim with more option for customization. His work is unrivaled. Will recommen drCode to all my friends. Great job'
  },
  {
    avatar: AVTR4,
    name: 'Narrison Steele',
    review: 'drCoder have developed several websited for us. Working with him was very convenient as he delivered very good qualitt in a short time'
  },
   {
    avatar: AVTR5,
    name: 'Bankole Ade-Oni',
    review: 'I am always very delighted with the quality drCode delivers. He helped my husand and I with our business website, have a proactive attitude and his someone that stand by his word. '
  },
  
  
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
       <h2>Our Testimonials</h2>

       <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[ Pagination, Navigation ]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }} >
         {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide  key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
         }
       </Swiper>
      </section>

  );
}

export default Testimonials;
