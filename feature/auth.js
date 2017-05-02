firebase.initializeApp(config);
// Get elements
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
const btnLogout = document.getElementById('btnLogout');

// login
btnLogin.addEventListener('click', e=> {
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();

  const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));
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

// log out
btnLogout.addEventListener('click', e => {
  firebase.auth().signOut();
});

// add a realtime user
firebase.auth().onAuthStateChanged(firebaseUser => {
  if(firebaseUser) {
    console.log(firebaseUser);
    btnLogout.classList.remove('hide');
  } else {
    console.log('not logged in');
    btnLogout.classList.add('hide');
  }
});
