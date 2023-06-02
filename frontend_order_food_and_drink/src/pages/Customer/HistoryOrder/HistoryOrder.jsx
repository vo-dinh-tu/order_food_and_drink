import React, { useState, useEffect, useRef } from "react";
import socketIOClient from "socket.io-client";
const host = "http://localhost:3000";

function HistoryOrder(props) {
    const [order, setOrder] = useState([]);
    const socketRef = useRef();
    const user = JSON.parse(sessionStorage.getItem("user"));

    useEffect(() => {
        socketRef.current = socketIOClient.connect(host);
        socketRef.current.emit('userConnect', user.id);
        socketRef.current.on('sendStatusOrder', dataOrder => {
            console.log(dataOrder);
            setOrder(dataOrder);
        });
    }, []);

    return (
        <div>
            <h2>History order</h2>
        </div>
    );
}

export default HistoryOrder;