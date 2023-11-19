import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";

function NavBar() {
  return (
    <Container className="mb-5">
      <Row>
        <Col>
          <Row xs="auto">
            <Col>이용권 구매</Col>
            <Col>상품권 등록</Col>
            <Col>캐시 충전</Col>
          </Row>
        </Col>
        <Col>
          <Row xs="auto" className="justify-content-end">
            <Col>웹플레이어</Col>
            <Col>PC플레이어</Col>
            <Col>지니앱</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default NavBar;