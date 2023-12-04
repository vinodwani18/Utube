import React from "react";

const ChatMessage = ({name, message}) => {
    return (
    <div className="flex ml-2 items-center shadow p-2">
        <img className="h-8" alt="user" src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png">
        </img>
        <span className="font-bold px-2">{name}</span>
        <span>{message}</span>
    </div>
    );
};

export default ChatMessage;