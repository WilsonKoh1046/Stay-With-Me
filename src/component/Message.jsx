import React, { Component } from 'react';
import '../style/message.css';

class Message extends Component {
    render() {
        return (
            <div className="message">
                <p className="message-name">{this.props.person.name}</p>
                <p className="message-content">{this.props.person.message}</p>
                <p className="message-date">{this.props.person.date}</p>
            </div>
        );
    }
}

export default Message;