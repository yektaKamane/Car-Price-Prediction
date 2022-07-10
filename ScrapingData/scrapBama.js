// ==UserScript==
// @name         bama car
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=undefined.
// @grant        none
// ==/UserScript==
(function() {
    console.log("start");
    if (document.title === 'links') {
        console.log("qq");
        let body = document.querySelector("body");
        if (localStorage.getItem("inx") == null) {
            localStorage.setItem("inx", "0");
        }
        let inx = parseInt(localStorage.getItem("inx"));
        localStorage.setItem("inx", (inx + 1) + "");
        body.children[inx].click();
    } else {
        console.log("here!!!!");
        if (localStorage.getItem("negin") == null) {
            localStorage.setItem("negin", "[]");
        }
        console.log(1);
        let neg = JSON.parse(localStorage.getItem("negin"));
        let content = document.querySelector("body > pre").textContent;
        let res = JSON.parse(content);
        console.log(2);
        neg.push(res);
        console.log(neg);
        localStorage.setItem("negin", JSON.stringify(neg));
        console.log(4);
        history.go(-1);
        console.log(5);
    }
})();