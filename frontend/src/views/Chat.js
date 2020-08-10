import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";

import styles from "../styles/Chat.module.scss";

function Chat() {
    const [messages, setMessages] = useState([]);
    const { handleSubmit, register, reset } = useForm();
    const bottomDiv = useRef(null);

    function onSubmit(data) {
        console.log(data.highlight);
        setMessages(
            messages.concat({
                username: data.username || "Feynman",
                content: data.content,
                highlight: data.highlight,
            })
        );

        reset();
        bottomDiv.current.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Physics: Simple Harmonic Motion</h1>
            <div className={styles.messageWindow}>
                {messages.map((message, idx) => {
                    let showName = true;

                    if (
                        idx !== 0 &&
                        message.username === messages[idx - 1].username
                    ) {
                        showName = false;
                    }

                    return (
                        <div className={styles.message}>
                            {showName && (
                                <p className={styles.username}>
                                    {message.username}
                                </p>
                            )}
                            <p
                                className={`${styles.content} ${
                                    message.highlight ? styles.highlighted : ""
                                }`}
                            >
                                {message.content}
                            </p>
                        </div>
                    );
                })}
                <div style={{ height: "20px" }} ref={bottomDiv}></div>
            </div>
            <form
                autoComplete="off"
                onSubmit={handleSubmit(onSubmit)}
                className={styles.chatBox}
            >
                <input
                    placeholder="test username"
                    type="text"
                    name="username"
                    ref={register}
                />
                <input
                    autoFocus={true}
                    type="text"
                    name="content"
                    placeholder="Enter your message..."
                    ref={register({
                        minLength: 1,
                    })}
                />
                <input
                    type="checkbox"
                    name="highlight"
                    id="highlight"
                    ref={register}
                />
                <label htmlFor="highlight">Highlight</label>
                <button className="button" type="submit">
                    Send
                </button>
            </form>
        </div>
    );
}

export default Chat;
