// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { newMusic } from '../../data/data';
// Import Swiper styles
import 'swiper/css';
import { Card } from 'react-bootstrap';

export default () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={10}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >

      {
        newMusic.map((item, i) => {
          return (
            <>
              <SwiperSlide>
                <Card>
                  <Card.Img variant="top" src={item.img} />
                  <Card.Body>
                    <Card.Title>{item.artist}</Card.Title>
                  </Card.Body>
                </Card>
              </SwiperSlide>
            </>
          )

        })
      }


    </Swiper>
  );
};