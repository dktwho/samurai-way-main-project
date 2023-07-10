import React from 'react';
import styled from './DialogsItem.module.css'
import {NavLink} from "react-router-dom";

export type DialogItemType = {
    name: string;
    id: number;
}

export const DialogItem: React.FC<DialogItemType> = ({name, id}) => {
    let path = `/dialogs/${id}`
    return (
        <div className={`${styled.dialog} ${styled.active}`}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}


