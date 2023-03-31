import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import NetMovieCard from "./NetMovieCard";
import Spinner from "react-bootstrap/Spinner";

const APIURL = "https://www.omdbapi.com/?apikey=4f5502d7&";

class NetCarousel extends Component {
  state = {
    movieBack: [],
    isLoading: true,
  };
  getMovies = async () => {
    try {
      let response = await fetch(APIURL + "s=" + this.props.searchParam);
      if (response.ok) {
        let getData = await response.json();
        this.setState({
          movieBack: getData.Search,
          isLoading: false,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    return (
      <Container fluid id="carowTainer">
        <Row>
          <Col>
            <Carousel className="carousel">
              <Carousel.Item interval={this.props.int} className="caroItem">
                <Container fluid>
                  <Row>
                    {this.state.isLoading && (
                      <Spinner
                        animation="border"
                        role="status"
                        variant="danger"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>
                    )}
                    {this.state.movieBack.slice(0, 6).map((el) => {
                      return (
                        <NetMovieCard
                          key={el.imdbID}
                          src={el.Poster}
                          title={el.Title}
                          year={el.Year}
                        />
                      );
                    })}
                  </Row>
                </Container>
              </Carousel.Item>
              <Carousel.Item interval={this.props.int} className="caroItem">
                <Container fluid>
                  <Row>
                    {this.state.movieBack.slice(6, 10).map((el) => {
                      return (
                        <NetMovieCard
                          key={el.imdbID}
                          src={el.Poster}
                          title={el.Title}
                          year={el.Year}
                        />
                      );
                    })}
                  </Row>
                </Container>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NetCarousel;
