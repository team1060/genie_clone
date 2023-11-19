import { Col, Container, Row } from "react-bootstrap";
function FootInfo() {
    return (
        <Container className="mb-5">
            <Row className='align-items-center'>
                <Col xs="auto">
                    <h3>(주)지니뮤직</h3>
                </Col>
                <Col className="footInfo d-flex flex-wrap">
                    <p>대표이사 박현진</p>
                    <p>서울특별시 강남구 강남대로 456,4-9층(역삼동, 한석타워)</p>
                    <p>사업자등록번호 314-81-03453 </p>
                    <p>통신판매일신고 2013-서울강남-01302</p>
                    <p>개인정보보호책임자 홍세희 본부장 </p>
                    <p>서비스문의: 1577-5337 / help@ktmusic.co.kr <span>사업자정보확인 →</span></p>
                    <p>호스팅제공자: (주)지니뮤직 </p>
                    <p>COPYRIGHTⓒGENIE MUSIC CORP ALL RIGHTS RESERVED.</p>
                </Col>
            </Row>

        </Container>
    )
}

export default FootInfo;