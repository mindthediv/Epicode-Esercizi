import { Component } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";

const APIURL = "https://www.omdbapi.com/?apikey=4f5502d7&";

class NetJumbo extends Component {
  state = {
    willMovie: {},
    isLoading: true,
  };

  getJumbo = async () => {
    let response = await fetch(APIURL + "s=Ready+player+one");
    if (response.ok) {
      let dataJumbo = await response.json();
      this.setState({ willMovie: dataJumbo.Search[0], isLoading: false });
    }
  };

  componentDidMount() {
    this.getJumbo();
  }

  render() {
    return (
      <Container
        fluid
        className="jumboTainer"
        style={{
          backgroundImage: "url(" + this.state.willMovie.Poster + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Row
          className="align-items-center h-100"
          style={{ backdropFilter: "blur(8px)" }}
        >
          {this.state.isLoading && (
            <Spinner animation="border" role="status" variant="danger">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
          <Col xs={10} className="jumboCol offset-1">
            <div className="jumboContent d-flex justify-content-between align-items-center">
              <div className="jumboText">
                <h2>{this.state.willMovie.Title}</h2>
                <p>{this.state.willMovie.Year}</p>
                <div className="d-flex w-100 justify-content-between align-items-center fs-4">
                  <span>
                    <i className="bi bi-play-circle fs-2"></i>
                  </span>
                  <span>98% </span>
                </div>
              </div>
              <img src={this.state.willMovie.Poster} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NetJumbo;
