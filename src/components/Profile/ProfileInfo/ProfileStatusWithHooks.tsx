import React, {ChangeEvent} from 'react';

type StatusType = {
    status: string
    updateStatus: (status: string) => void
}
const ProfileStatusWithHooks = (props: StatusType) => {
    return (
        <div>
            {<div>
                    <span
                        onDoubleClick={() => {
                        }}>{props.status || 'no status, click for insert'}</span>
            </div>}
            {false && <div>
                <input onChange={() => {
                }}
                       autoFocus={true}
                />
            </div>}

        </div>
    )
}


export default ProfileStatusWithHooks;