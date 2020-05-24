import React from "react";
import Incoming from "./messages/Incoming";
import Outgoing from "./messages/Outgoing";

export default function History(props) {
  //   let messages = null;
  const messages = props.messages.map((message, index) => {
    if (message.incoming) {
      return (
        <Incoming key={index} msg={message.message} time="11:01 AM | June 9" />
      );
    } else {
      return (
        <Outgoing key={index} msg={message.message} time="11:01 AM | June 9" />
      );
    }
  });
  return <div className="msg_history">{messages}</div>;
}
