import React from "react";

export default function Outgoing(props) {
  return (
    <div className="outgoing_msg">
      <div className="sent_msg">
        <p>{props.msg}</p>
        <span className="time_date"> {props.time}</span>{" "}
      </div>
    </div>
  );
}
