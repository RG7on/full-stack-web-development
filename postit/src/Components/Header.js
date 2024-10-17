import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import logo from "../Images/logo-t.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar className="header">
        <Nav>
          <NavItem>
            <Link to="/"><img src={logo} className="logo" alt="Logo" /></Link>
          </NavItem>          
          <NavItem>
            <NavLink tag={Link} to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/profile">Profile</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/register">Register</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/logout">Logout</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
