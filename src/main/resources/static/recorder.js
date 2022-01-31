var lastDownTime = -1;
var lastUpTime = -1;

const upTimes = [];
const downTimes = [];
const clickDelays = [];

let testInProgress = false;
let testStartedAt = +new Date();

document.getElementById("recorderButton").addEventListener("mousedown", function (event) {
    if (event.button === 0) {
        mouseDown();
    }
});
document.getElementById("recorderButton").addEventListener("mouseup", function (event) {
    if (event.button === 0) {
        mouseUp();
    }
});
document.getElementById("copyButton").addEventListener("click", exportData);
window.addEventListener("contextmenu", e => e.preventDefault());

function mouseDown() {
    const currentTimeMilliseconds = +new Date();
    if (testInProgress) {
        recordDown(currentTimeMilliseconds)
    } else {
        recordDown(currentTimeMilliseconds);
        testInProgress = true;
        onStart();
        // button.data = "Click Here";

        // this must be done because changing the text removes the ripple effect
        // button.classList.add("mdl-js-ripple-effect");

        setTimeout(function () {
            testInProgress = false;
            document.getElementById("copyButton").disabled = false;
            document.getElementById("recorderButton").disabled = true;
        }, 10000);
    }
}

function onStart() {
    var line = new ProgressBar.Line('#progress', {
        color: '#066cd3',
        duration: 10000,
        easing: 'easeInOut',
        strokeWidth: 3
    });
    line.animate(1);
}

function recordDown(number) {
    if (this.lastDownTime === -1) {
        this.lastDownTime = number;
    } else if (this.lastUpTime !== -1) {
        downTimes.push(number - lastUpTime);
        clickDelays.push(number - lastDownTime);
        this.lastDownTime = number;
    }
}

function mouseUp() {
    const currentTimeMilliseconds = +new Date();
    if (this.lastUpTime === -1) {
        this.lastUpTime = currentTimeMilliseconds;
    } else if (this.lastDownTime !== -1) {
        upTimes.push(currentTimeMilliseconds - lastDownTime);
        this.lastUpTime = currentTimeMilliseconds;
    }
}

function exportData() {
    let xhr = new XMLHttpRequest();
    let url = "https://cpsapi.lemin.us/results/";
    let identifier = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 12);

    xhr.open("POST", url + identifier, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.withCredentials = true;
    console.log(xhr.getAllResponseHeaders());

    var data = JSON.stringify({
        "identifier": identifier.valueOf(),
        "upTimes": upTimes.valueOf(),
        "downTimes": downTimes.valueOf(),
        "clickDelays": clickDelays.valueOf()
    });
    let output = "";
    for (let upTime of upTimes) {
        output += upTime + ",";
    }
    output += "\n";
    for (let downTime of downTimes) {
        output += downTime + ",";
    }
    output += "\n";
    for (let clickTime of clickDelays) {
        output += clickTime + ",";
    }
    xhr.send(data);

    const copyText = document.getElementById("identifierTextBox");
    console.log(copyText.value + " " + copyText.innerText + " " + copyText.innerHTML)
    copyText.value = identifier

    /* Select the text field */
    copyText.focus();
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    alert("Your identifier is  \"" + copyText.value + "\". It has been copied to your clipboard, please paste it in your appeal.");

    document.getElementById("copyButton").disabled = true;
    copyText.disabled = true;
    copyText.visible = false;
    copyText.value = "";
}
