import React from "react";

const Videocard = ({ info }) => {
  console.log(info);
  const { snippet, statitics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return <div className="p-2 m-2 w-56 shadow-lg">
    <img className="rounded-lg"  alt="thumbnail" src={thumbnails.medium.url}/>
    <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statitics}</li>
    </ul>
  </div>;
};

export default Videocard;
