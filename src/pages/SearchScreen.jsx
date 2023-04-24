import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getVideosBySearch } from "../redux/actions/videos.action";
import { Container } from "react-bootstrap";
import VideoHorizontal from "../components/VideoHorizontal/VideoHorizontal";
const SearchScreen = () => {
  const { query } = useParams();


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideosBySearch(query));
  }, [query, dispatch]);

  const { videos, loading } = useSelector((state) => state.searchedVideos);

   console.log(videos)
  return (
    <Container>
      {!loading ? (
        videos?.map((video) => (
          <VideoHorizontal video={video} key={video.id.videoId}  />
        ))
      ) : (
        <h2>Loading...</h2>
      )}
    </Container>
  );
};

export default SearchScreen;
