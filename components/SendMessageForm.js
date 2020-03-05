import { Component } from 'react'

export default class SendMessageForm extends Component {
    constructor(props) {
        super(props)
        this.state= {
            text: ''
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        // this.props.onChange();
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.text);
        this.setState({text: ''})
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input name="text" type="text" placeholder="Your text..." onChange={this.handleChange} value={this.state.text}/>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        )
    }
}
