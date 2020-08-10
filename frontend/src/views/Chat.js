import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";

import styles from "../styles/Chat.module.scss";

function Chat() {
    const [messages, setMessages] = useState([]);
    const { handleSubmit, register, reset } = useForm();
    const bottomDiv = useRef(null);

    function onSubmit(data) {
        setMessages(
            messages.concat({
                username: "Feynman",
                content: data.content,
            })
        );

        reset();
        bottomDiv.current.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Physics: Simple Harmonic Motion</h1>
            <div className={styles.messageWindow}>
                {messages.map((message) => (
                    <div className={styles.message}>
                        <p className={styles.username}>{message.username}</p>
                        <p className={styles.content}>{message.content}</p>
                    </div>
                ))}
                <div ref={bottomDiv}></div>
            </div>
            <form
                autoComplete="off"
                onSubmit={handleSubmit(onSubmit)}
                className={styles.chatBox}
            >
                <input
                    autoFocus={true}
                    type="text"
                    name="content"
                    placeholder="Enter your message..."
                    ref={register({
                        minLength: 1,
                    })}
                />
                <button className="button" type="submit">
                    Send
                </button>
            </form>
        </div>
    );
}

export default Chat;
