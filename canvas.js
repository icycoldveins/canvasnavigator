// ==UserScript==
// @name         canvas navigator
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  navigate left and right using arrow keys in canvas and download using command shift s
// @author       icycoldveins
// @icon         none
// @grant        none
// @license     MIT
// @match      *://*.instructure.com/*
// @match      *://*.canvas.com/*
// ==/UserScript==
(function () {
    "use strict";
  
    // detect if text has Previos  or Next
    // if yes, click it
    // if no, do nothing
    //using left and right arrow keys
    //   aria-label="Previous Module Item"
    document.addEventListener("keydown", function (event) {
      if (event.key == "ArrowLeft") {
        if (document.querySelector("[aria-label='Previous Module Item']")) {
          document.querySelector("[aria-label='Previous Module Item']").click();
        }
      }
      if (event.key == "ArrowRight") {
        if (document.querySelector("[aria-label='Next Module Item']")) {
          document.querySelector("[aria-label='Next Module Item']").click();
        }
      }
      if (event.key == "s" && event.metaKey && event.shiftKey) {
        // download the file
        document.querySelector("[download='true']").click();
      }
    });
  })();
  