const Comment = ({name, comment}) => {
    return <div className="flex h-12 m-2 border border-gray-100 shadow-lg"> 
        <img className="h-8" alt="user" src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png">
        </img>
        <div className="font-bold  mx-2">{name}</div>
        <div>{comment}</div>
    </div>
}

export default Comment;