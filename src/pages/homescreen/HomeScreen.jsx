import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategoriesBar from "../../components/categoriesBar/Categories";
import Video from "../../components/video/Video";
import { useDispatch, useSelector } from "react-redux";
import { getPopularVideos } from "../../redux/actions/videos.action";

import InfiniteScroll from "react-infinite-scroll-component";

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const { videos } = useSelector(state => state.homeVideos);
  console.log(videos)

  const fetchData = () => {
    dispatch(getPopularVideos());
  };

  return (
    <>
      <Container>
        <CategoriesBar />

        <Row>
          <InfiniteScroll
            dataLength={videos.length}
            hasMore={true}
            next={fetchData}
            style={{display: 'flex', flexWrap: 'wrap', overflow:'scroll',}}
            loader={
              <div className="spinner-border text-danger d-block mx-auto"></div>
            }
          >
            
              {videos?.map((video) => (
                <Col lg={3} md={4} key={video.id}>
                  <Video video={video} />
                </Col>
              ))}
          </InfiniteScroll>
        </Row>
      </Container>
    </>
  );
};

export default HomeScreen;
