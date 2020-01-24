import React from 'react';

export default function Environment(props) {
    const { children, ...rest } = props;
    const attrs = Object.keys(rest).map(key => `${key}: ${rest[key]}`).join('; ');
    console.log('attrs',attrs)
    return <a-entity environment={ attrs }>{ children }</a-entity>
}