import React from "react";
import './Toast.css';
interface ToastComponentProps { 
    message: String;
}
const ToastComponent = (props:ToastComponentProps) => {
    return(
        <div className= {`toast-container ${props.state}`}>
            <p className="toast-message">{props.message}</p>
        </div>
    );
}

export default ToastComponent;