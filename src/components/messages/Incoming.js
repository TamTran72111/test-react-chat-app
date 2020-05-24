import React from "react";

export default function Incoming(props) {
  const avatar = props.avatar
    ? props.avatar
    : "https://ptetutorials.com/images/user-profile.png";
  return (
    <div className="incoming_msg">
      <div className="incoming_msg_img">
        {" "}
        <img src={avatar} alt="sunil" />{" "}
      </div>
      <div className="received_msg">
        <div className="received_withd_msg">
          <p>{props.msg}</p>
          <span className="time_date"> {props.time}</span>
        </div>
      </div>
    </div>
  );
}
