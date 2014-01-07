/* Create a consistent menu dynamically on each page */
window.onload = init;

function init() {
    drawMenu();
}

/* main function to create the menu */
function drawMenu() {
    
    var nav = document.getElementById("menu");
    var ul = document.createElement("ul");
    
    var menuItems = Array("Home", "Poll", "About");
    var menuLinks = Array("objective1.html", "poll.html", "about.html");
    
    for (var i = 0; i < 3; i++) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = menuLinks[i];
        a.innerHTML = menuItems[i];
        li.appendChild(a);
        ul.appendChild(li);
    }
    nav.appendChild(ul);
}