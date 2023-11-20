import Logo from "./HeadLogo";
import Menu from "./HeadMenu";
import NavBar from "./HeadNav";

function Header() {
    return (
      <div className="mb-5 header">
        <NavBar></NavBar>
        <Logo></Logo>
        <Menu></Menu>
        <hr></hr>
      </div>
    );
  }
  
  export default Header;