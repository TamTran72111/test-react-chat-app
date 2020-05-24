import React from "react";

import "./Chat.css";
import People from "./People";
import History from "./History";
import MessageBox from "./MessageBox";

export default class Chat extends React.Component {
  state = { messages: [] };
  componentDidMount() {
    const END_POINT = "localhost:8000/";
    this.socket = new WebSocket("ws://" + END_POINT + "ws/chat/lobby/");
    this.socket.onmessage = this.receiveMessage;
    this.socket.onclose = function (e) {
      console.error("Chat socket closed unexpectedly");
    };
  }

  receiveMessage = (e) => {
    const data = JSON.parse(e.data);
    const messages = this.state.messages;
    messages.push(data.message);
    this.setState({ messages: messages });
  };

  sendMessage = (message) => {
    this.socket.send(JSON.stringify({ message }));
  };

  render() {
    return (
      <div className="container">
        <h3 className=" text-center">Messaging</h3>
        <div className="messaging">
          <div className="inbox_msg">
            <People />
            <div className="mesgs">
              <History />
              <MessageBox sendMessage={this.sendMessage} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
