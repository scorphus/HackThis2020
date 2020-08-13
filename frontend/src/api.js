import axios from "axios";
import io from "socket.io-client"

const url = "http://127.0.0.1:5000";

export const api = axios.create({
    baseURL: url
})

export const socket = io(url)
