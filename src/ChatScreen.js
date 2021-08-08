import React, { useState } from "react";
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Bakr",
      image:
        "https://pbs.twimg.com/profile_images/1331960450322485251/ng6RkAMr_400x400.jpg",
      message: "AssalamWalaikum",
    },
    {
      name: "Bakr",
      image:
        "https://pbs.twimg.com/profile_images/1331960450322485251/ng6RkAMr_400x400.jpg",
      message: "AssalamWalaikum",
    },
    {
      message: "WalaikumAsslam",
    },
  ]);
  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p>YOU MATCH WITH BAKR ON 10/08/20</p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__avatar"
              src={message.image}
              alt={message.name}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}
      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="input__field"
          placeholder="Type a message..."
        />
        <button
          onClick={handleSend}
          className="chatScreen__inputButton"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
