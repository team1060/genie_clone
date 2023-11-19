import Logo from "./Logo";
import Menu from "./Menu";
import NavBar from "./NavBar";

function Header() {
    return (
      <div>
        <NavBar></NavBar>
        <Logo></Logo>
        <Menu></Menu>
        <hr></hr>
      </div>
    );
  }
  
  export default Header;