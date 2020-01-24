import React from 'react';
import aframe from 'aframe';

export default function Box(props) {
    const { children, ...rest } = props;
    return <a-box { ...rest }> { children }</a-box>
}