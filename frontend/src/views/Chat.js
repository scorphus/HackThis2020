import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import io from "socket.io-client";

import styles from "../styles/Chat.module.scss";
import Card from "../components/Card/card"

const ENDPOINT = "http://127.0.0.1:5000"
const socket = io(ENDPOINT)

const connectMsg = "Connected. Say hello!"
const disconnectMsg = "Connected: say hello!"

function Chat() {
    const [messages, setMessages] = useState([]);
    const [status, setStatus] = useState(disconnectMsg)
    const { handleSubmit, register, reset } = useForm();
    const bottomDiv = useRef(null);

    useEffect(() => {
        console.log("Connecting to chat server...")

        socket.on('connect', () => {
            setStatus(connectMsg)
            console.log("connected"); 
            // Change from_username later to the legit login username
            socket.emit('join', { 'from_username': "bobthebuilder", 'room': "temp"})
        });
        socket.on('disconnect', () => {
            setStatus(disconnectMsg)
            console.log("disconnected");
            socket.emit('leave', { 'from_username': "bobthebuilder", 'room': "temp"})
        });
        socket.on('message', (data) => {
            console.log("got message");
            console.log(data)
            setMessages(m => m.concat({
                username: data.from_username,
                content: data.msg
            }))
            bottomDiv.current.scrollIntoView({ behavior: "smooth" });
        })
    }, [])

    function onSubmit(data) {
        reset();
        console.log("sending message");
        console.log(data);
        socket.send({"msg": data.content,"from_username": data.username || "Feynman", "time_stamp": 1238901283, "room": "temp" });
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Physics: Simple Harmonic Motion</h1>
            <h3 className={styles.status}>{status}</h3>
            <div className={styles.windowContainer}>
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
                                        message.highlight
                                            ? styles.highlighted
                                            : ""
                                    }`}
                                >
                                    {message.content}
                                </p>
                            </div>
                        );
                    })}
                    <div style={{ height: "20px" }} ref={bottomDiv}></div>
                </div>
                <div className={styles.back}>
                    <Card
                        height="50px"
                        width="150px"
                        fontSize="1.5rem"
                        borderRadius="20px"
                        add={false}
                        backgroundColor="#EE774D"
                    >
                        Back
                    </Card>
                </div>
                <div className={styles.buttonBox}>
                    <Card
                        height="100px"
                        width="200px"
                        fontSize="1.5rem"
                        borderRadius="20px"
                        add={false}
                        backgroundColor="#F2B84B"
                    >
                        Highlight
                    </Card>
                    <Card
                        height="100px"
                        width="200px"
                        fontSize="1.5rem"
                        borderRadius="20px"
                        add={false}
                        backgroundColor="#F25749"
                    >
                        I'm Finished
                    </Card>
                </div>
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
