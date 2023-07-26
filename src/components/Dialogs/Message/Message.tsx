import React from 'react';
import styled from "./Message.module.css";
import {MessageType} from "../../../redux/state";


export const Message: React.FC<MessageType> = (props ) => {
    return (
        <div className={styled.message}>{props.message}</div>
    )
}