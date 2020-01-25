import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
    AFrame,
    Box,
    Camera,
    Environment,
    Scene,
    Sky
} from './aframe';
import {
    Player
} from './components';
import io from 'socket.io-client';

function App() {
  const socket = io.connect('http://localhost:9001');
  socket.on('notify_all', data => console.log('Everyone was notified of', data));
  
  return (
    <div className="App" style={{height: 500, width:500}}>
        <button onClick={() => socket.emit('click_button')}>Hit Server</button>
        <button onClick={() => socket.emit('notify_all', Math.random())}>Notify Everyone</button>
        <AFrame>
            <Scene embedded>
                <Player />
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
