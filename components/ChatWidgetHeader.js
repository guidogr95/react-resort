import { MdClear } from "react-icons/md";

export default function ChatWidgetHeader(props) {
    return (
        <div className="widget-header">
            <MdClear className="widget-header-clear" onClick={props.toggleModal} />
            <div className="widget-header-text" >
                <h4>My chat</h4>
                <h5>Welcome!</h5>
            </div>
        </div>
    )
}
