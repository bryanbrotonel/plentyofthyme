
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

    // Get elements
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');
    const logininbutton = document.getElementById('loginbutton');
    const signupbutton = document.getElementById('signupbutton');

    // login
    btnLogin.addEventListener('click', e => {
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();

      if (email != "" && pass != "") {
        Materialize.toast('Log in successful!', 4000);
        const promise = auth.signInWithEmailAndPassword(email, pass);
        txtEmail.value = "";
        txtPassword.value = "";
        promise.catch(e => console.log(e.message));
      } else {
        Materialize.toast('Please fill all required fields!', 4000)
      }
    });

    // create account
    btnSignUp.addEventListener('click', e => {
        // check for real email validation
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();

        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    });

    // add event listener
    btnSignUp.addEventListener('click', e=> {
        window.location.href='signup.html';
    })
    // add a realtime user
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log(firebaseUser);
            btnLogout1.setAttribute('class', 'center waves-effect waves-light');
            btnLogout.setAttribute('class', 'center waves-effect waves-light');
            loginbutton.setAttribute('class', 'hidden');
            signupbutton.setAttribute('class', 'hidden');

            // window.location.href = 'landing.html';
        } else {
            console.log('not logged in');
        }
    });

    // get elements
    const btnLogout = document.getElementById('btnLogout');
    const btnLogout1 = document.getElementById('btnLogout1');

    // add event listeners
    btnLogout1.addEventListener('click', e => {
        firebase.auth().signOut();
        Materialize.toast('Successfully logged out!', 4000);
        btnLogout1.setAttribute('class', 'center waves-effect waves-light hidden');
        loginbutton.setAttribute('class', 'btn btn-action waves-effect waves-light white-text');
        signupbutton.setAttribute('class', 'btn btn-action waves-effect waves-light white-text');
    });

    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
        Materialize.toast('Successfully logged out!', 4000);
        btnLogout.setAttribute('class', ' waves-effect waves-light hidden');
        loginbutton.setAttribute('class', 'btn btn-action waves-effect waves-light white-text');
        signupbutton.setAttribute('class', 'btn btn-action waves-effect waves-light white-text');


    });
}());
