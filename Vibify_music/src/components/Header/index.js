import { searchIcon } from "../../assets";
import {logoTry} from "../../assets";

const Header = (props) => {
  return (
    <header className="header flex justify-sb">
      <div className="logo">
        <img src={logoTry} alt="W" width="25%" height="auto"/>
      </div>
      <div>
        <img src={searchIcon} alt="Search" />
      </div>
    </header>
  );
};

export default Header;
