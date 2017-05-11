(function() {
  const btnLogout = document.getElementById('btnLogout');
  const btnLogout1 = document.getElementById('btnLogout1');

  btnLogout1.addEventListener('click', e => {
      firebase.auth().signOut();
      Materialize.toast('Successfully logged out!', 4000);
  });

  btnLogout.addEventListener('click', e => {
      firebase.auth().signOut();
      Materialize.toast('Successfully logged out!', 4000);
  });
}());
