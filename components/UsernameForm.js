import { Component } from 'react'
import loading from '../images/gif/loading-arrow.gif'

export default class UsernameForm extends Component {
    constructor(props) {
        super(props)
        this.state= {
            username: '',
            loading: false
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.setState({loading: true})
        this.props.onSubmit(this.state.username);
    }

    render() {
        return (
            <>
                <form onSubmit={this.onSubmit} className="username-form" autoComplete="off">
                    <label htmlFor="username">Introduce tu nombre para empezar una conversación con nuestro agente</label>
                    <input name="username" type="text" placeholder="Nombre" onChange={this.handleChange} value={this.state.username}/>
                    <button disabled={this.state.loading} className={this.state.loading ? "btn-primary disabled chat" : "btn-primary chat" } type="submit">{
                        this.state.loading ?
                        <img className="loading-login" src={loading} alt="loading spinner"/>:
                        "Enviar"
                    }</button>
                </form>
            </>
        )
    }
}
