import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { NewsData } from "../types/NewsData";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

interface PropsType {
  reading: NewsData;
}

const ArticleComponent = (props: PropsType) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${props.reading.id}`);
  };

  return (
    <Col xs={3}>
      <Card style={{ height: "50vh" }}>
        <Card.Img
          height={200}
          className="ratio ratio-16x9"
          variant="top"
          src={props.reading.imageUrl}
        />
        <Card.Body>
          <Card.Title>{props.reading.title}</Card.Title>
          <Card.Text className="text-truncate">
            {props.reading.summary}
          </Card.Text>
          <Button variant="primary" onClick={handleClick}>
            Read This
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ArticleComponent;
