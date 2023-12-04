import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SUGGESTIONS_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const searchCache = useSelector((store) => store.search);

    useEffect(() => {
        const timer = setTimeout(() => {
            if(searchCache[searchQuery]){
                setShowSuggestions(searchCache[searchQuery]);
            } else{
                getSerachSuggestions()
            }
        }, 200);

        return () => {
            clearTimeout(timer);
        }
    }, [searchQuery]);

    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };

    const getSerachSuggestions = async () => {
        const data = await fetch(YOUTUBE_SUGGESTIONS_API + searchQuery);
        const result = await data.json();
        setSuggestions(result[1]);
        dispatch(cacheResults({
            [searchQuery] : result[1]
        }));
    }

    return <div className="grid grid-flow-col p-5 m-2 shadow">
        <div className="flex col-span-1">
            <img className="h-8 cursor-pointer" alt="menu"
            onClick={() => toggleMenuHandler()}
            src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"></img>
            <a href="/">
                <img className="h-8 mx-2" alt="yputube-logo"
                src="https://t3.ftcdn.net/jpg/05/07/46/84/360_F_507468479_HfrpT7CIoYTBZSGRQi7RcWgo98wo3vb7.jpg"></img>
            </a>
        </div>
        <div className="col-span-10 px-10">
            <div>
                <input type="text" 
                className="p-2 w-1/2 border border-gray-400 rounded-l-full"
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setShowSuggestions(false)}></input>
                <button
                className="p-2 border border-gray-400 rounded-r-full bg-gray-200">
                    Search</button>
            </div>
            {showSuggestions && <div className="absolute bg-white py-2 px-5 w-[488.833px] shadow-lg border border-gray-100 rounded-lg">
                <ul>
                    {suggestions.map((s) => <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">{s}</li>)}
                
                </ul>
            </div>
            }
        </div>
        <div className="col-span-1">
            <img className="h-8" alt="user" src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png">
            </img>
        </div>
    </div>
}

export default Head;