import React, { Component } from 'react';
import { Camera } from './../aframe';

class AdjustableCamera extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: '0 1 0'
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                position: `${5*Math.random()} ${5*Math.random()} ${5*Math.random()}`
            })
        }, 2000)
    }

    render() {
        return <Camera position={ this.state.position } />
    }

}

export default AdjustableCamera;