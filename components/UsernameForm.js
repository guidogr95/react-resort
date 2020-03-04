import React, { Component } from 'react'

export default class UsernameForm extends Component {
    constructor(props) {
        super(props)
        this.state= {
            username: ''
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.username);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input name="username" type="text" placeholder="Username" onChange={this.handleChange} value={this.state.username}/>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        )
    }
}
