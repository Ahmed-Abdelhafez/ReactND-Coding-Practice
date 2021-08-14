import React, { Component } from 'react'
import PropTypes from 'prop-types'

class UserList extends Component {
    state = {
        showGamesPlayed: true,
    };

    toggleGamesPlayed = () => {
        this.setState(prevState => ({
            showGamesPlayed: !prevState.showGamesPlayed
        }))
    }

    render() {
        const { users } = this.props

        const gamesPlayedButton = (
            <div>
              <button className="smallButton" onClick={this.toggleGamesPlayed}>
                {this.state.showGamesPlayed ? 'Hide ' : 'Show '}
                the Number of Games Played
              </button>
            </div>
          );
      
        return(
            <div>
                <h1>Users</h1>
                {users && users.length > 0 ?  gamesPlayedButton: ''}
                <ol>
                {users.map(user => (
                    <li>
                    <p>Username: {user.username}</p>
                    <p>Number of Games Played: {this.state.showGamesPlayed ? user.numOfGames : '*'} </p>
                    </li>
                ))}
                </ol>
            </div>
        )
    }
}

UserList.propTypes = {
    users: PropTypes.array.isRequired
}

export default UserList