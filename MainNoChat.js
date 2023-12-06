var isOpen = true;

window.addEventListener('resize', function(event) {
    w = window.innerWidth
    h = window.innerHeight
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
    if(window.location.search == ""){
        return "?twitch=sliggytv"
    }
    else{
        return window.location.search
    }
};

window.addEventListener("load", (event) => {
    w = window.innerWidth
    h = window.innerHeight
    document.getElementById("Afreeca").width = w
    document.getElementById("Afreeca").height = h

    url = getCurrentURL()
    console.log(url)

    iframe1 = document.createElement("iframe");
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

function ChangePage(){
    if(document.getElementById("twitchchannel").value == ""){
        channel = url
    } else{
        channel = document.getElementById("twitchchannel").value
    }

    if (document.getElementById('ChatCheck').checked) {
        window.location.assign("https://escaleirex.github.io/AVL-Watch-Party-Tool/Chat.html?twitch=" + channel);
    } else {
        document.getElementById('Twitch').remove()
        iframe1 = document.createElement("iframe");
        iframe1.frameBorder = "0"
        iframe1.allowFullscreen = "false"
        iframe1.scrolling = "no"
        iframe1.height = "1080"
        iframe1.width = "1920"
        iframe1.id = "Twitch"
        iframe1.src = "https://player.twitch.tv/?channel=" + channel + "&parent=escaleirex.github.io"
        document.body.appendChild(iframe1);
    }
}

function Menu(){
    if (isOpen == true) {
        isOpen = false
        document.getElementById('twitchlabel').style.display = "none"
        document.getElementById('twitchchannel').style.display = "none"
        document.getElementById('chatlabel').style.display = "none"
        document.getElementById('ChatCheck').style.display = "none"
        document.getElementById('Confirm').style.display = "none"
    } else if(isOpen == false){
        isOpen = true
        document.getElementById('twitchlabel').style.display = "inline-block"
        document.getElementById('twitchchannel').style.display = "inline-block"
        document.getElementById('chatlabel').style.display = "inline-block"
        document.getElementById('ChatCheck').style.display = "inline-block"
        document.getElementById('Confirm').style.display = "inline-block"
    }
}

//wtf