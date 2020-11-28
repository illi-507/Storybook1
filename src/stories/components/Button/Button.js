import React from 'react';
import './Button.css';
import { Avatar, AvatarBadge } from "@chakra-ui/react";


function Button(props) {
    const {variant = 'primary',children, ...rest} = props;
    return (
            
        <button className={`button ${variant}`} {...rest}>
            {children}
        </button>
    )
}

export default Button;
