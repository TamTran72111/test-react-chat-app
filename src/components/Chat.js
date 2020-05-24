import React from "react";
import "./Chat.css";
import People from "./People";
import History from "./History";
export default function Chat() {
  return (
    <div className="container">
      <h3 className=" text-center">Messaging</h3>
      <div className="messaging">
        <div className="inbox_msg">
          <People />
          <div className="mesgs">
            <History />
            <div className="type_msg">
              <div className="input_msg_write">
                <input
                  type="text"
                  className="write_msg"
                  placeholder="Type a message"
                />
                <button className="msg_send_btn" type="button">
                  <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                </button>
              </div>
            </div>
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
