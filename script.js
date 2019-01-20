var openMenuClick = 0;

function openMenuIconFunc() {
    if (openMenuClick == 0) {
        document.getElementById("menu-open-btn").className = "fa fa-times fa-2x menu-exit-btn";
        openMenuClick = 1;
    }   else if (openMenuClick == 1) {
        document.getElementById("menu-open-btn").className = "fa fa-bars fa-2x menu-open-btn";
        openMenuClick = 0;
    }
}

function openMenu() {
    document.getElementById("sidebar").classList.toggle("active");
}

