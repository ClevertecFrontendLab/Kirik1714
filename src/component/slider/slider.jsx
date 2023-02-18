/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { FreeMode, Navigation,Pagination,Scrollbar,Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import voidFoto from '../../assets/img/imgVoidBook.png'

import './slider.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import 'swiper/css/scrollbar';


export const Slider=({dataBook})=> {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <React.Fragment>
      <Swiper
        style={{
          '--swiper-navigation-color': '#000',
          '--swiper-pagination-color': '#000',
        }}
        spaceBetween={20}
        navigation={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs, Pagination]}
        className='mySwiper2 '
        data-test-id='slide-big'

      > 
        { dataBook.images ? dataBook.images.map((item,index)=>(
        <SwiperSlide>
          <img src={`https://strapi.cleverland.by${item.url}`} className='slideActive' alt='foto' />
        </SwiperSlide>))
          :
          (<SwiperSlide>
          <img src={voidFoto} alt='foto' />
        </SwiperSlide>)
      }
       
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={30}
        slidesPerView={5}
        freeMode={true}
        scrollbar={{ draggable: true, dragSize: 190 }}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Scrollbar, Thumbs]}
        className='mySwiper'
      >
        { dataBook.images && dataBook.images.length !== 1 ? dataBook.images.map((item,index)=>(
        <SwiperSlide data-test-id='slide-mini'>
          <img src={`https://strapi.cleverland.by${item.url}`}alt='foto' />
        </SwiperSlide>))
          :
          (null)
      }
      </Swiper>
    </React.Fragment>
  );
}
