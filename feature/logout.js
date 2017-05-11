(function() {
  const btnLogout = document.getElementById('btnLogout');

    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
        Materialize.toast('Successfully logged out!', 4000);
    });
}());
