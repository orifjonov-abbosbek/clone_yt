import React from 'react'
import './video.scss'
import {AiFillEye} from 'react-icons/ai';
const Video = () => {
  return (
    <div className="video">
      <div className="video__top">
        <img
        style={{width:'360px', height: '203px'}}
          src="https://lh3.googleusercontent.com/58AB68tTCEpCxtghdbKnEol2VwD74QeIJMI7a9oqvSMQLWc2XQFFNfuKYT9zPShpcXu3yqun-u4SzMkVwhg6OKpvvg=w640-h400-e365-rj-sc0x00ffffff"
          alt=""
        />
        <span>05:43</span>
      </div>
      <div className="video__title">Create app in 5 minutes</div>
      <div className="video__details">
        <span>
          <AiFillEye /> 5m Views •
        </span>
      </div>
      <div className="video__channel">
        <img
          src="https://yt3.ggpht.com/ytc/AGIKgqM4MHT8GqYNCotHLhIPasr9pzvrhKKBTKBG7944=s68-c-k-c0x00ffffff-no-rj"
          alt=""
        />
        <p>rainbow</p>
      </div>
    </div>
  );
}

export default Video