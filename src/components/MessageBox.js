import React from "react";

export default class MessageBox extends React.Component {
  state = { message: "" };
  sendMessage = () => {
    this.props.sendMessage(this.state.message);
    this.setState({ message: "" });
  };
  handleChange = (e) => {
    this.setState({ message: e.target.value });
  };
  render() {
    return (
      <div className="type_msg">
        <div className="input_msg_write">
          <input
            type="text"
            className="write_msg"
            placeholder="Type a message"
            value={this.state.message}
            onChange={this.handleChange}
          />
          <button
            className="msg_send_btn"
            type="button"
            onClick={this.sendMessage}
          >
            <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    );
  }
}
