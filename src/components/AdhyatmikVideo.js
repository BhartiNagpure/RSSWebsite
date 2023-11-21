import leaf from '../Assests/img/Ellipse 3.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';

export default function AdhyatmikVideo() {
  return (
    <section id='aatmasanvad'>
      <div className="adhyatmikContainer">
        <div className='download-content'>
          <div className='head d-flex p-4 img-responsive'>
            <img src={leaf} alt="" />
            <h2 className='text-white '>ADHYATMIK VIDEOS</h2>
          </div>
          <div className='view'>
            <a className='text-white float-right' href='#'>VIEW ALL</a>
          </div>
          <div className='d-flex justify-content-center container'>
            <Swiper
              className='swiper p-5 mr-0'
              modules={[Pagination]}
              spaceBetween={50}
              slidesPerView={2}
              pagination={{ clickable: true }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 0
                },
                425: {
                  slidesPerView: 1,
                  spaceBetween: 0
                },
                999: {
                  slidesPerView: 2,
                  spaceBetween: 0
                }
              }}
            >
              <div className="container ">
                <SwiperSlide>
                  <div className='ytube-div col-10'> 
                    <iframe
                      src="https://www.youtube.com/embed/ujFUTZxJ46w?si=BSTTSDtQSS8n27Eg"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
                      allowfullscreen
                      className="w-100" 
                    ></iframe>
                    <h5 className="card-title p-3">YouTube Videos</h5>
                    <p className="card-text px-3 pb-4">
                      This card embeds a YouTube video using an iframe within a Bootstrap card.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='ytube-div col-10'> 
                    <iframe
                      src="https://www.youtube.com/embed/ujFUTZxJ46w?si=BSTTSDtQSS8n27Eg"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
                      allowfullscreen
                      className="w-100" 
                    ></iframe>
                    <h5 className="card-title p-3">YouTube Videos</h5>
                    <p className="card-text px-3 pb-4">
                      This card embeds a YouTube video using an iframe within a Bootstrap card.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='ytube-div col-10'> 
                    <iframe
                      src="https://www.youtube.com/embed/ujFUTZxJ46w?si=BSTTSDtQSS8n27Eg"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
                      allowfullscreen
                      className="w-100" 
                    ></iframe>
                    <h5 className="card-title p-3">YouTube Videos</h5>
                    <p className="card-text px-3 pb-4">
                      This card embeds a YouTube video using an iframe within a Bootstrap card.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='ytube-div col-10'> 
                    <iframe
                      src="https://www.youtube.com/embed/ujFUTZxJ46w?si=BSTTSDtQSS8n27Eg"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
                      allowfullscreen
                      className="w-100" 
                    ></iframe>
                    <h5 className="card-title p-3">YouTube Videos</h5>
                    <p className="card-text px-3 pb-4">
                      This card embeds a YouTube video using an iframe within a Bootstrap card.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='ytube-div col-10'> 
                    <iframe
                      src="https://www.youtube.com/embed/ujFUTZxJ46w?si=BSTTSDtQSS8n27Eg"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
                      allowfullscreen
                      className="w-100" 
                    ></iframe>
                    <h5 className="card-title p-3">YouTube Videos</h5>
                    <p className="card-text px-3 pb-4">
                      This card embeds a YouTube video using an iframe within a Bootstrap card.
                    </p>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
