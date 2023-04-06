import { Component } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import NetCarousel from "./NetCarousel";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

class NetNav extends Component {
  state = {
    searchValue: "",
  };
  render() {
    return (
      <header className="sticky-top">
        <Navbar expand="lg" className="netNav">
          <Container fluid>
            <Link to="/">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                width={100}
                alt="Netflix logo"
              />
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink className="text-light nav-link" to="/tv-shows">
                  Tv Shows
                </NavLink>
              </Nav>
              <Nav className="ms-auto">
                <Nav.Link href="#">
                  {/* !!! lo state è correttamente settato, al submit risulta, ma poi non torna il carosello */}
                  <form
                    onSubmit={(ev) => {
                      ev.preventDefault();
                      console.log(this.state);
                      return (
                        <NetCarousel
                          searchParam={this.state.searchValue}
                          int={15000}
                        />
                      );
                    }}
                  >
                    <input
                      type="search"
                      placeholder="Search"
                      className="form-control"
                      onChange={(ev) => {
                        this.setState({ searchValue: ev.target.value });
                      }}
                    ></input>
                  </form>
                </Nav.Link>
                <Nav.Link href="#" className="text-light">
                  <i className="bi bi-bell-fill fs-4"></i>
                </Nav.Link>
                <NavDropdown
                  title="Profilo"
                  id="basic-nav-dropdown"
                  className="dropstart"
                >
                  <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Impostazioni
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}

export default NetNav;
