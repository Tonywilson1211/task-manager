document.addEventListener('DOMContentLoaded', function () {
    // sidenav initialisation
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);
});

document.addEventListener('DOMContentLoaded', function () {
    // modal initialisation
    let modal = document.querySelectorAll('.modal');
    M.Modal.init(modal);
});

// Or with jQuery

// $(document).ready(function () {
//     $('.sidenav').sidenav();
// });

