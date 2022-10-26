import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/style.css';
import React from "react";

const Button = (props) => (
    <button className={'btn btn-art px-5 ' + props.layout} type={props.type} onClick={props.handleClick}>
        {props.title}
    </button>
);

export default Button;