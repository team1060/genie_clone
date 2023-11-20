import { Col, Container, Row } from "react-bootstrap";
import { announcementList } from "../../data/data";
import { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
function FootNav() {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex < announcementList.length - 1 ? prevIndex + 1 : prevIndex))
    };
    return (
        <Container className="footNav">
            <Row className="flex-column flex-lg-row">
                <Col>
                    <Row xs="auto" className="footNav_inner justify-content-lg-start justify-content-center">
                        <Col className="font-weight-bold">공지사항</Col>
                        <Col style={{ overflow: "hidden" }}>
                            {announcementList.map((item, index) => (
                                <div
                                    key={index}
                                    style={{
                                        display: index === currentIndex ? "inline-block" : "none",
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        maxWidth: "30ch"
                                    }}
                                >
                                    {item.title}
                                </div>
                            ))}
                        </Col>
                        <Col onClick={handlePrevClick}><GrFormPrevious /></Col>
                        <Col onClick={handleNextClick}><GrFormNext /></Col>
                    </Row>
                </Col>
                <Col>
                    <Row xs="auto" className="footNav_inner justify-content-lg-end justify-content-center">
                        <Col>이벤트</Col>
                        <Col>고객센터</Col>
                        <Col>이용안내</Col>
                        <Col>서비스 전체보기<GrFormNext /></Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default FootNav;