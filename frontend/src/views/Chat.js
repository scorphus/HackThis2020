import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import io from "socket.io-client";

import styles from "../styles/Chat.module.scss";

const ENDPOINT = "http://127.0.0.1:5000"
const socket = io(ENDPOINT)

function Chat() {
    const [messages, setMessages] = useState([]);
    const [status, setStatus] = useState("Disconnected")
    const { handleSubmit, register, reset } = useForm();
    const bottomDiv = useRef(null);

    useEffect(() => {
        console.log("SDJKFL")

        socket.on('connect', () => {
            setStatus("Connected")
            console.log("connected"); 
            // Change from_username later to the legit login username
            socket.emit('join', { 'from_username': "bobthebuilder", 'room': "temp"})
        });
        socket.on('disconnect', () => {
            setStatus("Disconnected")
            console.log("disconnected");
            socket.emit('leave', { 'from_username': "bobthebuilder", 'room': "temp"})
        });
        socket.on('message', (data) => {
            console.log(data.msg)
            setMessages(m => m.concat({
                username: data.from_username,
                content: data.msg
            }))
            bottomDiv.current.scrollIntoView({ behavior: "smooth" });
        })
    }, [])

    function onSubmit(data) {
        reset();
        socket.send({"msg": data.content,"from_username": data.username, "time_stamp": 1238901283, "room": "temp" });
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Physics: Simple Harmonic Motion</h1>
            <h3>{status}</h3>
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
