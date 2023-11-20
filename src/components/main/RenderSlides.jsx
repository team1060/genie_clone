import { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";

function RenderSlides(data) {
    // itemsPerPage를 상태로 관리
    const [itemsPerPage, setItemsPerPage] = useState();

    // 컴포넌트가 마운트될 때와 브라우저의 크기가 변경될 때마다 실행되는 useEffect 사용
    useEffect(() => {
        const updateItemsPerPage = () => {
            let initialItemsPerPage = 12;

            if (window.innerWidth <= 996) {
                initialItemsPerPage = 6;
            } 
            if (window.innerWidth > 996) {
                initialItemsPerPage = 8;
            }
            if (window.innerWidth > 1200) {
                initialItemsPerPage = 10;
            }
            if (window.innerWidth >= 1400) {
                initialItemsPerPage = 12;
            }

            setItemsPerPage(initialItemsPerPage);
        };

        updateItemsPerPage();

        // 이벤트 리스너 등록
        window.addEventListener('resize', updateItemsPerPage);

        // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
        return () => {
            window.removeEventListener('resize', updateItemsPerPage);
        };
    }, []); // 두 번째 인자가 빈 배열이므로 컴포넌트가 처음 마운트될 때만 실행
    const slides = [];

    for (let i = 0; i < data.length; i += itemsPerPage) {
        const chunk = data.slice(i, i + itemsPerPage);

        slides.push(
            <SwiperSlide key={i}>
                <div className="slide-container">
                    {chunk.map((item, index) => (
                        <div className='music' key={index}>
                            <div className='music_image'>
                                <img src={item.img}></img>
                            </div>
                            <div className='music_artist'>{item.artist}</div>
                        </div>
                    ))}
                </div>
            </SwiperSlide>
        );
    }

    return slides;
};

export default RenderSlides;