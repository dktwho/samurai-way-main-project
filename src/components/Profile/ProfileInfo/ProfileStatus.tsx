import React, {ChangeEvent} from 'react';

type StatusType = {
    status: string
    updateStatus: (status: string) => void
}

class ProfileStatus extends React.Component<StatusType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }

    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<StatusType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.state.status) {
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode && <div>
                    <span
                        onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status || 'no status, click for insert'}</span>
                </div>}
                {this.state.editMode && <div>
                    <input onChange={this.onStatusChange}
                           autoFocus={true}
                           value={this.state.status}
                           onBlur={this.deActivateEditMode}/>
                </div>}
            </div>
        );
    }
}

export default ProfileStatus;