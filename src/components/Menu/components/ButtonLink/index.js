import React from 'react';
import './ButtonLink.css';

const ButtonLink = (props) => {

    return (
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    );

}

export default ButtonLink;