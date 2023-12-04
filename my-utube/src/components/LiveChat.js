import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";
import {generateRandomName} from "../utils/helper";

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState('');
    const dispatch = useDispatch();

    const chatMessage = useSelector((store) => store.chat.messages)
    useEffect(() => {
        const i = setInterval(() => {
            dispatch(addMessages({
                name: generateRandomName(),
                message: " This is new message"
            }
            ));
        }, 2000);

        return () => {
            clearInterval(i);
        }
    }, []);
    return (
        <div>
            <div className="w-full h-[600px] overflow-y-scroll border flex flex-col-reverse border-black bg-slate-100 rounded-lg">
                {chatMessage.map((c, i) => (
                    <ChatMessage key={i} name={c.name} message={c.message} />
                ))}
            </div>
            <form className="w-full border border-black p-2 ml-2" onSubmit={(e)=> {
                e.preventDefault();
                dispatch(addMessages({
                    name: "vinod",
                    message: liveMessage
                }));
                setLiveMessage("");
            }}>
                <input value={liveMessage} onChange={(e) => setLiveMessage(e.target.value)} className="96" type="text"/>
                <button className="px-2 mx-2 bg-green-200">Send</button>
            </form>
        </div>
    );
};

export default LiveChat