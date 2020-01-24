import React, { Fragment } from 'react';
import aframe from 'aframe';

/**
 * I think that by simply specifying the import in this file, it will become accessible to all child components. If that is the 
 * case, then this wrapper makes references in the child components redundant.
 */

export default function AFrame(props) {
    const { children, ...rest } = props;
    return <Fragment>{ children }</Fragment>
}