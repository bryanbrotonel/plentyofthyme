(function() {
    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
        window.location.href = 'login.html';
    });
}());
