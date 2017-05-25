(function() {

  // Get elements
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const logininbutton = document.getElementById('loginbutton');
  const signupbutton = document.getElementById('signupbutton');
  const btnGrocery_mobile = document.getElementById('btnGrocery_mobile');
  const btnGrocery_main = document.getElementById('btnGrocery_main');

  // login
  btnLogin.addEventListener('click', e => {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    if (email != "" && pass != "") {
      Materialize.toast('Log in successful!', 4000);
      $('.modal').modal();
      $('#modalnotif').modal('open');
      const promise = auth.signInWithEmailAndPassword(email, pass);
      txtEmail.value = "";
      txtPassword.value = "";
      promise.catch(e => console.log(e.message));
    } else {
      Materialize.toast('Please fill all required fields!', 4000)
    }
  });

  // add a realtime user
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      btnLogout1.setAttribute('class', 'center waves-effect waves-light');
      btnLogout.setAttribute('class', 'center waves-effect waves-light btn white-text');
      loginbutton.setAttribute('class', 'hidden');
      signupbutton.setAttribute('class', 'hidden');
      // btnGrocery_mobile.setAttribute('class', 'center white-text waves-effect waves-light');
      // btnGrocery_main.setAttribute('class', 'dropdown-button white-text');
      // btnGrocery_main.setAttribute('data-activates', 'dropdown1');

    } else {
      console.log('not logged in');
      // Materialize.toast('Successfully logged out!', 4000);
      btnLogout.setAttribute('class', 'hidden');
      btnLogout1.setAttribute('class', 'hidden');
      loginbutton.setAttribute('class', 'btn btn-action waves-effect waves-light white-text');
      signupbutton.setAttribute('class', 'btn btn-action waves-effect waves-light white-text');
      // btnGrocery_mobile.setAttribute('class', 'hidden');
      // btnGrocery_main.setAttribute('class', 'hidden');

    }
  });

  // get elements
  const btnLogout = document.getElementById('btnLogout');
  const btnLogout1 = document.getElementById('btnLogout1');

  // add event listeners
  btnLogout1.addEventListener('click', e => {
    firebase.auth().signOut();

  });

  btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
  });

  signupbutton.addEventListener('click', e => {
    window.location.href = 'signup.html';
  });
}());
