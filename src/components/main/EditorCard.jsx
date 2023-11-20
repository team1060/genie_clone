import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Card } from 'react-bootstrap';
import { editorRecommendList } from '../../data/data';
import { useEffect, useState } from 'react';

// Swiper Core 사용

function EditorCard() {
    const [slidesPerView, setSlidesPerView] = useState(5);

    useEffect(() => {
        const updateSlidesPerView = () => {
            let updatedSlidesPerView = 5;
            if (window.innerWidth <= 1400) {
                updatedSlidesPerView = 4;
            }
            if (window.innerWidth <= 1200) {
                updatedSlidesPerView = 3;
            }
            if (window.innerWidth <= 996) {
                updatedSlidesPerView = 2;
            }
            setSlidesPerView(updatedSlidesPerView);
        };

        // 컴포넌트가 마운트될 때 한 번 실행
        updateSlidesPerView();

        // 이벤트 리스너 등록
        window.addEventListener('resize', updateSlidesPerView);

        // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
        return () => {
            window.removeEventListener('resize', updateSlidesPerView);
        };
    }, []);
    return (
        <Swiper
            spaceBetween={16}
            slidesPerView={slidesPerView}
        >
            {editorRecommendList.map((item, index) => (
                <SwiperSlide key={index}>
                    <Card style={{ width: '224px' }}>
                        <div className='recommendCover'>
                            <div className='recommendImage recommendImage-main'>
                                <img src={item.main} alt={`Main ${index + 1}`} />
                            </div>
                            <div className='recommendImage recommendImage-left'>
                                <img src={item.left} alt={`Left ${index + 1}`} />
                            </div>
                            <div className='recommendImage recommendImage-right'>
                                <img src={item.right} alt={`Right ${index + 1}`} />
                            </div>
                        </div>
                        <Card.Body>
                            <Card.Title className='small'>{item.djName}</Card.Title>
                            <Card.Text style={{ height: '52px', overflowY: 'hidden'}}>{item.title}</Card.Text>
                            <Card.Text className='small'>{item.category}</Card.Text>
                        </Card.Body>
                    </Card>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default EditorCard;
