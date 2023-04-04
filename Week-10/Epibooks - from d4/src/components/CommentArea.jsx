import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

const CommentArea = (props) => {
  const [pack, setPack] = useState({
    comments: [],
    isLoading: false,
    isError: false,
  });

  useEffect(() => {
    setPack({ ...pack, isLoading: true });
    getComment();
  }, [props.asin]);

  const getComment = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + props.asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJhZDA4YjY4MzQzMTAwMTRkZWE3OGQiLCJpYXQiOjE2ODA1Mjc0OTksImV4cCI6MTY4MTczNzA5OX0.Zg-_qRAESiz64rLknV3mP89OJYAHFfGo8EY6TkaugrU",
          },
        }
      );
      console.log(response);
      if (response.ok) {
        let comments = await response.json();
        console.log(comments);
        setPack({
          comments: comments,
          isLoading: false,
          isError: false,
        });
      } else {
        console.log("error");
        setPack({ ...pack, isLoading: false, isError: true });
      }
    } catch (error) {
      console.log(error);
      setPack({ ...pack, isLoading: false, isError: true });
    }
  };

  return (
    <div className="text-center">
      {pack.isLoading && <Loading />}
      {pack.isError && <Error />}
      <AddComment asin={props.asin} />
      <CommentList commentsToShow={pack.comments} />
    </div>
  );
};

export default CommentArea;
