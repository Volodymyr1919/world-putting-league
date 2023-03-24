import React, { useState } from "react";

export default function Button() {

    const [link, setLink] = useState("");
    const [title, setTitle] = useState("");

    setInterval(() => {
        switch (window.location.pathname) {
            case "/":
                setLink("https://forms.gle/LzGHXtYEWVLQiuYq7");
                setTitle("PLAYER APPLICATION");
                break;
            case "/top-8":
                setLink("https://www.youtube.com/channel/UCTinRQXMRRM_P2nje8L8X_w");
                setTitle("Watch Highlights");
                break;
            default:
                break;
        }
    }, 500);

    return(
        <button>
            <a href={link}>{title}</a>
        </button>
    );
}