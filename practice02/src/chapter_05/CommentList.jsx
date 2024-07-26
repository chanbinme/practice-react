import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "김찬빈",
        comment: "루이까또즈 가방 너무 이뻐요!",
    },
    {
        name: "김현경",
        comment: "왜 품절이야 ㅠㅠ",
    },
    {
        name: "박혁거세",
        comment: "감사합니다.",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;