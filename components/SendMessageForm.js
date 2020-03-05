import { Component } from 'react'
import { MdSend } from "react-icons/md";


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
            <div className="user-send-form">
                <form onSubmit={this.onSubmit} autoComplete="off">
                    <input name="text" type="text" placeholder="Your text..." onChange={this.handleChange} value={this.state.text}/>
                    <div>
                        <button type="submit"><MdSend/></button>
                    </div>
                </form>
            </div>
        )
    }
}
