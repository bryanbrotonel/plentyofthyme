// Initialize Firebase
var config = {
  apiKey: "AIzaSyBWQ0DKA_LDHLrsNEUkFRxh8Dr9rKKnTVA",
  authDomain: "plentyofthyme-c301a.firebaseapp.com",
  databaseURL: "https://plentyofthyme-c301a.firebaseio.com",
  projectId: "plentyofthyme-c301a",
  storageBucket: "plentyofthyme-c301a.appspot.com",
  messagingSenderId: "1087388674603"
};

firebase.initializeApp(config);

// authentication, redirect to index.html on log out
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
  } else {
    setTimeout(function() {
      window.location.href = 'index.html';
    }, 500);
  }
});
