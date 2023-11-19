import { Col, Container, Row } from "react-bootstrap";
import { announcementList } from "../../data/data";
function FootNav() {
    return (
        <Container>
            <Row>
                <Col>
                    <Row xs="auto">
                        <Col>공지사항</Col>
                        <Col style={{ overflow: "hidden" }}>
                            {announcementList.map((item, index) => (
                                <span key={index} style={{ display: "inline-block", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "10ch"}}>{item.title}</span>
                            ))}
                        </Col>
                        <Col>←</Col>
                        <Col>→</Col>
                    </Row>
                </Col>
                <Col>
                    <Row xs="auto" className="justify-content-end">
                        <Col>이벤트</Col>
                        <Col>고객센터</Col>
                        <Col>이용안내</Col>
                        <Col>서비스 전체보기→</Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default FootNav;