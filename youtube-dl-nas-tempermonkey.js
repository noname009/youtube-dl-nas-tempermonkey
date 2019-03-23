// JavaScript File// ==UserScript==
// @name        Youtube-dl Video
// @namespace   youtubedl
// @version     1
// @date        2019-03-23
// @description youtube add youtube dl
// @author      noname
// @compatible chrome
// @match          *://*.youtube.com/*
// ==/UserScript==

(function() {
    'use strict';

    if (document.getElementById("polymer-app") || document.getElementById("masthead") || window.Polymer) {
    setInterval(function() {
        if (window.location.href.indexOf("watch?v=") < 0) {
            return false;
        }
        if (document.getElementById("meta") && document.getElementById("youtubedl1") === null) {
            Addytpolymer1();
        }
        if (document.getElementById("meta") && document.getElementById("youtubedl2") === null) {
            Addytpolymer2();
        }
        if (document.getElementById("meta") && document.getElementById("youtubedl3") === null) {
            Addytpolymer3();
        }
        if (document.getElementById("meta") && document.getElementById("youtubedl4") === null) {
            Addytpolymer4();
        }
    }, 100);
} else {
    setInterval(function() {
        if (window.location.href.indexOf("watch?v=") < 0) {
            return false;
        }
        if (document.getElementById("watch7-subscription-container") && document.getElementById("youtubedl1") === null) {
            Addytpolymer1();
        }
        if (document.getElementById("watch7-subscription-container") && document.getElementById("youtubedl2") === null) {
            Addytpolymer2();
        }
        if (document.getElementById("watch7-subscription-container") && document.getElementById("youtubedl3") === null) {
            Addytpolymer3();
        }
        if (document.getElementById("watch7-subscription-container") && document.getElementById("youtubedl4") === null) {
            Addytpolymer4();
        }
    }, 100);
}

function Addytpolymer1() {
    var buttonDiv = document.createElement("span");
    var buttonDiv2 = document.createElement("span");
    buttonDiv.style.width = "50%";
    buttonDiv.id = "youtubedl1";
    var addButton = document.createElement("a");
    addButton.appendChild(document.createTextNode("Best Video"));
    addButton.style.width = "50%";
    addButton.style.backgroundColor = "#EE431E";
    addButton.style.color = "white";
    addButton.style.textAlign = "center";
    addButton.style.padding = "7px 7px";
    addButton.style.margin = "0px 2px";
    addButton.style.fontSize = "15px";
    addButton.style.border = "0";
    addButton.style.cursor = "pointer";
    addButton.style.borderRadius = "10px";
    addButton.style.fontFamily = "Roboto, Arial, sans-serif";
    addButton.style.textDecoration = "none";
    addButton.href = '';
    addButton.target = "_blank";
    buttonDiv.appendChild(addButton);
    var targetElement = document.querySelectorAll("[id='meta']");
    for (var i = 0; i < targetElement.length; i++) {
        if (targetElement[i].className.indexOf("ytd-watch-flexy") > -1) {
            targetElement[i].appendChild(buttonDiv);
}}}

    function Addytpolymer2() {
    var buttonDiv2 = document.createElement("span");
    buttonDiv2.style.width = "50%";
    buttonDiv2.id = "youtubedl2";
    var addButton2 = document.createElement("a");
    addButton2.appendChild(document.createTextNode("2160p"));
    addButton2.style.width = "50%";
    addButton2.style.backgroundColor = "#EE431E";
    addButton2.style.color = "white";
    addButton2.style.textAlign = "center";
    addButton2.style.padding = "7px 7px";
    addButton2.style.margin = "0px 2px";
    addButton2.style.fontSize = "15px";
    addButton2.style.border = "0";
    addButton2.style.cursor = "pointer";
    addButton2.style.borderRadius = "10px";
    addButton2.style.fontFamily = "Roboto, Arial, sans-serif";
    addButton2.style.textDecoration = "none";
    addButton2.href = '';
    addButton2.target = "_blank";
    buttonDiv2.appendChild(addButton2);
    var targetElement = document.querySelectorAll("[id='meta']");
    for (var i = 0; i < targetElement.length; i++) {
        if (targetElement[i].className.indexOf("ytd-watch-flexy") > -1) {
            targetElement[i].appendChild(buttonDiv2);
}}}

function Addytpolymer3() {
    var buttonDiv2 = document.createElement("span");
    buttonDiv2.style.width = "50%";
    buttonDiv2.id = "youtubedl3";
    var addButton2 = document.createElement("a");
    addButton2.appendChild(document.createTextNode("1440p"));
    addButton2.style.width = "50%";
    addButton2.style.backgroundColor = "#EE431E";
    addButton2.style.color = "white";
    addButton2.style.textAlign = "center";
    addButton2.style.padding = "7px 7px";
    addButton2.style.margin = "0px 2px";
    addButton2.style.fontSize = "15px";
    addButton2.style.border = "0";
    addButton2.style.cursor = "pointer";
    addButton2.style.borderRadius = "10px";
    addButton2.style.fontFamily = "Roboto, Arial, sans-serif";
    addButton2.style.textDecoration = "none";
    addButton2.href = '';
    addButton2.target = "_blank";
    buttonDiv2.appendChild(addButton2);
    var targetElement = document.querySelectorAll("[id='meta']");
    for (var i = 0; i < targetElement.length; i++) {
        if (targetElement[i].className.indexOf("ytd-watch-flexy") > -1) {
            targetElement[i].appendChild(buttonDiv2);
}}}

function Addytpolymer4() {
    var buttonDiv2 = document.createElement("span");
    buttonDiv2.style.width = "50%";
    buttonDiv2.id = "youtubedl4";
    var addButton2 = document.createElement("a");
    addButton2.appendChild(document.createTextNode("MP3"));
    addButton2.style.width = "50%";
    addButton2.style.backgroundColor = "#EE431E";
    addButton2.style.color = "white";
    addButton2.style.textAlign = "center";
    addButton2.style.padding = "7px 7px";
    addButton2.style.margin = "0px 2px";
    addButton2.style.fontSize = "15px";
    addButton2.style.border = "0";
    addButton2.style.cursor = "pointer";
    addButton2.style.borderRadius = "10px";
    addButton2.style.fontFamily = "Roboto, Arial, sans-serif";
    addButton2.style.textDecoration = "none";
    addButton2.href = '';
    addButton2.target = "_blank";
    buttonDiv2.appendChild(addButton2);
    var targetElement = document.querySelectorAll("[id='meta']");
    for (var i = 0; i < targetElement.length; i++) {
        if (targetElement[i].className.indexOf("ytd-watch-flexy") > -1) {
            targetElement[i].appendChild(buttonDiv2);
}}}
})();
