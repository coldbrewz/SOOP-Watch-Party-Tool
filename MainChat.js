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

    document.getAnimations(link, function(response){
        var html = response
        var html_src = 'data:text/html;charset=utf-8,' + html
        document("#Twitch").attr("src", html_src)
    })

    document.getElementById("Twitch").src = "https://player.twitch.tv/?channel=" + url.substring(8) + "&parent=escaleirex.github.io"
    document.getElementById("ChatEmbed").src = "https://www.twitch.tv/embed/" + url.substring(8) + "/chat?darkpopout&parent=escaleirex.github.io"
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

