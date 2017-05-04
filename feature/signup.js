(function() {
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

    const txtEmail = document.getElementById('Email');
    const txtPassword = document.getElementById('Password');
    const btnCancel = document.getElementById('btnCancel');
    const btnSignUp = document.getElementById('btnSignUp');

    btnCancel.addEventListener('click', e => {
      window.location.href='login.html';
    });

    // create account
    btnSignUp.addEventListener('click', e => {
        // check for real email validation
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();

        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => window.alert(e.message));
        promise.catch(e => console.log(e.message));
        document.getElementById('Email').value = "";
        document.getElementById('Password').value = "";

    });

    firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser) {
        window.alert("Account successfully created!");
        window.location.href="landing.html";
        console.log(firebaseUser);
      } else {
        console.log('not logged in');
      }
    })
}());
