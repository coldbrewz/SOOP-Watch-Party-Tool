window.addEventListener('resize', function(event) {
    var w = window.innerWidth
    var h = window.innerHeight
    document.getElementById("Afreeca").width = w
    document.getElementById("Afreeca").height = h
    if((window.fullScreen) || (window.innerWidth == screen.width && window.innerHeight == screen.height)) {
        document.getElementById("Twitch").style.height = "20%";
        document.getElementById("Twitch").style.left = "55%";
        document.getElementById("Twitch").style.top = "30%";
    } 
    else {
        document.getElementById("Twitch").style.height = "22.4%";
        document.getElementById("Twitch").style.left = "55%";
        document.getElementById("Twitch").style.top = "27.5%";
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

    //should work

    const iframe1 = document.createElement("iframe");
    iframe1.frameBorder = "0"
    iframe1.allowFullscreen = "false"
    iframe1.scrolling = "no"
    iframe1.height = "1080"
    iframe1.width = "1920"
    iframe1.id = "Twitch"
    iframe1.src = "https://player.twitch.tv/?channel=" + url.substring(8) + "&parent=escaleirex.github.io"
    document.body.appendChild(iframe1);

    const iframe2 = document.createElement("iframe");
    iframe2.height = "1080"
    iframe2.width = "1920"
    iframe2.id = "ChatEmbed"
    iframe2.src = "https://www.twitch.tv/embed/" + url.substring(8) + "/chat?darkpopout&parent=escaleirex.github.io"
    document.body.appendChild(iframe2);

    if((window.fullScreen) || (window.innerWidth == screen.width && window.innerHeight == screen.height)) {
        document.getElementById("Twitch").style.height = "20%";
        document.getElementById("Twitch").style.left = "55%";
        document.getElementById("Twitch").style.top = "30%";
    } 
    else {
        document.getElementById("Twitch").style.height = "22.4%";
        document.getElementById("Twitch").style.left = "55%";
        document.getElementById("Twitch").style.top = "27.5%";
    }
});

