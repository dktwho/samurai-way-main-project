import React from 'react';
import styled from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div className={styled.dialogs}>
            <div className={styled.dialogsItem}>
                <div className={`${styled.dialog} ${styled.active}`}>
                    Bob
                </div>

                <div className={styled.dialog}>
                    Bill
                </div>

                <div className={styled.dialog}>
                    Tedd
                </div>

                <div className={styled.dialog}>
                    John
                </div>

            </div>

            <div className={styled.messages}>
                <div className={styled.message}>Hi</div>
                <div className={styled.message}>Hello</div>
                <div className={styled.message}>How are you</div>
            </div>
        </div>
    );
};
