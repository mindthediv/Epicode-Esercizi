import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const MyNav = () => {
  return (
    <Navbar bg="dark" variant="dark" className="mb-4">
      <Container>
        <Link className="nav-link text-light" to={"/"}>
          EPI-METEO
        </Link>
        <Nav className="me-auto">
          <Link to={"/favourites"} className="nav-link">
            Preferiti
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNav;
