import aframe from "aframe";
import extras from "aframe-extras";
import keyboardControls from "aframe-keyboard-controls";
import clickDragComponent from "../src/index";
//import Cropper from 'cropperjs';
require("aframe-look-at-component");
require("aframe");
require("aframe-extras");
require("aframe-orbit-controls-component-2");
require("aframe-animation-component");
require("aframe-particle-system-component");
//require('cropperjs');
var https = require("https");

var fs = require("fs");

extras.physics.registerAll(aframe);
aframe.registerComponent("keyboard-controls", keyboardControls);
clickDragComponent(aframe);
import Unsplash from "unsplash-js";
import { toJson } from "unsplash-js";
// require syntax

const unsplash = new Unsplash({
  applicationId:
    "fc7e3fa3df7ac20cd539dc3a91b2eef3abb4870d90098d05265410df9b0ec15e",
  secret: "379b72ff6db377d5d32febe5dd0947220c0de657c603309ad5749ab8f0603572",
  callbackUrl: "",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

function clickImg(elem) {
  console.log(elem);
  $(`#${elem.id}`).click();
}

unsplash.photos
  .listPhotos(1, 10, "latest")
  .then(toJson)
  .then((json) => {
    unpic = json;
    document.getElementById("unsplashImgs").innerHTML = "";
    for (var i = 0; i < json.length; i++) {
      console.log(json[i]);
      let imgid = `unsplash${i}`;
      var elem = `
                <div
                    class="img__wrap"
                    onclick="clickImg(${imgid})"
                >
                    <img
                        src="${json[i].urls.regular}"
                        id="${imgid}"
                        onclick="pushImg(this);"
                        crossorigin="anonymous"
                    />
                    <p class="img__description">${json[i].alt_description}</p>
                </div>`;
      // var node = document.createElement("img");
      // node.src = json[i].urls.regular;
      // node.setAttribute("onclick", "pushImg(this);");
      // node.setAttribute("crossorigin", "anonymous");
      // var style='max-width:50%;  ';
      // node.setAttribute('style',style);
      // document.getElementById("unsplashImgs").append(elem);
      $(elem).appendTo("#unsplashImgs");
    }
  });
window.onload = function () {
  $("body").on("keyup", ".unsplash_srch_new", function (event) {
    event.preventDefault();
    document.getElementById("unsplashImgs").innerHTML = "";
    if (event.keyCode === 13) {
      console.log(String(event.target.value));
      unsplash.search
        .photos(String(event.target.value), 1)
        .then(toJson)
        .then((json) => {
          console.log(json);
          for (var i = 0; i < json.results.length; i++) {
            let imgid = `srch_unsplash${i}`;
            var elem = `
                <div
                    class="img__wrap"
                    onclick="clickImg(${imgid})"
                >
                    <img
                        src="${json.results[i].urls.regular}"
                        id="${imgid}"
                        onclick="pushImg(this);"
                        crossorigin="anonymous"
                    />
                    <p class="img__description">${json.results[i].alt_description}</p>
                </div>`;

            // var node = document.createElement("img");
            // node.src = json.results[i].urls.regular;
            // node.width = 125;
            // node.height = 125;
            // node.style = "margin:4px;max-width:50%;";
            // node.setAttribute("onclick", "pushImg(this);");
            // node.setAttribute("crossorigin", "anonymous");
            $(elem).appendTo("#unsplashImgs");
            // document.getElementById("unsplashImgs").append(node);
          }
        });
    }
  });
};
module.exports = {
  unpic: unpic,
};
