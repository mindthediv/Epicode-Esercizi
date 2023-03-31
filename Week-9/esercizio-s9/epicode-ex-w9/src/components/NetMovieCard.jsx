import { Component } from "react";
import { Col } from "react-bootstrap";

class NetMovieCard extends Component {
  render() {
    return (
      <Col xs={4} md={3} lg={2} className="caroMovie">
        <img src={this.props.src} className="w-100" />
        <div className="hoverMovie">
          <h3>{this.props.title}</h3>
          <span>{this.props.year}</span>
          <div className="d-flex w-100 justify-content-around align-items-center fs-4">
            <span>
              <i className="bi bi-play-circle fs-2"></i>
            </span>
            <span className="text-success">98% </span>
          </div>
        </div>
      </Col>
    );
  }
}

export default NetMovieCard;
