import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Utils/chatslice";
import { generateRandomName, makeRandomMessage } from "../Utils/helper";

const Livechat = () => {
  const [LiveMesage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessage = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //API Polling

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    },1500);
    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessage.map((e, i) => (
            <ChatMessage key={i} name={e.name} message={e.message} />
          ))}
        </div>
      </div>
      <form className="w-full p-2 ml-2  border border-black " onSubmit={(e)=>{
        e.preventDefault();
        dispatch(addMessage({
            name:"Lalit",
            message:LiveMesage
        }));

        setLiveMessage("")

      }}>
        <input
          className=" px-2 w-80"
          type="text"
          value={LiveMesage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default Livechat;
