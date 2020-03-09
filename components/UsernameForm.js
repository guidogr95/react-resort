import { Component } from 'react'

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
            <>
                <form onSubmit={this.onSubmit} className="username-form" autoComplete="off">
                    <label htmlFor="username">Enter your name to start chat with an agent</label>
                    <input name="username" type="text" placeholder="Nombre" onChange={this.handleChange} value={this.state.username}/>
                    <button className="btn-primary" type="submit">Enviar</button>
                </form>
            </>
        )
    }
}
