import React from 'react';
import styled from "./Message.module.css";

export type MessageType = {
    message: string
    id: number
}
export const Message: React.FC<MessageType> = ({message}) => {
    return (
        <div className={styled.message}>{message}</div>
    )
}