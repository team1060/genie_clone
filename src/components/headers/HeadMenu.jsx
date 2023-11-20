import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import DropDown from "./HeadDropDown";

function Menu() {
  return (
    <Container className="menu">
      <Row className="align-items-center">
        <Col lg={10}>
          {/* 큰 화면 크기에서의 레이아웃 */}
          <Row lg="auto" className="menu_inner mb-4 mb-lg-0 d-none d-md-block text-center text-lg-left">
            <div className="d-flex">
              <Col>지니차트</Col>
              <Col>최신음악</Col>
              <Col>장르음악</Col>
              <Col>영상</Col>
              <Col>추천</Col>
              <Col>매거진</Col>
              <Col>뮤직허그</Col>
            </div>
          </Row>
        </Col>
        <Col lg={2} className="d-none d-md-block">
          {/* 큰 화면 크기에서의 레이아웃 */}
          <Row className="justify-content-end">
            <DropDown />
          </Row>
        </Col>

        {/* 작은 화면 크기에서의 레이아웃 */}
        <Col xs={8} className="mt-4 d-md-none">
          <div className="d-flex flex-column align-items-center">
            <Col>지니차트</Col>
            <Col>최신음악</Col>
            <Col>장르음악</Col>
            <Col>영상</Col>
            <Col>추천</Col>
            <Col>매거진</Col>
            <Col>뮤직허그</Col>
          </div>
        </Col>
        {/* 작은 화면 크기에서의 레이아웃 */}
        <Col xs={4} className="align-items-center d-md-none">
          <Row className="justify-content-end">
            <DropDown />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Menu;