import React from "react";
import Incoming from "./messages/Incoming";
import Outgoing from "./messages/Outgoing";

export default function History() {
  return (
    <div className="msg_history">
      <Incoming
        msg="Test which is a new approach to have all solutions"
        time="11:01 AM | June 9"
      />
      <Outgoing
        msg="Test which is a new approach to have all solutions"
        time="11:01 AM | June 9"
      />

      <Incoming
        msg="Test, which is a new approach to have"
        time="11:01 AM | Yesterday"
      />
      <Outgoing
        msg="Apollo University, Delhi, India Test"
        time="11:01 AM | Today"
      />

      <Incoming
        msg="We work directly with our designers and suppliers, and sell direct
        to you, which means quality, exclusive products, at a price anyone
        can afford."
        time="11:01 AM | Today"
      />
    </div>
  );
}
