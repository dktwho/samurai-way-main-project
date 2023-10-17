import React from 'react';

type StatusType = {
    status: string
}

class ProfileStatus extends React.Component<StatusType> {
    state = {
        editMode: false
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
    }

    render() {
        return (
            <div>
                {!this.state.editMode && <div>
                    <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                </div>}
                {this.state.editMode && <div>
                    <input autoFocus={true} value={this.props.status} onBlur={this.deActivateEditMode}/>
                </div>}

            </div>

        );
    }
};

export default ProfileStatus;