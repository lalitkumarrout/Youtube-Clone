import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../Utils/constants";
import Videocard ,{AdVideoCard}from "./Videocard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setvideos] = useState([]);
  useEffect(() => {
    getvideos();
  }, []);

  const getvideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data?.json();
    console.log(json.items);
    setvideos(json.items);
  };
  return (
    <div className="flex flex-wrap">
    {/* {videos[0] && <AdVideoCard info={videos[0]}/>} */}
      {videos?.map((video) => (
        <Link keys={video.id} to={"/watch?v=" + video.id}>
          <Videocard info={video} />
        </Link>
      ))}
    </div>
  );
};


export default VideoContainer;
