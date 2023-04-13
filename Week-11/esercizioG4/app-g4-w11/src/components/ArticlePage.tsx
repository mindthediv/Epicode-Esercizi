import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArticleData } from "../types/ArticleData";
import { Badge } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const API_URL = "https://api.spaceflightnewsapi.net/v3/articles/";

const ArticlePage = () => {
  const { id } = useParams();
  const [articleData, setArticleData] = useState<ArticleData>();

  const getDetails = async () => {
    try {
      let response = await fetch(API_URL + id);
      if (response.ok) {
        const articleData = await response.json();
        setArticleData(articleData);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <img width={200} src={articleData?.imageUrl} alt="" />
          <h2>{articleData?.title}</h2>
          <p>{articleData?.summary}</p>
          <span>
            <Badge bg="info">
              {" "}
              Published: {articleData?.publishedAt.slice(0, 10)}
            </Badge>
            on
            <a href={articleData?.url} className="nav-link">
              {articleData?.newsSite}
            </a>
          </span>
        </Col>
      </Row>
    </Container>
  );
};

export default ArticlePage;
