import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import Livechat from "./Livechat";

const Watchpage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="  flex flex-col w-full">
      <div className="px-5 flex w-full  ">
        <div>
          <iframe
            width="900"
            height="600"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div  className="w-full">
          <Livechat />
        </div>
      </div>
      <CommentContainer />
    </div>
  );
};

export default Watchpage;
