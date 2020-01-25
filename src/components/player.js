import React, {Component} from 'react';
import {Camera} from '../aframe';
import aframe from 'aframe';
import aframeCameraEvents from 'aframe-camera-events';

export default function Player(props) {
    return <Camera id='player-camera' position-listener />
};