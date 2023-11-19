import { Col, Container, Row, Image } from 'react-bootstrap';
import Search from './Search';

function Logo() {

    return (
        <Container className="mb-2">
            <Row className='justify-content-between align-items-center'>
                <Col xs="auto">
                    <h1>
                    <Image src="https://image.genie.co.kr/imageg/web/common/logo_genie_5.0.png" style={{ width: "150px", height: "100%" }} rounded />
                    </h1>
                </Col>
                <Col></Col>
                <Col className="align-items-center">
                    <Search></Search>
                </Col>
            </Row>
        </Container>
    )
}

export default Logo;