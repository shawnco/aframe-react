import React from 'react';

export default function Sphere(props) {
    const { children, ...rest } = props;
    return <a-sphere {...rest}>{children}</a-sphere>
}