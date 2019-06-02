import React from 'react';
import * as firebase from 'firebase';

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

  class App extends React.Component {
    render() {
      return (
        <div>
          Hi
        </div>
      )
    }
  }

export default App;