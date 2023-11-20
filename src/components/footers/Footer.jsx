import FootNav from "./FootNav";
import FootLink from "./FootLink";
import FootInfo from "./FootInfo";
import FootEmblem from "./FootEmblem";

function Footer() {
    return (
        <div>
            <hr></hr>
            <FootNav></FootNav>
            <hr></hr>
            <FootLink></FootLink>
            <FootInfo></FootInfo>
            <FootEmblem></FootEmblem>
        </div>
    )
}

export default Footer;