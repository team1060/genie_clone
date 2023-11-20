import { Container } from "react-bootstrap";

function HotAndNew() {
    return (
        <Container className="mb-5">
            <div className='mx-4'>
                {/* px-4 px-lg-5 px-xxl-4 */}
                <div className='mb-4 d-flex'>
                    <h2>TOP 100</h2>
                </div>
                <div style={{height:"500px", background:"#A4C3FF", textAlign:"center", verticalAlign:"center", fontSize:"100px"}}>
                    미구현
                </div>
            </div>
        </Container>
    )
}

export default HotAndNew;