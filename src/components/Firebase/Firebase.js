
import app from 'firebase/app';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA-R4hw8esRFpF_wfpAi8cF4OKHw1Ko4uo",
    authDomain: "start-f973c.firebaseapp.com",
    databaseURL: "https://start-f973c.firebaseio.com",
    projectId: "start-f973c",
    storageBucket: "start-f973c.appspot.com",
    messagingSenderId: "195396264963"
  };
  class Firebase{
      constructor(){
        app.initializeApp(config);
      }
  }
  export default Firebase;
