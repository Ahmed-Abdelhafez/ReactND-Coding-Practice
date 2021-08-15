import React, { Component } from 'react';
import SendMessage from './SendMessage';
import MessagesData from './MessagesData';
import PropTypes from 'prop-types';


class Chat extends Component {
  onMessage = message => {
    
    this.props.onMessage(this.props.user.username, message);
  };

  render() {
    const { messages, user } = this.props;

    return (
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{user.username}</div>
        <MessagesData messages={messages} user={user} />
        <SendMessage onMessage={this.onMessage} />
      </div>
    );
  }
}

Chat.propTypes = {
  onMessage: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,
};

export default Chat;
