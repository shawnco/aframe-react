import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
    AFrame,
    Box,
    Environment,
    Scene,
    Sky
} from './aframe';
import AdjustableCamera from './components/adjustable_camera';

function App() {
  return (
    <div className="App" style={{height: 500, width:500}}>
        <AFrame>
            <Scene>
                <AdjustableCamera />
                <Sky color='#0000FF'>
                    <Environment preset='forest' dressingAmount='500'>
                        <Box
                            color='red'
                            position='0 2 -5'
                            rotation='0 45 45'
                            scale='2 2 2'
                        />
                    </Environment>
                </Sky>
            </Scene>
        </AFrame>
    </div>
  );
}

export default App;
