import React from 'react';
import styled from "./Message.module.css";

export type MessageType = {
    message: string
    id: number
}
export const Message: React.FC<MessageType> = (props ) => {
    return (
        <div className={styled.message}>{props.message}</div>
    )
}