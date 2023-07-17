import React from 'react';
import styled from './DialogsItem.module.css'
import {NavLink} from "react-router-dom";

export type DialogItemType = {
    name: string;
    id: number;
}

export const DialogItem: React.FC<DialogItemType> = (props) => {
    let path = `/dialogs/${props.id}`
    return (
        <div className={`${styled.dialog} ${styled.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


