import React from 'react';

export const Users = (props: any) => {
    console.log(props.usersPage)
    return (
        <div>
            {props.usersPage.usersPage.map(u => {
                return <div key={u.id}>
                    <span>{}</span>
                    <span></span>
                </div>
            })}
        </div>
    );
};

