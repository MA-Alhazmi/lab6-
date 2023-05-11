const initLikes = 100;
const initDislikes = 20;

let upCount = initLikes;
let downCount = initDislikes;

let likesBtn = document.getElementById("likeBtn");
let dislikesBtn = document.getElementById("dislikeBtn");

likesBtn.innerText += "👍" + initLikes;
dislikesBtn.innerText += "👎" + initDislikes;

var isLiked = false;

window.onload = function () {
    if (document.cookie && document.cookie.indexOf("voted") > -1) {
        if (getIsLiked) {
            doLike();
        } else {
            doDislike();
        }
    }
}


function doLike() {
    upCount++;

    likesBtn.innerText = "👍" + upCount;
    isLiked = true;
    disableButtons();
    setCookies();
    console.log("you liked this")
}


function doDislike() {
    downCount++;
    dislikesBtn.innerText = "👎" + downCount;
    isLiked = false;
    disableButtons();
    setCookies();
    console.log("you disliked this")
}

function disableButtons() {
    likesBtn.disabled = true;
    dislikesBtn.disabled = true;
}


function getIsLiked() {
    return isLiked;
}


function setCookies() {
    document.cookie = "voted-true; SameSite=strict; Max-Age=" + 60;
}

