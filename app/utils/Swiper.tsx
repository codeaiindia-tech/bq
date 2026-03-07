import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className='bg-yellow-300' >Slide 1</SwiperSlide>
      <SwiperSlide className='bg-yellow-300' >Slide 2</SwiperSlide>
      <SwiperSlide className='bg-yellow-300' >Slide 3</SwiperSlide>
      <SwiperSlide className='bg-yellow-300' >Slide 4</SwiperSlide>
      ...
    </Swiper>
  );
};