import { Col, Container, Row } from "react-bootstrap";
import { emblemList } from "../../data/data";

function FootEmblem() {
    return (
        <Container className="mb-5">
            <Row className='align-items-center'>
                <Col className="footEmblem d-flex flex-wrap">
                        {emblemList.map((item, index) => (
                            <p><img src={item} key={index}/></p>
                        ))}
                </Col>
            </Row>

        </Container>
    )
}

export default FootEmblem;