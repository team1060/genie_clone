import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import DropDown from "./DropDown";

function Menu() {
  return (
    <Container>
      <Row>
        <Col lg={10}>
          <Row xs="auto">
            <Col>지니차트</Col>
            <Col>최신음악</Col>
            <Col>장르음악</Col>
            <Col>영상</Col>
            <Col>추천</Col>
            <Col>매거진</Col>
            <Col>뮤직허그</Col>
          </Row>
        </Col>
        <Col lg={2}>
          <Row  className="justify-content-end">
            <DropDown></DropDown>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Menu;