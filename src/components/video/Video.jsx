import React, { useEffect, useState } from "react";
import "./video.scss";
import moment from "moment";
import { AiFillEye } from "react-icons/ai";
import request from "../../api";
import numeral from "numeral";
const Video = ({ video }) => {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      title,
      publishedAt,
      thumbnails: { medium },
    },
  } = video;

  const [views, setViews] = useState(null);
  const [duration, setduration] = useState(null);
  const [channelIcon, setChannelIcon]= useState(null);


  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  useEffect(() => {
    const get_video_details = async () => {
      const {
        data: { items },
      } = await request("videos", {
        params: {
          part: "contentDetails, statistics",
          id: id,
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

        setChannelIcon(items[0].snippet.thumbnails.default)

      };

      get_channel_icons();
    }, [channelId]);



  return (
    <div className="video">
      <div className="video__top">
        <img
          src={medium.url}
          alt=""
        />
        <span>{_duration}</span>
      </div>
      <div className="video__title">{title}</div>
      <div className="video__details">
        <span>
          <AiFillEye /> {numeral(views).format("0.a")} Views •
        </span>
        <span>{moment(publishedAt).fromNow()}</span>
      </div>
      <div className="video__channel">
        <img
          src={channelIcon?.url}
          alt=""
        />
        <p>{channelTitle}</p>
      </div>
    </div>
  );
};

export default Video;
