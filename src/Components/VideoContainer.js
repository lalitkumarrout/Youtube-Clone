import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../Utils/constants";
import Videocard from "./Videocard";

const VideoContainer = () => {
  const [videos, setvideos] = useState([]);
  useEffect(() => {
    getvideos();
  }, []);

  const getvideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log(json.items);
    setvideos(json.items);
  };
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Videocard keys={video.id} info={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
