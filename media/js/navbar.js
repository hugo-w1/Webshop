document.getElementById('hamburger').addEventListener('click', () => {
    let x = document.getElementById("topNav_");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
});