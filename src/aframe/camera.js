import React from 'react';

export default function Camera(props) {
    const { children, ...rest } = props;
    return <a-camera { ...rest }>{ children }</a-camera>
}