window.fbAsyncInit = function() {
  FB.init({
    appId      : '1839020849753162',
    cookie     : true,
    xfbml      : true,
    version    : 'v2.8'
  });
  FB.AppEvents.logPageView();
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

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

    // login
    btnLogin.addEventListener('click', e => {
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();

      if (email != "" && pass != "") {
        Materialize.toast('Log in successful!', 4000);
        const promise = auth.signInWithEmailAndPassword(email, pass);
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


    btnSignUp.addEventListener('click', e=> {
        window.location.href='signup.html';
    })
    // add a realtime user
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log(firebaseUser);
            window.location.href = 'landing.html';
        } else {
            console.log('not logged in');
        }
    });
}());
