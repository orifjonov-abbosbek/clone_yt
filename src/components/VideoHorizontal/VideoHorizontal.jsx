import {useEffect, useState} from "react";
import "./VideoHorizontal.scss";
import moment from "moment";
import request from "../../api";
import { AiFillEye } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import numeral from "numeral";
import { Row, Col } from "react-bootstrap";

const VideoHorizontal = ({ video, searchScreen }) => {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      description,
      title,
      publishedAt,
      thumbnails:{medium},
    },
  } = video;


    const [views, setViews] = useState(null);
    const [duration, setduration] = useState(null);
    const [channelIcon, setChannelIcon] = useState(null);

  useEffect(() => {
    const get_video_details = async () => {
      const {
        data: { items },
      } = await request("videos", {
        params: {
          part: "contentDetails, statistics",
          id: id.videoId,
        },
      });

      setduration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };

    get_video_details();
  }, [id]);

  useEffect(() => {
    const get_channel_icons = async () => {
      const {
        data: { items },
      } = await request("channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });

      setChannelIcon(items[0].snippet.thumbnails.default);
    };

    get_channel_icons();
  }, [channelId]);



  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  return (
    <Row className="videoHorizontal py-2 align-align-items-center">
      <Col xs={6} md={searchScreen ? 2 : 6} className="videoHprizontal__left">
        <LazyLoadImage
          src={medium.url}
          effect="blur"
          className="videoHorizontal__thumbnail"
          wrapperClassName="videoHorizontal__thumbnail"
        />
        <span className="video__top__duration">{_duration}</span>
      </Col>
      <Col xs={6} md={searchScreen ? 3 : 6} className="videoHprizontal__right">
        <p className="videoHorizontal__title mb-1">
          {title}
        </p>
        <div className="videoHorizontal__details">
          <AiFillEye /> {numeral(views).format("0.a")} Views •
          {moment(publishedAt).fromNow()}{" "}
        </div>
        <div className="videoHorizontal__channel d-flex align-items-center my-1">
          {/* <LazyLoadImage
            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
            effect="blur"
          /> */}
          <p>{channelTitle}</p>
        </div>
      </Col>
    </Row>
  );
};

export default VideoHorizontal;
