import React from 'react';
import aframe from 'aframe';

export default function Scene(props) {
    const { children, ...rest } = props;
    return <a-scene { ...rest }>{ children }</a-scene>
}