import { Container } from "react-bootstrap";
import EditorCard from "./EditorCard";

function EditorRecommend() {
    return (
        <Container className="mb-5">
            <div className='mx-4'>
                <div className='mb-4'>
                    <h2>에디터 추천</h2>
                </div>
                <EditorCard></EditorCard>
            </div>
        </Container>
    )
}

export default EditorRecommend;