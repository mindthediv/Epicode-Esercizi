import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ArticleComponent from "./ArticleComponent";
import { useEffect, useState } from "react";
import { NewsData } from "../types/NewsData";
const API_URL = "https://api.spaceflightnewsapi.net/v3/articles";

const HomePage = () => {
  const [newsData, setNewsData] = useState<NewsData[]>([]);

  const getNewsData = async () => {
    try {
      let response = await fetch(API_URL);
      if (response.ok) {
        let newsData = await response.json();
        setNewsData(newsData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNewsData();
  }, []);

  return (
    <Container>
      <Row>
        <h2>News</h2>
        {newsData.map((el) => (
          <ArticleComponent reading={el} />
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;
