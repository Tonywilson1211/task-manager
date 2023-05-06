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

document.addEventListener('DOMContentLoaded', function () {
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
        format: "dd mmmm, yyyy",
        i18n: { done: "Select" }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);
});

document.addEventListener('DOMContentLoaded', function () {
    let collapsibles = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsibles);
});

// Or with jQuery

// $(document).ready(function () {
//     $('.sidenav').sidenav();
// });