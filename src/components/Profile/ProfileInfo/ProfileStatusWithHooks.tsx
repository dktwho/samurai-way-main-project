import React, {ChangeEvent, useEffect, useState} from 'react';

type StatusType = {
    status: string
    updateStatus: (status: string) => void
}
const ProfileStatusWithHooks = (props: StatusType) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateMode = () => {
        setEditMode(true)
    }

    const deActivateMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode && <div>
                <b>Status: <span
                    onDoubleClick={activateMode}>{props.status || 'no status, click for insert'}</span></b>
            </div>}
            {editMode && <div>
                <input onChange={onStatusChange}
                       autoFocus={true}
                       onBlur={deActivateMode}
                       value={status}
                />
            </div>}

        </div>
    )
}


export default ProfileStatusWithHooks;