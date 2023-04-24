import React from "react";
import moment from "moment";
import numeral from "numeral";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import ShowMoreText from "react-show-more-text";
import "./videoMetaData.scss";

const VideoMetaData = () => {
  return (
    <div className="videoMetaData py-2">
      <div className="videoMetaData__top">
        <h5>video title</h5>
        <div className="d-flex justify-content-between align-items-center py-1">
          <span>
            {numeral(10000).format("0.a")} Views •
            {moment("2002-20-6").fromNow()}
          </span>

          <div className="">
            <span className="mr-3">
              <MdThumbUp size={26} /> {numeral(10000).format("0.a")}
            </span>
            <span className="mr-3">
              <MdThumbDown size={26} />
              {numeral(10000).format("0.a")}
            </span>
          </div>
        </div>
      </div>
      <div className="videoMetaData__channel d-flex justify-content-between align-items-center  my-2 py-3">
        <div className="d-flex">
          <img
            className="rounder-circle mr-3"
            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
            alt=""
          />
          <div className="d-flex flex-column">
            <span>Backbench coder </span>
            <span> {numeral(10000).format("0.a")} Subscribers</span>
          </div>
        </div>

        <button className="btn border-0 p-2 m-2">Subscribe</button>
      </div>
      <div className="videoMetaData__description">
        <ShowMoreText
          lines={3}
          more="SHOW MORE"
          less="SHOW LESS"
          anchorClass="ShowMoreText"
          expanded={false}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi,
          laborum! Ipsum doloribus id quaerat beatae autem accusamus quibusdam
          accusantium eaque minima. Suscipit modi dignissimos, error consectetur
          dolore quaerat veritatis illum repudiandae provident? Minus tempora
          voluptatem ratione, facere obcaecati, libero architecto ipsum
          laboriosam aspernatur, consequatur nihil sequi amet impedit eum ipsa?
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi,
          laborum! Ipsum doloribus id quaerat beatae autem accusamus quibusdam
          accusantium eaque minima. Suscipit modi dignissimos, error consectetur
          dolore quaerat veritatis illum repudiandae provident? Minus tempora
          voluptatem ratione, facere obcaecati, libero architecto ipsum
          laboriosam aspernatur, consequatur nihil sequi amet impedit eum ipsa?
        </ShowMoreText>
      </div>
    </div>
  );
};

export default VideoMetaData;
