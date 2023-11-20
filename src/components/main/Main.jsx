import EditorRecommend from "./EditorRecommend";
import HotAndNew from "./HotAndNew";
import MusicSwiper from "./MusicSwiper";

function Main() {
    return (
        <div>
            <MusicSwiper ></MusicSwiper>
            <hr className="mb-5"></hr>
            <HotAndNew ></HotAndNew>
            <hr className="mb-5"></hr>
            <EditorRecommend ></EditorRecommend> 
        </div>
    )
}

export default Main;