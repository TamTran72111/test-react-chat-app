import React from "react";

import "./Chat.css";
import People from "./People";
import History from "./History";
import MessageBox from "./MessageBox";

export default class Chat extends React.Component {
  state = { messages: [] };
  // use this function to replace the username implementation
  generateID() {
    this.id = "_" + Math.random().toString(36).substr(2, 9);
  }
  componentDidMount() {
    this.generateID();
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
    let incoming = false;
    if (this.id !== data.message.substr(0, 10)) {
      incoming = true;
    }
    messages.push({ message: data.message.substr(10), incoming });
    this.setState({ messages: messages });
  };

  sendMessage = (message) => {
    this.socket.send(JSON.stringify({ message: this.id + message }));
  };

  render() {
    return (
      <div className="container">
        <h3 className=" text-center">Messaging</h3>
        <div className="messaging">
          <div className="inbox_msg">
            <People />
            <div className="mesgs">
              <History messages={this.state.messages} />
              <MessageBox sendMessage={this.sendMessage} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
