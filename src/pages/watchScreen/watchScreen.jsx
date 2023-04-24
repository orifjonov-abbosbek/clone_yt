import React from "react";
import { Col, Row } from "react-bootstrap";
import "./watchScreen.scss";
import VideoHorizontal from "../../components/VideoHorizontal/VideoHorizontal";
import VideoMetaData from "../../components/videoMetaData/videoMetaData";
import Comments from "../../components/comments/Comments";
import { useParams } from "react-router-dom";
const WatchScreen = () => {


  const {id } = useParams();
  return (
    <Row>
      <Col lg={8}>
        <div className="watchscreen__player">
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder="0"
            title="my video"
            allowFullScreen
            width="100%"
            height="100%"
          ></iframe>
        </div>

        <VideoMetaData />
        <Comments />
      </Col>

      <Col lg={4}>
        {[...Array(10)].map(() => (
          <VideoHorizontal />
        ))}
      </Col>
    </Row>
  );
};

export default WatchScreen;
