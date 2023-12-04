import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import LiveChat from "./LiveChat";
import CommentsContaier from "./CommentsContainer";

const WatchPage = () => {
    const [serchParams] = useSearchParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu());
    },[]);
    return <div className="flex flex-col"><div className="flex w-full">
    <div className="px-5 flex w-full">
        <iframe
        width="1100"
        height="600"
        src={"https://www.youtube.com/embed/" + serchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen>

        </iframe>
    </div>
    <div className="w-full"><LiveChat/></div>
    </div>
    <div className="p-2 m-2"><CommentsContaier/></div>
    </div>;
};

export default WatchPage;