import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AddUser extends Component {
    state = {
        user: {
            firstName: '',
            lastName: '', 
            username: ''
        },
        userExists: false
    }

    userIsExist = currUsername => {
        for(let user of this.props.users){
            if(user.username === currUsername){
                return true
            }
        }
        return false
    }

    handleSubmit = event => {
        event.preventDefault()
        const userExists = this.userIsExist(this.state.user.username)

        if(!userExists){
            this.props.createUser(this.state.user)
        }

        this.setState(() => ({
            userExists
        }))
    }

    handleInputChange = event => { 
        const { name, value } = event.target
        this.setState(item  => ({
            ...item,
            user: {
                ...item.user,
                [name]: value
            }
        }))
    }

    isDisabled = () => {
        const { lastName, firstName, username } = this.state.user
        return lastName === '' || firstName === '' || username === ''
    }
    render() {
        const { firstName, lastName, username } = this.state.user
        return (
            <div>
            <h1>New User</h1>
            <form onSubmit={this.handleSubmit}>
            <div>
            <input 
              type="text"
              name="firstName"
              placeholder="Enter First Name"
              value={firstName}
              onChange= {this.handleInputChange}
            />
            <input
                type="text"
                name="lastName"
                placeholder="Enter Last Name"
                value={lastName}
                onChange={this.handleInputChange}
            />
            <input 
                type="text"
                name="username"
                placeholder="Enter username"
                value={username}
                onChange={this.handleInputChange}
            />
            </div>
            <button disabled={this.isDisabled()}>Submit</button>
            </form>
            {this.state.userExists ? (
                <p className="error">This username already Exists</p>
            ) : (
                ''
            )}
            </div>
        )
    }
}

AddUser.propTypes = {
    users: PropTypes.array.isRequired,
    createUser: PropTypes.func.isRequired
}

export default AddUser