import React from "react";
import "./Chat.css";
import People from "./People";
import History from "./History";
import MessageBox from "./MessageBox";

export default function Chat() {
  return (
    <div className="container">
      <h3 className=" text-center">Messaging</h3>
      <div className="messaging">
        <div className="inbox_msg">
          <People />
          <div className="mesgs">
            <History />
            <MessageBox />
          </div>
        </div>

        <p className="text-center top_spac">
          {" "}
          Design by{" "}
          <a target="_blank" href="#">
            Sunil Rajput
          </a>
        </p>
      </div>
    </div>
  );
}
