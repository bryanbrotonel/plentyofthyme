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
      window.location.href='index.html';
    });

    // create account
    btnSignUp.addEventListener('click', e => {
        // check for real email validation
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        if (email == "") {
          Materialize.toast('Please enter your email.', 4000);
          return;
        }
        if (pass == "") {
          Materialize.toast('Please enter your password', 4000);
          return;
        }

        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => Materialize.toast(e.message, 4000));
        promise.catch(e => console.log(e.message));
        document.getElementById('Password').value = "";

    });

    firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser) {
        Materialize.toast("Account successfully created!", 4000);
        setTimeout(function(){window.location.href='landing.html'; }, 500);
        console.log(firebaseUser);
      } else {
        console.log('not logged in');
      }
    })
}());
