window.addEventListener('resize', function(event) {
    var w = window.innerWidth
    var h = window.innerHeight
    document.getElementById("Afreeca").width = w
    document.getElementById("Afreeca").height = h
    if((window.fullScreen) || (window.innerWidth == screen.width && window.innerHeight == screen.height)) {
        document.getElementById("Twitch").style.height = "25%";
        document.getElementById("Twitch").style.left = "75%";
    } 
    else {
        document.getElementById("Twitch").style.height = "27.9%";
        document.getElementById("Twitch").style.left = "69.75%";
    }
}, true);

function getCurrentURL () {
    return window.location.search
};

window.addEventListener("load", (event) => {
    var w = window.innerWidth
    var h = window.innerHeight
    document.getElementById("Afreeca").width = w
    document.getElementById("Afreeca").height = h

    const url = getCurrentURL()
    console.log(url)

    const iframe1 = document.createElement("iframe");
    iframe1.frameBorder = "0"
    iframe1.allowFullscreen = "false"
    iframe1.scrolling = "no"
    iframe1.height = "1080"
    iframe1.width = "1920"
    iframe1.id = "Twitch"
    iframe1.src = "https://player.twitch.tv/?channel=" + url.substring(8) + "&parent=escaleirex.github.io"
    document.body.appendChild(iframe1);

    if((window.fullScreen) || (window.innerWidth == screen.width && window.innerHeight == screen.height)) {
        document.getElementById("Twitch").style.height = "25%";
        document.getElementById("Twitch").style.left = "75%";
    } 
    else {
        document.getElementById("Twitch").style.height = "27.9%";
        document.getElementById("Twitch").style.left = "69.75%";
    }
});

