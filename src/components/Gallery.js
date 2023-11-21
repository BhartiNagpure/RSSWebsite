import galleryhead from '../Assests/img/galleryhead.png';
import eventimg from '../Assests/img/Rectangle-29.png';
import photo from '../Assests/img/Rectangle 16.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';



export default function Gallery() {
  return (
<section>
<div className='galleryContainer'>
     <div className='gallery-content'>
  <div className='py-4'>
  <img src={galleryhead} alt=''/>
  </div>
  <Swiper
  className='swiper'
  modules={[Autoplay,EffectCoverflow, Navigation]}
  spaceBetween={50}
  slidesPerView={1}
  navigation
  pagination={{ clickable: true }}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  coverflowEffect={{
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    loop: true,
  }}
    >
      <SwiperSlide>
      <img src={photo} alt=''/>
      </SwiperSlide>
      <SwiperSlide>
      <img src={photo} alt=''/>
      </SwiperSlide>
      <SwiperSlide>
      <img src={photo} alt=''/>
      </SwiperSlide>
      <SwiperSlide>
      <img src={photo} alt=''/>
      </SwiperSlide>
      
    </Swiper>
      </div>
    </div>
</section>
  )
}
