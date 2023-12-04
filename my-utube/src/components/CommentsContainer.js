import React from "react";
import Comment from "./Comment";

const commentsData= [
        {
            name: "Vinod",
            comment: " Hi this one new Comment",
            replies: [  
                {
                    name: "Vinod",
                    comment: " Hi this one new Comment",
                    replies: [
                        {
                            name: "Vinod",
                            comment: " Hi this one new Comment",
                            replies: []   
                        },
                        {
                            name: "Vinod",
                            comment: " Hi this one new Comment",
                            replies: []   
                        },
                    ]   
                },
                {
                    name: "Vinod",
                    comment: " Hi this one new Comment",
                    replies: []   
                },
                {
                    name: "Vinod",
                    comment: " Hi this one new Comment",
                    replies: []   
                },
                
            ]
        },
        {
            name: "Vinod",
            comment: " Hi this one new Comment",
            replies: []
        },
        {
            name: "Vinod",
            comment: " Hi this one new Comment",
            replies: []
        },
        {
            name: "Vinod",
            comment: " Hi this one new Comment",
            replies: []
        },
    ];

const CommentsList = ({commentData}) => {
console.log(commentData);
    return <>{commentData.map((c) => {
        return (<>
                <Comment name={c.name} comment={c.comment} />
                <div className="pl-5 ml-5 border border-l-black">{c.replies && <CommentsList commentData={c.replies} />}
                </div>
            </>
        );
    })}</>
}

const CommentsContaier = () => {
    console.log(commentsData);
    return <div><h1 className="font-bold" >Comments:</h1>
    <CommentsList commentData={commentsData}/></div>
}

export default CommentsContaier;
