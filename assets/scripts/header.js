// Very simple script: https://www.w3schools.com/howto/howto_js_responsive_navbar_dropdown.asp

function onClickHeader()
{
    var element = document.getElementById("dropdown");

    if (element.className === "web-border-color")
    {
        element.className += " responsive";
    }
    else
    {
        element.className = "web-border-color"
    }
}