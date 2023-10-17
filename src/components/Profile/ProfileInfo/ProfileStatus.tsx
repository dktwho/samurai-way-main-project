import React from 'react';


type StatusType = {
    status: string
}
const ProfileStatus = (props: StatusType) => {
    return (
        <div>
            <div>
                <span>{props.status}</span>
            </div>
            <div>
                <input value={props.status}></input>
            </div>
        </div>

    );
};

export default ProfileStatus;