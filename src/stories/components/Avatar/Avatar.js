/*
 152px*152       159 * 159   78 *78   
*/
import { Wrap,WrapItem,Avatar } from "@chakra-ui/react";
import React from 'react';
import './Avatar.css';

function AvatarPacked(props) {
    const {variant = 'small',children, ...rest} = props;
    return (       
        
        <Avatar className={`${variant}`} {...rest}>
        {children}
         </Avatar>
    )
}

export default AvatarPacked;
