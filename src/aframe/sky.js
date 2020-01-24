import React from 'react';

export default function Sky(props) {
    const { children, ...rest } = props;
    return <a-sky {...rest}>{ children }</a-sky>
}