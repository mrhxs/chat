import React, { Component } from 'react';
import * as firebase from 'firebase';
import RoomList from './RoomList';
import MessageList from './MessageList';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBSP6J509Gaj_fzMG3oBfBtOy1MBuOmdA4",
    authDomain: "bloc-chat-d1bea.firebaseapp.com",
    databaseURL: "https://bloc-chat-d1bea.firebaseio.com",
    projectId: "bloc-chat-d1bea",
    storageBucket: "bloc-chat-d1bea.appspot.com",
    messagingSenderId: "298596055510",
    appId: "1:298596055510:web:10fa2d316c92978c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        activeRoom: "",
      };
      this.setActiveRoom = this.setActiveRoom.bind(this);
    }
  
    setActiveRoom(room) {
      this.setState({ activeRoom: room });
    }
  
      render() {
        let showMessages = this.state.activeRoom;
  
        return (
          <div className="App">
  
         <header className="App-header">
           <h1 className="App-title">Welcome to Bloc Chat</h1>
         </header>
            <h2>{this.state.activeRoom.name || "Choose a room or Create one"}</h2>
            <RoomList firebase={firebase} setActiveRoom={this.setActiveRoom} />
            { showMessages ?
              <MessageList firebase={firebase} activeRoom={this.state.activeRoom.key} />
            : null
            }
          </div>
        );
      }
    }
  export default App;