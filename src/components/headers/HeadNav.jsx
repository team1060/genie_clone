import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";

function NavBar() {
  return (
    <Container className="mb-4 pt-5 navBar">
      <Row>
        <Col>
          <Row xs="auto navBar_inner">
            <Col>이용권 구매</Col>
            <Col>상품권 등록</Col>
            <Col className="d-none d-md-block">캐시 충전</Col>
          </Row>
        </Col>
        <Col>
          <Row xs="auto" className="justify-content-end">
            <Col>웹플레이어</Col>
            <Col>PC플레이어</Col>
            <Col className="d-none d-md-block">지니앱</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default NavBar;