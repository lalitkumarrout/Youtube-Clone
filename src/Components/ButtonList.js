import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttonNames = [
    "All",
    "Gadget",
    "Gaming",
    "Live",
    "News",
    "Cricket",
    "Podcasts",
    "Soccer",
    "Travel",
    "Recently uploaded",
    "watched"
  ];
  return (
    <div className="flex">
      {buttonNames.map((name, index) => (
        <Button key={index} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
