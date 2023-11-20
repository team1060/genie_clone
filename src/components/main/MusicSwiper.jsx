// Import Swiper React components
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Container } from 'react-bootstrap';
import RenderSlides from './RenderSlides';

import { newMusic } from '../../data/data';

function MusicSwiper() {

  // <RenderSlides></RenderSlides>

  return (
    <Container className="mb-5">
      <div className='mx-4'>
        {/* px-4 px-lg-5 px-xxl-4 */}
        <div className='mb-4'>
          <h2>최신 음악</h2>
        </div>
        <Swiper 
          centeredSlides={true} 
          style={{ textAlign:"center" }}
        >
          {RenderSlides(newMusic)}
        </Swiper>
      </div>
    </Container>
  );
};

export default MusicSwiper;