import React from 'react';
import { Toast } from 'react-bootstrap';

class ToastMessage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Toast show={this.props.show} onClose={this.props.hideToast}>
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                    <strong className="me-auto">Error!</strong>
                </Toast.Header>
                <Toast.Body>{this.props.message}</Toast.Body>
            </Toast>
        )
    }
}

export default ToastMessage;