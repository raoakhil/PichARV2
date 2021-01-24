let k = 0;
var t = 0;
let a = 0;
let perm = 0;
let ctaid = 0;
var w = 0;
var n = 0;
var u = 0;
var cnt = 0;
var uploadbar = document.getElementById("uploadbar");
var imgfil = "";
var filename = "";
var bool = 0;
var object;
var edittype;
var linkid;
const accessToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZWE0ZTNhMzlhMTkxNDQ2YmRkNzQ2MzBlMGJkNGYyN2NiNTkzOGFjZGE2MDNkM2ZiZGZlMzQwNTA2M2EzZDMyZTgxZWY1OTU2N2IzZDM4NjUiLCJpYXQiOjE2MDA2OTA3NzQsIm5iZiI6MTYwMDY5MDc3NCwiZXhwIjoxNjMyMjI2Nzc0LCJzdWIiOiIzIiwic2NvcGVzIjpbXX0.hZwmynYSNzctxn6cdy_9Gtffd5Yeu-cJF50xK_eUInXLLhe9kjRz5XZiLMGeF1eTyLPCWYt3sOm5z5sZfS965H_RPecdk39qjM0dF4gzmM3FqaUINFAaQcgORtLBNa3-dnv7sKxe48sovQfQj4hzXBe-0U5IyhBBNESwCwrebRG9pMJEMYrsJUBL34A2HQHyzTniMPA7rpn6VZd4DvCJRlwlA1DvekjS4YryJ2QswZHKPewLw7EcedcoBhWE4mmnow6KhZ-F5YRJkvPg4azSdwzO6bO-Ep9YVsHUlG4Uz_K2IXJSMRcLU-9SW3CISWGNUKH_BLADnWYoi7txEARGo6KUtlMAVyu8qF2p3GjktMNXGrS0Aokctqi3fUy-1mM0zKLHH_bJdGwLSkOcmhXhWNU4xjW3taf-gXqzJk62C2xKTCQj6rEWqg5AddYpU6692pFyJcHkysgaM6kFLUk-GT2vGAqQ8_QKsqqJqyehmow6rXD26a0HhTABuZ0EitNm3-dFFWFVueZSXi4IulVf3mJlPH_fXBQ6yoHVl47Lexr_-6JdrL0rXYP2I7PjXGi_8eafB2xTgOBomiMX-drtVPAjJjx-GK2PsLgl821VK-Fo_UX_viaUypkk3B6SuWevu8jHpiyMbl-KU4BjGGAwJ6yB4JaqqySTZrs1n-XaGj0";

// function auto() {
//     document.getElementById('auth').value = token;
//     document.getElementById('auth2').value = token;
//     document.getElementById('auth3').value = token;
//     document.getElementById('auth4').value = token;

//     document.getElementById('auth5').value = token;
//     var sceneEl = document.querySelector('a-scene');
//     sceneEl.addEventListener('loaded', function() {});
// }
// auto();


function editAssetId(e) {
  $(".media-info").addClass("show");
  $(".media-info")
    .find("img")
    .attr("src", $(".img-panel.active img").attr("src"));
  document.getElementById("elementid").value = e.dataset.pid;
  document.getElementById("newname").value = e.dataset.name;
  if (e.dataset.tags) {
    var tags = e.dataset.tags;
    tags = tags.split(",");
    $(".saved-tags>div").html("");
    $(tags).each(function (i, val) {
      var tag = `<span class="badge badge-pill badge-light btn-showmore mb-1">${val}</span>`;
      $(tag).appendTo(".saved-tags>div");
    });
    $(".saved-tags").removeClass("d-none");
    $(".edit-tags").addClass("d-none");
    $(".btn-edit-tags").removeClass("d-none");
  } else {
    $(".saved-tags").addClass("d-none");
    $(".edit-tags").removeClass("d-none");
    $(".btn-edit-tags").removeClass("d-none");
  }
  edittype = e.dataset.typ;
}

//CTA Functionalities
var cta = document.getElementById("ctabutton");

function chgfore(e) {
  cta.style.color = e.value;
}

function editback() {
  $("#backcolor").toggle();
}

function editcol() {
  $("#butcolor").toggle();
}

$("#backcolor").ColorPicker({
  color: "#4846ae",
  flat: true,
  onChange: function (hsb, hex, rgb) {
    cta.style.backgroundColor = "#" + hex;
    $("#backcol").css("backgroundColor", "#" + hex);
  },
});

$("#butcolor").ColorPicker({
  color: "#ffffff",
  flat: true,
  onChange: function (hsb, hex, rgb) {
    cta.style.color = "#" + hex;
    $("#butcol").css("backgroundColor", "#" + hex);
  },
});

$("#backcolor").hide();
$("#butcolor").hide();

function chgtxt(e) {
  if (e.id == "buttext") {
    var str = document.getElementById("buticn").value;
    cta.innerText = str + " " + e.value;
  } else if (e.id == "buticn") {
    var str = document.getElementById("buttext").value;
    cta.innerText = e.value + " " + str;
  }
  if (e.value == "" || e.value == "null") {
    var str = document.getElementById("buticn").value;
    cta.innerText = str;
  }
}

function chglnk(e) {
  cta.setAttribute("href", e.value);
}

function chground(e) {
  cta.style.borderTopLeftRadius = e.value + "px";
  cta.style.borderTopRightRadius = e.value + "px";
  cta.style.borderBottomLeftRadius = e.value + "px";
  cta.style.borderBottomRightRadius = e.value + "px";
}

//Text functionalities

function fontchanged(e) {
  var phrasetxt = document.getElementById("phrasetxt");
  phrasetxt.style.fontFamily = e.value;
}

function phrasechanged(e) {
  var phrasetxt = document.getElementsByClassName("f-text");
  if (e.value == "" || e.value == null) {
    for (let element of $(".f-text")) {
      document.getElementById(element.id).innerText = element.id;
    }
  } else {
    $(".f-text").text(e.value);
  }
}
var col;

function editphr(e) {
  $("#phrcolor").toggle();
  col = e.style.backgroundColor;
}

$("#phrcolor").ColorPicker({
  color: col,
  flat: true,
  onChange: function (hsb, hex, rgb) {
    var phrasetxt = document.getElementsByClassName("phrasetxt");
    phrasetxt[0].style.color = "#" + hex;
    phrasetxt[1].style.color = "#" + hex;
    phrasetxt[2].style.color = "#" + hex;
    phrasetxt[3].style.color = "#" + hex;
    phrasetxt[4].style.color = "#" + hex;
    phrasetxt[5].style.color = "#" + hex;
    phrasetxt[6].style.color = "#" + hex;

    $("#phrcol").css("backgroundColor", "#" + hex);
  },
});
$("#phrcolor").hide();
var n = 0;

function pushTxt(e) {
  n++;
  var entitytxt = document.createElement("a-entity");
  var aligntxt = document.getElementById("aligntxt");
  var txt = document.createElement("a-text");
  entitytxt.setAttribute("rotation", { x: 0, y: 0, z: 0 });
  entitytxt.setAttribute("scale", { x: 1, y: 1, z: 1 });
  entitytxt.setAttribute("click-drag", "");
  txt.setAttribute("visible", "true");
  txt.setAttribute("value", e.innerText);
  txt.setAttribute("align", aligntxt.value);
  if (e.style.fontFamily == "roboto");
  else {
    txt.setAttribute("font", "./css/" + e.style.fontFamily + ".fnt");
    txt.setAttribute("fontImage", "./css/" + e.style.fontFamily + ".png");
  }
  txt.setAttribute("color", $(".textColor").val());
  txt.setAttribute("width", "12");
  txt.setAttribute("side", "double");
  txt.classList.add("exp");
  txt.id = "txt" + n;
  entitytxt.object3D.position.set(0, 0.6, 0);
  var sc = document.querySelector("a-scene");
  entitytxt.appendChild(txt);
  sc.appendChild(entitytxt);
  $("#txt .close").click();
  $(".modal-backdrop").remove();
}

// Video functionalities
function pushVid(e) {
  console.log(e);
  console.log(e.dataset.source);
  if (e.dataset.type == "2D") {
    var node = document.createElement("a-video");
    node.setAttribute("src", e.dataset.source);
    node.id = e.id;
    node.object3D.position.set(0, 0.5, 0);
    node.setAttribute("rotation", { x: 0, y: 0, z: 0 });
    node.setAttribute("scale", { x: 1, y: 1, z: 1 });
    node.setAttribute("visible", "true");
    node.setAttribute("click-drag", "");
    node.setAttribute("autoplay", "0");
    node.classList.add("exp");
    document.getElementById("perswin").appendChild(node);
  } else if (e.dataset.type == "360") {
    var node = document.createElement("a-videosphere");
    node.setAttribute("visible", "true");
    node.setAttribute("src", e.dataset.source);
    node.classList.add("exp");
    node.id = e.id;
    document.getElementById("perswin").appendChild(node);
  }
  $("#videos .close").click();
  $(".modal-backdrop").remove();
}

function msg() {
  document.getElementById("xx").innerHTML =
    "<i>Text should not exceed 8 characters</i>";
}

function addbut(e) {
  $(".left-bar-panel.active").removeClass("active");
  u++;
  lnk = document.getElementById("butlink").value;
  var x = cta.cloneNode(true);
  x.style.position = "fixed";
  ++ctaid;
  x.style.bottom = "150px";
  // x.style.left = 10 + (t*10) + (u * 60) +'px';
  x.style.marginLeft = 10 + u * 120 + "px";
  x.style.zIndex = "1";
  x.id = "cta" + ctaid;
  linkid = x.id;
  x.style.height = "fit-content";
  x.classList.add("exp2");

  x.classList.add("linkbttn");

  x.setAttribute("data-toggle", "modal");
  x.setAttribute("data-target", "#ctaModal");
  var d2 = document.getElementById("d2");
  d2.appendChild(x);

  $("#" + x.id).click(function (event) {
    event.preventDefault();
  });
}

function ctaset(e) {
  document.getElementById("ctaBtnUnpushed").setAttribute("data-idcta", e.id);
}

function linkvisit() {
  window.open(document.getElementById(linkid).href);
}

function ctaUnpushed(e) {
  //document.getElementById(e.dataset.idaud.slice(0, e.dataset.idaud.length-3)).remove();
  var play = document.getElementById(e.dataset.idcta);
  var q = play.style.marginLeft;
  var p = parseInt(q.substring(0, q.indexOf("p")));
  var rmvnode = (p - 10) / 120;

  console.log(u); //total nodes added
  console.log(rmvnode); //position of removed node
  for (var i = rmvnode + 1; i <= u; i++) {
    play = play.nextSibling;
    var l = play.style.marginLeft;
    var a = parseInt(
      play.style.marginLeft.substring(0, play.style.marginLeft.indexOf("p"))
    );
    a = a - 120;
    play.style.marginLeft = a + "px";
  }

  document.getElementById(e.dataset.idcta).remove();
  u--;
}

function add(event) {
  obj = document.querySelector("#object");
  obj.object3D.visible = true;
  document.getElementById("but").style.display = "none";
}
var c;

function delimg(id) {
  $.ajax({
    method: "DELETE",
    url: `https://pitchar.io/api/v1/assets/${id}`,
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + accessToken,
    },
    success(data) {
      console.log(data);
      $("#delete_alert").show();
      setTimeout(() => {
        $("#delete_alert").hide();
      }, 4000);
      fetchUplodsPics();
      fetchUploadMedia();
      // $(e).closest(".img-panel").hide();
      // e.parentNode.parentNode.style.display = 'none';
    },
  });
}

function editimg(e) {
  console.log(e.parentNode.parentNode.childNodes[0].id);

  c = new Croppie(e.parentNode.parentNode.childNodes[0], {
    viewport: { width: 70, height: 70 },
    boundary: { width: 125, height: 125 },
  });
}

function pushImg(e) {
  console.log(e);
  console.log(e.src);
  var node = document.createElement("a-image");
  node.setAttribute("src", e.src);
  node.id = e.id;
  var img = new Image();
  img.src = e.src;
  node.setAttribute("height", 0);
  node.setAttribute("width", 0);
  // node.setAttribute("height", img.height / 500);
  // node.setAttribute("width", img.width / 500);
  node.object3D.position.set(0, 0.5, 0);
  node.setAttribute("rotation", { x: 0, y: 0, z: 0 });
  node.setAttribute("scale", { x: 1, y: 1, z: 1 });
  node.setAttribute("visible", "true");
  node.setAttribute("click-drag", "");
  node.classList.add("exp");
  document.getElementById("perswin").appendChild(node);
  $("#images .close").click();
  $(".modal-backdrop").remove();
}

function pushObj(e) {
  console.log(e.dataset.objfile);
  var node = document.createElement("a-entity");
  node.setAttribute("rotation", { x: 0, y: 0, z: 0 });
  node.setAttribute("visible", "true");
  node.setAttribute("scale", { x: 1, y: 1, z: 1 });
  if (e.dataset.type == "obj") {
    node.setAttribute("obj-model", {
      obj: e.dataset.objfile,
      mtl: e.dataset.mtlfile,
    });
  } else {
    node.setAttribute("gltf-model", e.dataset.gltffile);
  }
  node.id = e.id + "3d";
  node.object3D.position.set(0, 0.1, 0);
  node.object3D.rotation.set(0, 1.57, 0);
  node.object3D.scale.set(0.7, 0.7, 0.7);
  node.setAttribute("click-drag", "");
  node.classList.add("exp");
  document.getElementById("perswin").appendChild(node);
  $("#assets .close").click();
  $(".modal-backdrop").remove();
  objectloaded(node.id);
}

// function updatetype(e) {
// 	if (e.value == 'gltf') {
// 		var obj = document.getElementsByClassName('obj');
// 		obj[0].style.display = 'block';
// 		obj[1].style.display = 'block';
// 		obj[0].setAttribute('name', 'gltf');
// 		obj[1].setAttribute('name', 'gltf');
// 		var mtl = document.getElementsByClassName('mtl');
// 		mtl[0].style.display = 'none';
// 		mtl[1].style.display = 'none';
// 	} else if (e.value == 'fbx' || e.value == 'zip') {
// 		var obj = document.getElementsByClassName('obj');
// 		obj[0].style.display = 'none';
// 		obj[1].style.display = 'none';
// 		var mtl = document.getElementsByClassName('mtl');
// 		mtl[0].style.display = 'none';
// 		mtl[1].style.display = 'none';
// 	} else {
// 		var obj = document.getElementsByClassName('obj');
// 		obj[0].style.display = 'block';
// 		obj[1].style.display = 'block';
// 		obj[0].setAttribute('name', 'gltf');
// 		obj[1].setAttribute('name', 'obj');
// 		var mtl = document.getElementsByClassName('mtl');
// 		mtl[0].style.display = 'block';
// 		mtl[1].style.display = 'block';
// 	}
// }

function pushAud(e) {
  console.log("Audio Pushed!");
  w++;
  a = 10 + w * 60;
  var d2 = document.getElementById("d2");
  var node = document.createElement("audio");
  var id = e.id + "aud";
  node.id = id;

  var idAudioLoop = e.id.substr(3);
  // var audioValue = document.getElementById("audioLoop" + idAudioLoop).dataset
  //   .loop;
  // if (audioValue === "true") {
  //   node.setAttribute("loop", true);
  // }

  var src = document.createElement("source");
  src.src = e.dataset.source;
  node.appendChild(src);
  d2.appendChild(node);
  var play = document.createElement("button");
  play.innerHTML =
    "<i class='fa fa-file-audio-o' style='color:#4846ae;font-size:28px;'></i>";
  play.setAttribute("data-source", e.dataset.source);
  play.id = id + "btn";
  play.style.position = "fixed";
  play.style.bottom = "50px";
  play.style.marginLeft = a + "px";
  play.style.marginLeft = "140px";
  //play.setAttribute('onclick', 'playaud(this)');
  play.setAttribute("onclick", "audioset(this)");
  play.setAttribute("data-toggle", "modal");
  play.setAttribute("data-target", "#audioModal");

  play.classList.add("exp2");
  node.classList.add("exp2");
  d2.appendChild(play);
  $("#music .close").click();
  $(".modal-backdrop").remove();
}

function audioset(e) {
  document.getElementById("audBtnUnpushed").setAttribute("data-idaud", e.id);
  document
    .getElementById("audBtnPlayModal")
    .setAttribute("data-source", e.id.slice(0, e.id.length - 3));
}

function audBtnUnpushed(e) {
  //document.getElementById(e.dataset.idaud).remove();
  document
    .getElementById(e.dataset.idaud.slice(0, e.dataset.idaud.length - 3))
    .remove();
  var play = document.getElementById(e.dataset.idaud);
  var q = play.style.marginLeft;
  var p = parseInt(q.substring(0, q.indexOf("p")));
  var rmvnode = (p - 10) / 60;

  console.log(w); //total nodes added
  console.log(rmvnode); //position of removed node
  for (var i = rmvnode + 1; i <= w; i++) {
    play = play.nextSibling.nextSibling;
    console.log(play);
    var l = play.style.marginLeft;
    var a = parseInt(
      play.style.marginLeft.substring(0, play.style.marginLeft.indexOf("p"))
    );
    a = a - 60;
    play.style.marginLeft = a + "px";
  }

  document.getElementById(e.dataset.idaud).remove();
  w--;
}

function previewAudio(e) {
  var node = document.createElement("audio");
  var id = e.id + "aud";
  node.id = id;
  var src = document.createElement("source");
  src.src = e.dataset.source;
  node.appendChild(src);
  document.body.appendChild(node);
  playAudio(e);
  //node.play();
}

function pauseAudio(e) {
  e.innerHTML = "<i class='fa fa-play'></i>";
  e.removeAttribute("onclick");
  e.setAttribute("onclick", "playAudio(this);");
  try {
    var player = document.getElementById(e.dataset.source);
    player.pause();
  } catch (err) {
    var player2 = document.getElementById(e.id + "aud");
    player2.pause();
  }
}

function playAudio(e) {
  e.innerHTML = "<i class='fa fa-pause'></i>";
  e.removeAttribute("onclick");
  e.setAttribute("onclick", "pauseAudio(this);");
  try {
    var player = document.getElementById(e.dataset.source);
    player.play();
  } catch (err) {
    var player2 = document.getElementById(e.id + "aud");
    player2.play();
  }
}

function toogleLoop(e) {
  if (e.value == "repeat") {
    e.dataset.loop = true;
  } else {
    e.dataset.loop = false;
  }
}
var pos = 0;

function pushYT(e) {
  if (cnt < 3) {
    //if (pos<=3){
    cnt++;
    ytembed = document.getElementById("ytembed");
    ytembed.src = "https://www.youtube.com/embed/" + e.dataset.source;
    var d2 = document.getElementById("d2");
    var node = document.createElement("img");
    var id = e.id + "play";
    node.id = id + cnt;
    node.src = e.src;
    node.style.position = "fixed";
    node.style.top = 50 + 100 * cnt + "px";
    //pos=cnt;
    //pos= node.style.top;
    console.log(pos);
    node.style.marginLeft = "10px";
    node.style.width = "80px";
    node.classList.add("exp2");
    node.setAttribute("onclick", "ytset(this);");
    node.setAttribute("data-source", e.dataset.source);
    node.setAttribute("data-toggle", "modal");
    node.setAttribute("data-target", "#ytmodal");
    d2.appendChild(node);
  } else {
    alert("Limit Reached");
  }
}

function ytremove(e) {
  document.getElementById("ytembed").src = "";
}

function ytset(e) {
  ytembed = document.getElementById("ytembed");
  ytembed.src = "https://www.youtube.com/embed/" + e.dataset.source;
  document.getElementById("ytBtnUnpushed").setAttribute("data-idyt", e.id);
}

function ytUnpushedVideo(e) {
  var play = document.getElementById(e.dataset.idyt);
  var q = play.style.top;
  var p = parseInt(q.substring(0, q.indexOf("p")));

  var rmvnode = (p - 50) / 100;
  console.log(rmvnode); //position of removed video
  console.log(cnt); //total video

  for (var i = rmvnode + 1; i <= cnt; i++) {
    play = play.nextSibling;
    console.log(play);
    var l = play.style.top;
    var a = parseInt(play.style.top.substring(0, play.style.top.indexOf("p")));
    a = a - 100;
    play.style.top = a + "px";
  }

  document.getElementById(e.dataset.idyt).remove();
  cnt--;
}

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $("#my-image").attr("src", e.target.result);
      $("#unsplash_thumb_upload").addClass("d-none");
      filename = input.files[0].name;
      var resize = new Croppie($("#my-image")[0], {
        viewport: { width: 100, height: 100 },
        boundary: { width: 300, height: 300 },
        showZoomer: true,
        enableResize: true,
        enableOrientation: true,
      });
      let html = `
                <button
                    id="use"
                    type="button"
                    class="uploadbut btn btn-primary" 
                    style="
                        margin: 8 0;
                        padding: 10 80px;
                        width: 100%;
                        border: none;
                        
                    "
                >Save</button>
            `;
      $(".croppie-container").append(html);

      $("#use").on("click", function () {
        resize.result("blob").then(function (dataImg) {
          // use ajax to send data to php
          imgfil = dataImg;
          console.log(e);
          console.log(imgfil + " " + filename);
          $("#unsplash_thumb_upload").removeClass("d-none");
          $(".croppie-container").remove();
          let template = `<img id="my-image" src="#" class="d-none"/>`;
          $("#upload__content").prepend(template);
          uploadImg();
        });
      });
    };
    reader.readAsDataURL(input.files[0]);
  }
}
// $("#image").change(function () {
//   console.log($("#image"));
//   readURL(this);
//   console.log("changed");
//   var index = bool - 1;
//   if (bool) {
//     $(".cr-boundary").eq(index).css("display", "none");
//     $(".cr-slider-wrap").eq(index).css("display", "none");
//   }
//   bool++;
// });

$("#audio").change(function (e) {
  console.log("Audio changed!");
  uploadAud(e.target.files[0]);
});
// $("#video").change(function () {
//   console.log("Ok");
//   uploadVid();
// });
// $("#360video").change(function () {
//   console.log("Ok 360");
//   uploadVid();
// });
$(".obj-file").change(function () {
  if ($(".obj-file.obj").val()) {
    console.log("true");
    $("#obj_label").addClass("uploaded");
    // $("#obj_label").text('DONE');
  }
  if ($(".obj-file.mtl").val()) {
    $("#mtl_label").addClass("uploaded");
    // $("#mtl_label").text('DONE');
  }
  if ($(".obj-file.obj").val() !== "" && $(".obj-file.mtl").val() !== "") {
    uploadObj();
  }
});
$(".obj-gltf-file").change(() => {
  console.log($(".obj-gltf-file.gltf").val());
  if ($(".obj-gltf-file.gltf").val() !== "") {
    uploadObj();
  }
});

function uploadImg(event) {
  let form = document.querySelector("#form");
  let formData = new FormData(form);
  formData.append("name", $("#image").val().slice(12, -4));
  formData.append("image", imgfil, filename);
  $.ajax({
    method: "POST",
    url: "https://pitchar.io/api/v1/assets",
    data: formData,
    processData: false,
    contentType: false,
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + accessToken,
    },
    xhr: function () {
      var xhr = new window.XMLHttpRequest();
      // Upload progress
      xhr.upload.addEventListener(
        "progress",
        function (evt) {
          if (evt.lengthComputable) {
            var percentComplete = evt.loaded / evt.total;
            //Do something with upload progress
            uploadbar.style.width = percentComplete * 100 + "%";
            if (percentComplete == 1) uploadbar.style.width = 0;
          }
        },
        false
      );
      // Download progress
      xhr.addEventListener(
        "progress",
        function (evt) {
          if (evt.lengthComputable) {
            var percentComplete = evt.loaded / evt.total;
            // Do something with download progress
            uploadbar.style.width = percentComplete * 100 + "%";
            if (percentComplete == 1) uploadbar.style.width = 0;
          }
        },
        false
      );

      return xhr;
    },
    success(data) {
      console.log(data);
      $("#assets_alert").show();
      setTimeout(() => {
        $("#assets_alert").hide();
      }, 4000);
      fetchUplodsPics();
      fetchUploadMedia();
      // var div = document.createElement('div');
      // div.setAttribute('class', 'hbox');
      // var node = document.createElement('img');
      // node.src = data.data.image;
      // node.width = 125;
      // node.height = 125;
      // node.id = 'img' + perm;
      // node.style = 'margin:4px;';
      // node.setAttribute('onclick', 'pushImg(this);');
      // div.appendChild(node);
      // var overlay = document.createElement('div');
      // overlay.setAttribute('class', 'options');
      // var del = document.createElement('button');
      // del.setAttribute('onclick', 'delimg()');
      // del.setAttribute('data-pid', data.data.id);
      // overlay.appendChild(del);
      // div.appendChild(node);
      // if (data.data.image != '') document.getElementById('galleryimgs').appendChild(div);
      // else uploadImg(event);
      // uploadbar.style.width = 0;
      // $(".showImagesUploaded").click();
    },
  });
}

//for edit name
function editNameAsset(id, newName, checkIcon, assetType) {
  console.log(id, newName, checkIcon, assetType);
  const assetData = {
    name: newName.value,
    // type: "image",
  };
  // if (edittype == "a") {
  $.ajax({
    method: "PUT",
    url: `https://pitchar.io/api/v1/assets/${id}`,
    data: JSON.stringify(assetData),
    processData: false,
    contentType: false,
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
    xhr: function () {
      var xhr = new window.XMLHttpRequest();
      // Upload progress
      xhr.upload.addEventListener(
        "progress",
        function (evt) {
          if (evt.lengthComputable) {
            var percentComplete = evt.loaded / evt.total;
            //Do something with upload progress
            uploadbar.style.width = percentComplete * 100 + "%";
            if (percentComplete == 1) uploadbar.style.width = 0;
          }
        },
        false
      );

      // Download progress
      xhr.addEventListener(
        "progress",
        function (evt) {
          if (evt.lengthComputable) {
            var percentComplete = evt.loaded / evt.total;
            // Do something with download progress
            uploadbar.style.width = percentComplete * 100 + "%";
            if (percentComplete == 1) uploadbar.style.width = 0;
          }
        },
        false
      );

      return xhr;
    },
    success(data) {
      console.log(data);
      document.getElementById(checkIcon.id).style.opacity = 0;
      $("#rename_alert").show();
      setTimeout(() => {
        $("#rename_alert").hide();
      }, 4000);
      // $("#name_" + data.data.id).text(data.data.name);
    },
  });
  // }
  // else {
  //   $.ajax({
  //     method: "POST",
  //     url: "http://pitchar.io/user/apis/_update_media.php",
  //     data: formData,
  //     processData: false,
  //     contentType: false,
  //     xhr: function () {
  //       var xhr = new window.XMLHttpRequest();

  //       // Upload progress
  //       xhr.upload.addEventListener(
  //         "progress",
  //         function (evt) {
  //           if (evt.lengthComputable) {
  //             var percentComplete = evt.loaded / evt.total;
  //             //Do something with upload progress
  //             uploadbar.style.width = percentComplete * 100 + "%";
  //             if (percentComplete == 1) uploadbar.style.width = 0;
  //           }
  //         },
  //         false
  //       );

  //       // Download progress
  //       xhr.addEventListener(
  //         "progress",
  //         function (evt) {
  //           if (evt.lengthComputable) {
  //             var percentComplete = evt.loaded / evt.total;
  //             // Do something with download progress
  //             uploadbar.style.width = percentComplete * 100 + "%";
  //             if (percentComplete == 1) uploadbar.style.width = 0;
  //           }
  //         },
  //         false
  //       );

  //       return xhr;
  //     },
  //     success(data) {
  //       $("#name_" + data.id).text(data.name);
  //     },
  //   });
  // }
}

//for image fetch
function getRandomSize(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

$("body").on("click", ".btn-showmore", function () {
  $("#modal-show-more").modal("show");
  var pane = $(this).attr("show-panel");
  var show_srch = $(this).attr("show_srch");
  $(".search_input").css("display", "none");
  $(show_srch).css("display", "block");
  $(pane).click();
});

function clickImg(elem) {
  $(`#${elem.id}`).click();
}
$("#imagebut").click(function () {
  // console.log('Im here')
  // document.getElementById('galleryimgs').innerHTML = '';
  document.getElementById("image").value = "";
  document.getElementById("my-image").src = "#";
  document.getElementsByClassName("searchbar")[0].value = "";
  document.getElementsByClassName("searchbar")[1].value = "";
  document.getElementById("unsplashImgs").innerHTML = "";
  // $('#modal-show-more').modal('show');
  var pane = $(this).attr("show-panel");
  $(pane).click();
  for (var i = 0; i < 10; i++) {
    let imgid = `unsplash${i}`;
    var elem = `
        <div
            class="img__wrap"
            onclick="clickImg(${imgid})"
        >
            <img
                src="${unpic[i].urls.regular}"
                id="${imgid}"
                onclick="pushImg(this);"
                crossorigin="anonymous"
            />
            <p class="img__description"><span>${unpic[i].alt_description.slice(
              0,
              10
            )}<span></p>
        </div>
    `;
    // var node = document.createElement("img");
    // node.src = json[i].urls.regular;
    // node.setAttribute("onclick", "pushImg(this);");
    // node.setAttribute("crossorigin", "anonymous");
    // var style='max-width:50%;  ';
    // node.setAttribute('style',style);
    // document.getElementById("unsplashImgs").append(elem);
    $(elem).appendTo("#unsplashImgs");

    // var node = document.createElement('img');
    // node.src = unpic[i].urls.small;
    // node.setAttribute('onclick', 'pushImg(this);');
    // node.setAttribute('crossorigin', 'anonymous');
    // document.getElementById('unsplashImgs').appendChild(node);
  }
  setTimeout(() => {
    $("#img_loader").addClass("d-none");
    $("#unsplashImgs").removeClass("d-none");
  }, 2000);

  // $.ajax({
  //     method: 'GET',
  //     url: 'https://pitchar.io/api/v1/assets',
  //     headers: {
  //         'Accept' : 'application/json',
  //         'Authorization' : 'Bearer '+ accessToken,
  //     },
  //     success({ data: { data } }) {
  //         console.log(data)
  //         for (var i = 0; i < data.length; i++) {
  //             var asset = data[i];
  //             var imgid = 'img' + i;
  //             var p_name = asset.name ? asset.name : 'None';
  //             var show_none = asset.image ? '' : 'd-none';
  //             var elem = `
  // 			 <div class="col-sm-2 float-left img-panel" id="media_${asset.id}">
  // 			    <div class="overlay">
  // 			        <div class="icons float-right mt-3 mr-2">
  // 			            <i class="fa fa-star" data-toggle="tooltip" data-placement="top" title="Remove from my favorites" aria-hidden="true"></i>
  // 			            <i class="fa fa-ellipsis-h custom-tooltip menu-icon" aria-hidden="true">
  //                             <span class="tooltiptext">
  //                                 <h5 class="w-100 float-left"><small>Add to my favorites</small><hr style="margin-bottom: 0;"></h5>
  //                                 <div class="w-100 float-left">Crop</div>
  //                                 <div data-typ="a" class="w-100 float-left edit_info" data-name="${p_name}" data-tags="${asset.tags}" data-pid='${asset.id}' onclick='editAssetId(this)'>Edit</div>
  //                                 <h5 onclick='delimg(this)' data-pid='${asset.id}' class="w-100 float-left pt-2"  style="border-top: 1px solid #ccc"><small>Delete</small></h5>
  //                             </span>
  // 			            </i>
  // 			        </div>
  // 			    </div>
  // 			    <div class="w-100 float-left col-sm-12 p-0">
  // 				  <img onclick="pushImg(this);" class="w-100 pt-4 pb-4 ${show_none}" src="https://pitchar.io/storage/${asset.image}" id="${imgid}" alt="Chania" style="height: 150px">
  // 				</div>
  //                 <div class="mt-1 float-left w-100" id="name_${asset.id}">
  //                     <small>${p_name}</small>
  //                 </div>
  //             </div>`;

  //             var elem = `
  //             <div
  //                 class="img__wrap"
  //                 onclick="clickImg(${imgid})"
  //             >
  //                 <img
  //                     src="https://pitchar.io/storage/${asset.image}"
  //                     id="${imgid}"
  //                     onclick="pushImg(this);"
  //                 />
  //                 <p class="img__description"><span>${asset.name}<span></p>
  //             </div>`

  //             var elem = `
  //             <img
  //                 src="https://pitchar.io/storage/${asset.image}"
  //                 id="${imgid}"
  //                 onclick="pushImg(this);"
  //             />`

  //             var node = document.createElement('img');
  //             node.src = 'https://pitchar.io/storage/' + asset.image;
  //             node.id = 'img' + i;
  //             node.style = 'margin:4px;width:125px;height:125;';
  //             node.setAttribute('onclick', 'pushImg(this);');
  //             node.setAttribute('class', 'image w-100 pt-4 pb-4');
  //             var div = document.createElement('div');
  //             div.setAttribute('class', 'hbox col-sm-2 float-left img-panel');
  //             div.appendChild(node);
  //             var overlay = document.createElement('div');
  //             overlay.setAttribute('class', 'options');

  //             var del = document.createElement('button');
  //             del.setAttribute('onclick', 'delimg(this)');
  //             del.setAttribute('data-pid', asset.id);
  //             del.innerHTML = "<i class='fa fa-trash'></i>";
  //             overlay.appendChild(del);
  //             div.appendChild(node);
  //             div.appendChild(overlay);
  //             var edit = document.createElement('button');
  //             edit.setAttribute('onclick', 'editAssetId(this)');
  //             edit.setAttribute('data-toggle', "modal");
  //             edit.setAttribute('data-target', "#editmodal");
  //             edit.setAttribute('data-pid', asset.id);
  //             edit.setAttribute('data-typ', 'a');
  //             edit.innerHTML = "<i class='fa fa-edit'></i>";
  //             overlay.appendChild(edit);
  //             div.appendChild(node);
  //             div.appendChild(overlay);

  //             if (asset.type == 'image' && asset.image != '') {
  //                 $(elem).appendTo('#unsplashImgs');
  //             }
  //             perm = i;
  //         }
  //     }
  // });
  // k = 1;
});

var l = 15;
var m = 20;

function fetchnew() {}
$("body").on("keyup", ".searchImg", function (event) {
  event.preventDefault();
  // console.log("hey!!", );
  if ($(".searchImg").val() == "") {
    document.getElementById("galleryimgsrch").innerHTML = "";
    $("#galleryimgs").show();
  }
  if (event.keyCode === 13) {
    $.ajax({
      method: "post",
      url: "http://pitchar.io/user/apis/_search_assets.php",
      data: {
        submit: true,
        authtoken: token,
        tags: $(".searchImg").val(),
      },
      success(result) {
        $("#galleryimgs").hide();
        document.getElementById("galleryimgsrch").innerHTML = "";
        var assets = result.assets;

        for (var i = 0; i < assets.length; i++) {
          asset = assets[i];
          var imgid = "img" + i;
          var p_name = asset.Projectname ? asset.Projectname : "None";
          var show_none = asset.Projectimage ? "" : "d-none";
          var elem = `
				<div class="col-sm-2 float-left img-panel" id="media_${asset.id}">
				<div class="overlay">
				<div class="icons float-right mt-3 mr-2">
				<i class="fa fa-star" data-toggle="tooltip" data-placement="top" title="Remove from my favorites" aria-hidden="true"></i>
				<i class="fa fa-ellipsis-h custom-tooltip menu-icon" aria-hidden="true">
				<span class="tooltiptext">
				<h5 class="w-100 float-left"><small>Add to my favorites</small><hr style="margin-bottom: 0;"></h5>

				<div class="w-100 float-left">Crop</div>
				<div data-typ="a" class="w-100 float-left edit_info" data-name="${p_name}" data-tags="${asset.tags}" data-pid='${asset.id}' onclick='editAssetId(this)'>Edit</div>
				<h5 onclick='delimg(this)' data-pid='${asset.id}' class="w-100 float-left pt-2"  style="border-top: 1px solid #ccc"><small>Delete</small></h5>
				</span>
				</i>
				</div>
				</div>
				<div class="w-100 float-left col-sm-12 p-0">

					  <img onclick="pushImg(this);" class="w-100 pt-4 pb-4 ${show_none}" src="${asset.Projectimage}" id="${imgid}" alt="Chania" style="height: 150px">
					  </div>
					<div class="mt-1 float-left w-100" id="name_${asset.id}"><small>${p_name}</small></div>
					</div>`;
          if (asset.Assetstype == "image") {
            $(elem).appendTo("#galleryimgsrch");
          }
        }
      },
    });
  }
});

$("body").on("keyup", ".searchYT", function (event) {
  event.preventDefault();
  var q = $(this).val();
  console.log(q);
  if (!q.length) {
    $(".you_tube").show();
  }
  if (event.keyCode === 13) {
    $(".you_tube").hide();
    var request = gapi.client.youtube.search.list({
      q: q,
      maxResults: 12,
      type: "video",
      part: "snippet",
      videoEmbeddable: "true",
      videoSyndicated: "true",
    });

    request.execute(function (response) {
      // console.log(response);
      document.getElementById("ytImgs").innerHTML = "";
      var assets = response.items;
      if (!assets) return;
      for (var i = 0; i < assets.length; i++) {
        var asset = assets[i];
        var node = document.createElement("img");
        node.src = asset.snippet.thumbnails.high.url;
        // node.width = 125;
        node.id = "ytimg" + i;
        node.style = "max-width:50%;";
        node.setAttribute("onclick", "pushYT(this);");
        node.setAttribute("data-source", asset.id.videoId);
        document.getElementById("ytImgs").appendChild(node);
        perm = i;
      }
    });
  }
});

$("#ytmodal").on("hidden.bs.modal", function () {
  document.getElementById("ytembed").src = "";
});

//for 3d model fetch

let asset = document.getElementById("asset");
$(".3d_assets").click(function () {
  var panel = $(this).attr("panel-name");
  selectItem("vertical-bars", "active", panel);
  selectItem("left-fixed-bar", "selected", this);
  var t = $(this);
  document.getElementById("galleryobjs").innerHTML = "";
  document.getElementsByClassName("searchbar")[2].value = "";
  document.getElementsByClassName("searchbar")[3].value = "";

  var scene = new THREE.Scene();
  var container = new THREE.Group();
  scene.add(container);

  const API_KEY = "AIzaSyANZMpdihFsQgcJkFIEjasfiLgX6Nyb8SE";
  //var searchGooglePoly = document.getElementsByClassName('searchGooglePoly');
  //searchGooglePoly[0].addEventListener('keyup', function (event) {
  //event.preventDefault();
  //if (event.keyCode === 13) {
  //alert("searchGooglePoly");

  var settings = {
    async: true,
    crossDomain: true,
    url: `https://poly.googleapis.com/v1/assets?keywords=${$(
      ".searchGooglePoly"
    ).val()}&format=OBJ&key=${API_KEY}`,
    method: "GET",
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
    document.getElementById("googlePolyImgs").innerHTML = "";

    var modResults = response.assets;
    console.log(modResults);
    $(".3d-g_poly-thumb").html("");
    $(".googlepolyImgs").html("");
    for (var i = 0; i < modResults.length; i++) {
      var src = modResults[i].thumbnail.url;
      var format = modResults[i].formats.find((format) => {
        return format.formatType === "OBJ";
      });
      var obj = format.root;
      var mtl = format.resources.find((resource) => {
        return resource.url.endsWith("mtl");
      });
      var imgid = "img" + i;
      var elem = `
                <div
                    class="img__wrap"
                    data-source="${modResults[i].name}"
                    id="${imgid}"
                    data-obj="${obj.url}"
                    data-mtl="${mtl.url}"
                    onclick="pushPolyModel(this);"
                >
                    <img
                        src="${src}"    
                    />
                    <p class="img__description"><span>${modResults[
                      i
                    ].displayName.slice(0, 10)}<span></p>
                </div>
            `;

      $(elem).appendTo(".3d-g_poly-thumb");
      $(elem).appendTo(".googlepolyImgs");
      $(".googlepolyImgs").removeClass("d-none");
      $("#loader").addClass("d-none");
    }
    // $(".googlepolyImgs").html();
    // for (var i = 0; i < modResults.length; i++) {
    //   var node = document.createElement("img");
    //   node.src = modResults[i].thumbnail.url;
    //   node.width = 125;
    //   node.height = 125;
    //   node.id = "img" + i;
    //   node.style = "margin:4px;";

    //   var format = modResults[i].formats.find((format) => {
    //     return format.formatType === "OBJ";
    //   });
    //   var obj = format.root;
    //   var mtl = format.resources.find((resource) => {
    //     return resource.url.endsWith("mtl");
    //   });
    //   var path = obj.url.slice(0, obj.url.indexOf(obj.relativePath));

    //   node.setAttribute("data-obj", obj.url);
    //   node.setAttribute("data-mtl", mtl.url);

    //   //node.setAttribute("onclick","pushAud(this);");
    //   if (format !== undefined) {
    //     node.setAttribute("onclick", "pushPolyModel(this);");
    //   }

    //   node.setAttribute("class", "image");
    //   node.setAttribute("data-source", modResults[i].name);
    //   var div = document.createElement("div");
    //   div.setAttribute("class", "hbox");
    //   div.appendChild(node);
    //   var overlay = document.createElement("div");
    //   overlay.setAttribute("class", "options");
    //   var del = document.createElement("button");
    //   del.setAttribute("onclick", "delaud(this)");
    //   del.innerHTML = "<i class='fa fa-trash'></i>";
    //   overlay.appendChild(del);
    //   div.appendChild(node);
    //   div.appendChild(overlay);
    //   document.getElementById("googlePolyImgs").appendChild(div);

    //   div.appendChild(node);
    //   div.appendChild(overlay);
    //   var src = modResults[i].thumbnail.url;
    //   var imgid = "img" + i;
    //   var elem = `<img data-source="${modResults[i].name}" id="${imgid}" src="${src}" data-obj="${obj.url}" data-mtl="${mtl.url}" onclick="pushPolyModel(this);">`;
    //   if (format !== undefined) {
    //     $(elem).appendTo(".googlepolyImgs");
    //   }
    // }
  });
  //}
  //});

  $.ajax({
    method: "post",
    url: "pitchar.io/user/apis/_fetch-assets.php",
    data: {
      submit: 1,
      authtoken: token,
    },
    dataType: "json",
    success(result) {
      $("#galleryimgs").html("");
      var assets = result.assets;
      $(".3d-gallery-thumb").html("");
      var count_img = 0;
      // console.log(count_img)
      for (var i = 0; i < assets.length; i++) {
        asset = assets[i];
        var p_name = asset.Projectname ? asset.Projectname : "None";
        if (
          asset.Assetstype == "zip" ||
          asset.Assetstype == "fbx" ||
          asset.Assetstype == "gltf" ||
          asset.Assetstype == "obj"
        ) {
          var node = document.createElement("img");
          var div = document.createElement("div");
          node.src = asset.objthumbnail
            ? asset.objthumbnail
            : "https://fsb.zobj.net/crop.php?r=qEpBmAgJQlOtYSK5lOz77XR83AiINmYurl-s0CZwBULw_FGcrpnc5QbuIqlr1lb5ZiuFD-2EpgERJdGYdjngJAESNHLBXa_L3TAH10rcQW-xXSuvqxbQuRyaFwjzVjW3G7HNq0zV71ptdlKF";
          node.width = 125;
          node.id = "img" + (i + 10);
          node.setAttribute("data-type", asset.Assetstype);
          node.setAttribute("data-objfile", asset.obj);
          node.setAttribute("data-gltffile", asset.gltf);
          if (asset.Assetstype == "obj")
            node.setAttribute("data-mtlfile", asset.mtl);
          node.style = "margin:4px;";
          node.setAttribute("onclick", "pushObj(this);");
          div.setAttribute("class", "hbox");
          div.appendChild(node);
          var overlay = document.createElement("div");
          overlay.setAttribute("class", "options");
          var del = document.createElement("button");
          del.setAttribute("onclick", "delobj(this)");
          del.setAttribute("data-pid", asset.id);
          del.innerHTML = "<i class='fa fa-trash'></i>";
          overlay.appendChild(del);
          var edit = document.createElement("button");
          edit.setAttribute("onclick", "editAssetId(this)");
          edit.setAttribute("data-toggle", "modal");
          edit.setAttribute("data-target", "#editmodal");
          edit.setAttribute("data-pid", asset.id);
          edit.setAttribute("data-typ", "a");
          edit.innerHTML = "<i class='fa fa-edit'></i>";
          overlay.appendChild(edit);
          div.appendChild(node);
          div.appendChild(overlay);

          var imgid = "img" + i;
          var th_nail = asset.objthumbnail
            ? asset.objthumbnail
            : "https://fsb.zobj.net/crop.php?r=qEpBmAgJQlOtYSK5lOz77XR83AiINmYurl-s0CZwBULw_FGcrpnc5QbuIqlr1lb5ZiuFD-2EpgERJdGYdjngJAESNHLBXa_L3TAH10rcQW-xXSuvqxbQuRyaFwjzVjW3G7HNq0zV71ptdlKF";
          var elem = `
							<div class="col-sm-2 float-left img-panel" id="media_${asset.id}">
							<div class="overlay">
							<div class="icons float-right mt-3 mr-2">
							<i class="fa fa-star" data-toggle="tooltip" data-placement="top" title="Remove from my favorites" aria-hidden="true"></i>
							<i class="fa fa-ellipsis-h custom-tooltip menu-icon" aria-hidden="true">
							<span class="tooltiptext">
							<h5 class="w-100 float-left"><small>Add to my favorites</small><hr style="margin-bottom: 0;"></h5>

							<div class="w-100 float-left">Crop</div>
							<div class="w-100 float-left edit_info" data-typ="a" data-name="${p_name}" data-tags="${asset.tags}" data-pid='${asset.id}' onclick='editAssetId(this)' data-toggle="modal">Edit</div>
							<h5 onclick='delimg(this)' data-pid='${asset.id}' class="w-100 float-left pt-2"  style="border-top: 1px solid #ccc"><small>Delete</small></h5>
							</span>
							</i>
							</div>
							</div>
							<div class="w-100 float-left col-sm-12 p-0">
							<img class="w-100 pt-4 pb-4 " style="height: 150px" src="${th_nail}" id="${imgid}" data-type="${asset.Assetstype}" data-objfile="${asset.obj}" data-gltffile="${asset.gltf}" onclick="pushObj(this)">;
							</div>
							<div class="mt-1 float-left w-100" id="name_${asset.id}"><small>${p_name}</small></div>
							</div>
							`;
          // console.log(asset, 'asset')
          if (
            (asset.Assetstype == "gltf" && asset.gltf != "") ||
            (asset.Assetstype == "fbx" && asset.fbx != "") ||
            (asset.Assetstype == "obj" && asset.obj != "")
          ) {
            document.getElementById("galleryobjs").appendChild(div);
            $(elem).appendTo("#galleryimgs");
            if (count_img < 6) {
              var elemn = `<img src="${th_nail}" id="${
                imgid + "g"
              }" data-type="${asset.Assetstype}" data-objfile="${
                asset.obj
              }" data-gltffile="${asset.gltf}" onclick="pushObj(this)">`;
              // var elem = `<img src="https://static.wixstatic.com/media/9d7fe992a4814a7eb816b8e6b3767233.jpg/v1/fill/w_90,h_90/9d7fe992a4814a7eb816b8e6b3767233.jpg" data-img="https://static.wixstatic.com/media/9d7fe992a4814a7eb816b8e6b3767233.jpg/v1/fill/w_90,h_90/9d7fe992a4814a7eb816b8e6b3767233.jpg" alt="">`
              $(elemn).appendTo(".3d-gallery-thumb");
            }
            count_img++;
          }
        }
        perm = i;
      }
    },
  });
});

var l = 15;
var m = 20;

function fetchnew() {}
$("body").on("keyup", ".searchObj", function (event) {
  if ($(".searchObj").val() == "") {
    $("#galleryimgs").show();
    document.getElementById("galleryimgsrch").innerHTML = "";
  }
  event.preventDefault();
  if (event.keyCode === 13) {
    $.ajax({
      method: "post",
      url: "http://pitchar.io/user/apis/_search_assets.php",
      data: {
        submit: true,
        authtoken: token,
        tags: $(".searchObj").val(),
      },
      success(result) {
        $("#galleryimgs").hide();
        document.getElementById("galleryimgsrch").innerHTML = "";
        var assets = result.assets;
        // console.log(assets, '3d')
        for (var i = 0; i < assets.length; i++) {
          asset = assets[i];
          var imgid = "img" + i;
          var p_name = asset.Projectname ? asset.Projectname : "None";
          var th_nail = asset.objthumbnail
            ? asset.objthumbnail
            : "https://fsb.zobj.net/crop.php?r=qEpBmAgJQlOtYSK5lOz77XR83AiINmYurl-s0CZwBULw_FGcrpnc5QbuIqlr1lb5ZiuFD-2EpgERJdGYdjngJAESNHLBXa_L3TAH10rcQW-xXSuvqxbQuRyaFwjzVjW3G7HNq0zV71ptdlKF";
          var elem = `
					<div class="col-sm-2 float-left img-panel" id="media_${asset.id}">
					<div class="overlay">
					<div class="icons float-right mt-3 mr-2">
					<i class="fa fa-star" data-toggle="tooltip" data-placement="top" title="Remove from my favorites" aria-hidden="true"></i>
					<i class="fa fa-ellipsis-h custom-tooltip menu-icon" aria-hidden="true">
					<span class="tooltiptext">
					<h5 class="w-100 float-left"><small>Add to my favorites</small><hr style="margin-bottom: 0;"></h5>

					<div class="w-100 float-left">Crop</div>
					<div class="w-100 float-left edit_info" data-typ="a" data-name="${p_name}" data-tags="${asset.tags}" data-pid='${asset.id}' onclick='editAssetId(this)' data-toggle="modal">Edit</div>
					<h5 onclick='delimg(this)' data-pid='${asset.id}' class="w-100 float-left pt-2"  style="border-top: 1px solid #ccc"><small>Delete</small></h5>
					</span>
					</i>
					</div>
					</div>
					<div class="w-100 float-left col-sm-12 p-0">
					<img class="w-100 pt-4 pb-4 " style="height: 150px" src="${th_nail}" id="${imgid}" data-type="${asset.Assetstype}" data-objfile="${asset.obj}" data-gltffile="${asset.gltf}" onclick="pushObj(this)">;
					</div>
					<div class="mt-1 float-left w-100" id="name_${asset.id}"><small>${p_name}</small></div>
					</div>
					`;
          if (
            asset.Assetstype == "zip" ||
            asset.Assetstype == "fbx" ||
            asset.Assetstype == "gltf" ||
            asset.Assetstype == "obj"
          ) {
            $(elem).appendTo("#galleryimgsrch");
          }
        }
      },
    });
  }
});

function delobj(e) {
  $.ajax({
    method: "POST",
    url: "http://pitchar.io/user/apis/_delete-assets.php",
    data: { authtoken: token, product_id: e.dataset.pid },
    success(data) {
      e.parentNode.parentNode.style.display = "none";
    },
  });
}

function uploadObj(event) {
  console.log("im here");
  let form = document.querySelector("#form2");
  let formData = new FormData(form);
  if ($("#gltf").val()) {
    formData.append("name", $("#gltf").val().slice(12, -5));
    formData.append("type", $("#gltf").val().slice(-4));
  } else {
    formData.append("name", $("#obj").val().slice(12, -3));
    formData.append("type", $("#obj").val().slice(-3));
  }

  $.ajax({
    method: "POST",
    url: "https://pitchar.io/api/v1/assets",
    data: formData,
    processData: false,
    contentType: false,
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + accessToken,
    },
    xhr: function () {
      var xhr = new window.XMLHttpRequest();

      // Upload progress
      xhr.upload.addEventListener(
        "progress",
        function (evt) {
          if (evt.lengthComputable) {
            var percentComplete = evt.loaded / evt.total;
            //Do something with upload progress
            uploadbar.style.width = percentComplete * 100 + "%";
            if (percentComplete == 1) uploadbar.style.width = 0;
          }
        },
        false
      );

      // Download progress
      xhr.addEventListener(
        "progress",
        function (evt) {
          if (evt.lengthComputable) {
            var percentComplete = evt.loaded / evt.total;
            // Do something with download progress
            uploadbar.style.width = percentComplete * 100 + "%";
            if (percentComplete == 1) uploadbar.style.width = 0;
          }
        },
        false
      );

      return xhr;
    },
    success(data) {
      $("#obj_label").removeClass("uploaded");
      $("#mtl_label").removeClass("uploaded");
      $("#assets_alert").show();
      setTimeout(() => {
        $("#assets_alert").hide();
      }, 4000);
      console.log(data);
      $(".obj-file.obj").val("");
      $(".obj-file.mtl").val("");
      $(".obj-gltf-file.gltf").val("");
      // var node = document.createElement('img');
      // node.src = data.data.objthumbnail;
      // node.width = 125;
      // node.setAttribute('data-type', asset.type);
      // node.setAttribute('data-objfile', asset.obj);
      // node.setAttribute('data-gltffile', asset.gltf);
      // if (asset.Assetstype == 'obj') node.setAttribute('data-mtlfile', asset.mtl);
      // node.style = 'margin:4px;';
      // node.setAttribute('onclick', 'pushObj(this);');
      // var div = document.createElement('div');
      // div.setAttribute('class', 'hbox');
      // div.appendChild(node);
      // var overlay = document.createElement('div');
      // overlay.setAttribute('class', 'options');
      // var del = document.createElement('button');
      // del.setAttribute('onclick', 'delimg(this)');
      // del.setAttribute('data-pid', asset.id);
      // del.innerHTML = "<i class='fa fa-trash'></i>";
      // overlay.appendChild(del);
      // div.appendChild(node);
      // div.appendChild(overlay);
      // document.getElementById('galleryobjs').appendChild(div);
      // uploadbar.style.width = 0;
      // $('#modal-upload-media').modal('hide');
      // $('#modal-show-more').modal('show');
      // $('.3D-modal-panel .btn-showmore-3d').click()
    },
  });
}
// fetch audio files
k = 0;
let music = document.getElementById("musicbut");
$(".audio_assets").click(function () {
  var panel = $(this).attr("panel-name");
  selectItem("vertical-bars", "active", panel);
  selectItem("left-fixed-bar", "selected", this);

  //   document.getElementById("galleryauds").innerHTML = "";
  //   document.getElementsByClassName("searchbar")[5].value = "";
  //   document.getElementsByClassName("searchbar")[6].value = "";
  var searchFS = document.getElementsByClassName("searchFS");
  //searchFS[0].addEventListener('keyup', function (event) {
  //	event.preventDefault();
  //	if (event.keyCode === 13) {
  //alert("searchFS");

  var settings = {
    async: true,
    crossDomain: true,
    url:
      "https://freesound.org/apiv2/search/text/?query=" +
      searchFS[0].value +
      "&fields=name,previews&token=EGxQRoYUVQsqYXQ5gbbk9oSp5zU9MICs4KEa9404",
    method: "GET",
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
    document.getElementById("fsImgs").innerHTML = "";

    var audResults = response.results;

    console.log(audResults);
    $(".FS_audio").html("");
    $(".free_sound").html("");
    var def_icon =
      "https://i.pinimg.com/564x/9c/02/99/9c0299159f127212cb8c37531b99bd2a.jpg";
    for (var i = 0; i < audResults.length; i++) {
      var node = document.createElement("img");
      node.src = def_icon;
      node.width = 125;
      node.height = 125;
      // node.id = 'img' + i;
      node.style = "margin:4px;";
      // node.setAttribute('onclick', 'pushAud(this);');
      // node.setAttribute('class', 'image');
      // node.setAttribute('data-source', audResults[i].previews['preview-lq-mp3']);
      var div = document.createElement("div");
      div.setAttribute("class", "hbox");
      div.appendChild(node);
      var overlay = document.createElement("div");
      overlay.setAttribute("class", "options");
      // var del = document.createElement('button');
      // del.setAttribute('onclick', 'delaud(this)');
      // del.innerHTML = "<i class='fa fa-trash'></i>";
      // overlay.appendChild(del);
      div.appendChild(node);
      div.appendChild(overlay);
      document.getElementById("fsImgs").appendChild(div);
      $(div).appendTo(".free_sound");
      if (i < 6) {
        $(div).appendTo(".FS_audio");
      }
      //if(media.type=='audio')
      //document.getElementById("galleryauds").appendChild(div);
      //perm=i;

      var audioPrev = document.createElement("button");
      audioPrev.setAttribute(
        "data-source",
        audResults[i].previews["preview-lq-mp3"]
      );
      audioPrev.id = audResults[i].name;
      audioPrev.classList.add("play__audio");
      audioPrev.setAttribute("onclick", "previewAudio(this);");
      audioPrev.innerHTML = "<i class='fa fa-play'></i>";
      overlay.appendChild(audioPrev);
      div.appendChild(node);
      div.appendChild(overlay);

      // var audioLoop = document.createElement('select');
      // audioLoop.id = 'audioLoop' + i;
      // var opt1 = document.createElement('option');
      // opt1.value = 'play once';
      // opt1.innerHTML = 'play once';
      // audioLoop.appendChild(opt1);
      // var opt2 = document.createElement('option');
      // opt2.value = 'repeat';
      // opt2.innerHTML = 'repeat';
      // audioLoop.appendChild(opt2);
      // audioLoop.setAttribute('data-loop', false);
      // audioLoop.setAttribute('onclick', 'toogleLoop(this)');

      var repeat = document.createElement("img");
      repeat.src = "./repeat.png";
      repeat.classList.add("repeat__btn");

      var playOnce = document.createElement("img");
      playOnce.src = "./repeat.png";
      playOnce.classList.add("play-once__btn");

      var addToScene = document.createElement("div");
      addToScene.id = "audioLoop" + i;
      addToScene.classList.add("add-to-scene__btn");

      var hr = document.createElement("hr");
      var addToSceneBtn = document.createElement("button");
      addToSceneBtn.innerHTML = "ADD TO SCENE";
      addToSceneBtn.id = "img" + i;
      addToSceneBtn.setAttribute("onclick", "pushAud(this);");
      addToSceneBtn.setAttribute("class", "image");
      addToSceneBtn.setAttribute(
        "data-source",
        audResults[i].previews["preview-lq-mp3"]
      );

      addToScene.appendChild(hr);
      addToScene.appendChild(addToSceneBtn);

      overlay.appendChild(repeat);
      overlay.appendChild(playOnce);
      overlay.appendChild(addToScene);

      div.appendChild(node);
      div.appendChild(overlay);

      $("#aud_loader").addClass("d-none");
      $(".free_sound").removeClass("d-none");
    }
  });
  //}
  //});
  //   $.ajax({
  //     method: "post",
  //     url: "http://pitchar.io/api/v1/_fetch_media",
  //     data: {
  //       submit: 1,
  //       authtoken: token,
  //     },
  //     dataType: "json",
  //     success(result) {
  //       // console.log('hiiiiiiiiiiiiiii', result)
  //       var medias = result.media;
  //       $(".gallery_audio").html("");
  //       var count_aud = 0;
  //       for (var i = 0; i < medias.length; i++) {
  //         media = medias[i];
  //         var node = document.createElement("img");
  //         node.src = media.thumbnail;
  //         node.width = 125;
  //         node.height = 125;
  //         node.id = "img" + i;
  //         node.style = "margin:4px;";
  //         node.setAttribute("onclick", "pushAud(this)");
  //         node.setAttribute("class", "image");
  //         node.setAttribute("data-source", media.audio);
  //         var div = document.createElement("div");
  //         div.setAttribute("class", "hbox");
  //         div.appendChild(node);
  //         var overlay = document.createElement("div");
  //         overlay.setAttribute("class", "options");
  //         var del = document.createElement("button");
  //         del.setAttribute("onclick", "delaud(this)");
  //         del.innerHTML = "<i class='fa fa-trash'></i>";
  //         del.setAttribute("data-pid", media.id);
  //         overlay.appendChild(del);
  //         div.appendChild(node);
  //         div.appendChild(overlay);

  //         var edit = document.createElement("button");
  //         edit.setAttribute("onclick", "editAssetId(this)");
  //         edit.setAttribute("data-toggle", "modal");
  //         edit.setAttribute("data-target", "#editmodal");
  //         edit.setAttribute("data-pid", media.id);
  //         edit.setAttribute("data-typ", "m");
  //         edit.innerHTML = "<i class='fa fa-edit'></i>";
  //         overlay.appendChild(edit);
  //         var elem = `
  // 				<div class="col-sm-2 float-left img-panel" id="media_${media.id}">
  // 				<div class="overlay">
  // 				<div class="icons float-right mt-3 mr-2">
  // 				<i class="fa fa-star" data-toggle="tooltip" data-placement="top" title="Remove from my favorites" aria-hidden="true"></i>
  // 				<i class="fa fa-ellipsis-h custom-tooltip menu-icon" aria-hidden="true">
  // 				<span class="tooltiptext">
  // 				<h5 class="w-100 float-left"><small>Add to my favorites</small><hr style="margin-bottom: 0;"></h5>

  // 				<div class="w-100 float-left">Crop</div>
  // 				<div data-typ="m" class="w-100 float-left edit_info" data-name="${media.name}" data-tags="${media.tags}" data-pid='${media.id}' onclick='editAssetId(this)' data-toggle="modal">Edit</div>
  // 				<h5 onclick='delaud(this)' data-pid='${media.id}' class="w-100 float-left pt-2"  style="border-top: 1px solid #ccc"><small>Delete</small></h5>
  // 				</span>
  // 				</i>
  // 				</div>
  // 				</div>
  // 				<div class="w-100 float-left col-sm-12 p-0">
  // 				<img class="w-100 pt-4 pb-4 " src="${media.thumbnail}" id="img${i}" data-source="${media.audio}" alt="Chania" style="height: 150px">
  // 				</div>
  // 				</div>
  // 				`;
  //         if (media.type == "audio" && media.audio != "") {
  //           document.getElementById("galleryauds").appendChild(div);
  //           $(elem).appendTo("#galleryimgs");
  //           if (count_aud < 6) {
  //             $(div).appendTo(".gallery_audio");
  //           }
  //           count_aud++;
  //         }
  //         perm = i;

  //         var audioPrev = document.createElement("button");
  //         audioPrev.setAttribute("data-source", media.audio);
  //         audioPrev.setAttribute("onclick", "previewAudio(this);");
  //         audioPrev.innerHTML = "<i class='fa fa-play'></i>";
  //         overlay.appendChild(audioPrev);
  //         div.appendChild(node);
  //         div.appendChild(overlay);

  //         var audioLoop = document.createElement("select");
  //         audioLoop.id = "audioLoop" + i;
  //         var opt1 = document.createElement("option");
  //         opt1.value = "play once";
  //         opt1.innerHTML = "play once";
  //         audioLoop.appendChild(opt1);
  //         var opt2 = document.createElement("option");
  //         opt2.value = "repeat";
  //         opt2.innerHTML = "repeat";
  //         audioLoop.appendChild(opt2);
  //         audioLoop.setAttribute("data-loop", false);
  //         audioLoop.setAttribute("onclick", "toogleLoop(this)");
  //         overlay.appendChild(audioLoop);
  //         div.appendChild(node);
  //         div.appendChild(overlay);
  //       }
  //     },
  //   });
});

var l = 15;
var m = 20;

function fetchnew() {}
$("body").on("keyup", ".searchAud", function (event) {
  event.preventDefault();
  if ($(".searchAud").val() == "") {
    $("#galleryimgs").show();
    document.getElementById("galleryimgsrch").innerHTML = "";
  }
  if (event.keyCode === 13) {
    $.ajax({
      method: "post",
      url: "http://pitchar.io/user/apis/_search_media.php",
      data: {
        submit: true,
        authtoken: token,
        tags: $(".searchAud").val(),
      },
      success(result) {
        $("#galleryimgs").hide();
        document.getElementById("galleryimgsrch").innerHTML = "";

        var medias = result.media;
        for (var i = 0; i < medias.length; i++) {
          media = medias[i];
          var elem = `
					<div class="col-sm-2 float-left img-panel" id="media_${media.id}">
					<div class="overlay">
					<div class="icons float-right mt-3 mr-2">
					<i class="fa fa-star" data-toggle="tooltip" data-placement="top" title="Remove from my favorites" aria-hidden="true"></i>
					<i class="fa fa-ellipsis-h custom-tooltip menu-icon" aria-hidden="true">
					<span class="tooltiptext">
					<h5 class="w-100 float-left"><small>Add to my favorites</small><hr style="margin-bottom: 0;"></h5>

					<div class="w-100 float-left">Crop</div>
					<div data-typ="m" class="w-100 float-left edit_info" data-name="${media.name}" data-tags="${media.tags}" data-pid='${media.id}' onclick='editAssetId(this)' data-toggle="modal">Edit</div>
					<h5 onclick='delaud(this)' data-pid='${media.id}' class="w-100 float-left pt-2"  style="border-top: 1px solid #ccc"><small>Delete</small></h5>
					</span>
					</i>
					</div>
					</div>
					<div class="w-100 float-left col-sm-12 p-0">
					<img class="w-100 pt-4 pb-4 " src="${media.thumbnail}" id="img${i}" data-source="${media.audio}" alt="Chania" style="height: 150px">
					</div>
					</div>
					`;
          if (
            media.type.toLowerCase().includes("audio") &&
            !media.type.toLowerCase().includes("2D" || "360")
          ) {
            $(elem).appendTo("#galleryimgsrch");
          }
          var node = document.createElement("img");
          // node.src = media.thumbnail;
          node.width = 125;
          node.height = 125;
          node.id = "img" + i;
          node.style = "margin:4px;";
          node.setAttribute("onclick", "previewAudio(this);");
          if (media.type == "audio")
            document.getElementById("galleryauds").appendChild(node);
          perm = i;
          var div = document.createElement("div");
          div.setAttribute("class", "hbox");
          div.appendChild(node);
          var overlay = document.createElement("div");
          overlay.setAttribute("class", "options");
          var del = document.createElement("button");
          del.setAttribute("class", "del_audio");
          del.setAttribute("onclick", "delaud(this)");
          del.innerHTML = "<i class='fa fa-trash'></i>";
          del.setAttribute("data-pid", media.id);
          overlay.appendChild(del);
          div.appendChild(node);
          div.appendChild(overlay);
          document.getElementById("galleryauds").appendChild(div);
          var edit = document.createElement("button");
          edit.setAttribute("onclick", "editAssetId(this)");
          edit.setAttribute("data-toggle", "modal");
          edit.setAttribute("data-target", "#editmodal");
          edit.setAttribute("data-pid", media.id);
          edit.setAttribute("data-typ", "m");
          edit.innerHTML = "<i class='fa fa-edit'></i>";
          overlay.appendChild(edit);

          if (
            media.type.toLowerCase().includes("audio") &&
            !media.type.toLowerCase().includes("2D" || "360")
          ) {
            document.getElementById("galleryauds").appendChild(div);
          }
          perm = i;

          var audioPrev = document.createElement("button");
          audioPrev.setAttribute("data-source", media.audio);
          audioPrev.setAttribute("onclick", "previewAudio(this);");
          audioPrev.innerHTML = "<i class='fa fa-play'></i>";
          overlay.appendChild(audioPrev);
          div.appendChild(node);
          div.appendChild(overlay);

          var audioLoop = document.createElement("select");
          audioLoop.id = "audioLoop" + i;
          var opt1 = document.createElement("option");
          opt1.value = "play once";
          opt1.innerHTML = "play once";
          audioLoop.appendChild(opt1);
          var opt2 = document.createElement("option");
          opt2.value = "repeat";
          opt2.innerHTML = "repeat";
          audioLoop.appendChild(opt2);
          audioLoop.setAttribute("data-loop", false);
          audioLoop.setAttribute("onclick", "toogleLoop(this)");
          overlay.appendChild(audioLoop);
          div.appendChild(node);
          div.appendChild(overlay);
        }
      },
    });
  }
});

// var searchFS = document.getElementsByClassName('searchFS');
$("body").on("keyup", ".searchFS", function (event) {
  event.preventDefault();
  var que = $(this).val();
  if (que != "") {
    // console.log(que);
    // if (event.keyCode === 13) {
    //alert("searchFS");
    $("#aud_loader").removeClass("d-none");
    $(".free_sound").hide();
    $(".free_sound_srch").html("");
    var settings = {
      async: true,
      crossDomain: true,
      url:
        "https://freesound.org/apiv2/search/text/?query=" +
        que +
        "&fields=name,previews&token=EGxQRoYUVQsqYXQ5gbbk9oSp5zU9MICs4KEa9404",
      method: "GET",
    };

    $.ajax(settings).done(function (response) {
      // console.log(response);
      document.getElementById("fsImgs").innerHTML = "";

      var audResults = response.results;
      // console.log(audResults, 'audResults')
      var def_icon =
        "https://i.pinimg.com/564x/9c/02/99/9c0299159f127212cb8c37531b99bd2a.jpg";

      console.log(audResults);
      for (var i = 0; i < audResults.length; i++) {
        var node = document.createElement("img");
        node.src = def_icon;
        node.width = 125;
        node.height = 125;
        // node.id = 'img' + i;
        node.style = "margin:4px;";
        var div = document.createElement("div");
        div.setAttribute("class", "hbox");
        div.appendChild(node);
        var overlay = document.createElement("div");
        overlay.setAttribute("class", "options");

        div.appendChild(node);
        div.appendChild(overlay);
        document.getElementById("fsImgs").appendChild(div);
        $(div).appendTo(".free_sound");
        if (i < 6) {
          $(div).appendTo(".FS_audio");
        }
        //if(media.type=='audio')
        //document.getElementById("galleryauds").appendChild(div);
        //perm=i;

        var audioPrev = document.createElement("button");
        audioPrev.setAttribute(
          "data-source",
          audResults[i].previews["preview-lq-mp3"]
        );
        audioPrev.id = audResults[i].name;
        audioPrev.classList.add("play__audio");
        audioPrev.setAttribute("onclick", "previewAudio(this);");
        audioPrev.innerHTML = "<i class='fa fa-play'></i>";
        overlay.appendChild(audioPrev);
        div.appendChild(node);
        div.appendChild(overlay);

        // var audioLoop = document.createElement('select');
        // audioLoop.id = 'audioLoop' + i;
        // var opt1 = document.createElement('option');
        // opt1.value = 'play once';
        // opt1.innerHTML = 'play once';
        // audioLoop.appendChild(opt1);
        // var opt2 = document.createElement('option');
        // opt2.value = 'repeat';
        // opt2.innerHTML = 'repeat';
        // audioLoop.appendChild(opt2);
        // audioLoop.setAttribute('data-loop', false);
        // audioLoop.setAttribute('onclick', 'toogleLoop(this)');

        var repeat = document.createElement("img");
        repeat.src = "./repeat.png";
        repeat.classList.add("repeat__btn");

        var playOnce = document.createElement("img");
        playOnce.src = "./repeat.png";
        playOnce.classList.add("play-once__btn");

        var addToScene = document.createElement("div");
        addToScene.id = "audioLoop" + i;
        addToScene.classList.add("add-to-scene__btn");

        var hr = document.createElement("hr");
        var addToSceneBtn = document.createElement("button");
        addToSceneBtn.innerHTML = "ADD TO SCENE";
        addToSceneBtn.id = "img" + i;
        addToSceneBtn.setAttribute("onclick", "pushAud(this);");
        addToSceneBtn.setAttribute("class", "image");
        addToSceneBtn.setAttribute(
          "data-source",
          audResults[i].previews["preview-lq-mp3"]
        );

        addToScene.appendChild(hr);
        addToScene.appendChild(addToSceneBtn);

        overlay.appendChild(repeat);
        overlay.appendChild(playOnce);
        overlay.appendChild(addToScene);

        div.appendChild(node);
        div.appendChild(overlay);

        // $(".free_sound").hide();

        $(div).appendTo(".free_sound_srch");

        $("#aud_loader").addClass("d-none");
        $(".free_sound_srch").removeClass("d-none");
      }
    });
    // }
  } else {
    $("#aud_loader").addClass("d-none");
    $(".free_sound").show();
    $(".free_sound_srch").hide();
  }
});

function delaud(e) {
  $.ajax({
    method: "POST",
    url: "http://pitchar.io/user/apis/_delete-media.php",
    data: { authtoken: token, product_id: e.dataset.pid },
    success(data) {
      e.parentNode.parentNode.style.display = "none";
    },
  });
}

// to upload audio files
function uploadAud(file) {
  console.log("File: ", file);
  let audioForm = new FormData();
  audioForm.append("audio", file);
  audioForm.append("name", file.name);
  audioForm.append("type", "audio");
  $.ajax({
    method: "POST",
    url: "https://pitchar.io/api/v1/medias",
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + accessToken,
    },
    data: audioForm,
    processData: false,
    contentType: false,
    xhr: function () {
      var xhr = new window.XMLHttpRequest();

      // Upload progress
      xhr.upload.addEventListener(
        "progress",
        function (evt) {
          if (evt.lengthComputable) {
            var percentComplete = evt.loaded / evt.total;
            //Do something with upload progress
            uploadbar.style.width = percentComplete * 100 + "%";
            if (percentComplete == 1) uploadbar.style.width = 0;
          }
        },
        false
      );

      // Download progress
      xhr.addEventListener(
        "progress",
        function (evt) {
          if (evt.lengthComputable) {
            var percentComplete = evt.loaded / evt.total;
            // Do something with download progress
            uploadbar.style.width = percentComplete * 100 + "%";
            if (percentComplete == 1) uploadbar.style.width = 0;
          }
        },
        false
      );

      return xhr;
    },
    success(data) {
      console.log(data);
      // uploadbar.style.width = 0;
      // var node = document.createElement("img");
      // node.src = data.data.thumbnail;
      // node.width = 125;
      // node.height = 125;
      // node.id = "img" + perm;
      // node.style = "margin:4px;";
      // node.setAttribute("onclick", "pushAud(this);");
      // document.getElementById("galleryauds").appendChild(node);
      // $(".audio-panel .btn-showmore").click();
    },
  });
}
//change video type
function chgcheck(e) {
  if (e.checked) {
    var typ = document.getElementById("check360");
    typ.value = "360";
  }
}

// upload video
function uploadVid(files) {
  console.log("Ok again");
  let form = document.querySelector("#form6");
  let formData = new FormData(form);
  let input = document.getElementById("video");
  let input360 = document.getElementById("360video");
  if ($("#video").val()) {
    console.log("video");
    formData.append("name", $("#video").val().slice(12, -3));
    formData.append("video", input.files[0]);
  } else if ($("#360video").val()) {
    console.log("360video");
    formData.append("name", $("#360video").val().slice(12, -3));
    formData.append("type", "360");
    formData.append("video", input360.files[0]);
  }

  // var div = document.createElement('div');
  // div.id = 'upbar';
  // event.closest('.modal-body').append(div);
  $.ajax({
    method: "POST",
    url: "https://pitchar.io/api/v1/medias",
    data: formData,
    processData: false,
    contentType: false,
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + accessToken,
    },
    xhr: function () {
      var xhr = new window.XMLHttpRequest();

      // Upload progress
      xhr.upload.addEventListener(
        "progress",
        function (evt) {
          if (evt.lengthComputable) {
            var percentComplete = evt.loaded / evt.total;
            //Do something with upload progress
            uploadbar.style.width = percentComplete * 100 + "%";
            if (percentComplete == 1) uploadbar.style.width = 0;
          }
        },
        false
      );

      // Download progress
      xhr.addEventListener(
        "progress",
        function (evt) {
          if (evt.lengthComputable) {
            var percentComplete = evt.loaded / evt.total;
            // Do something with download progress
            uploadbar.style.width = percentComplete * 100 + "%";
            if (percentComplete == 1) uploadbar.style.width = 0;
          }
        },
        false
      );

      return xhr;
    },
    success(data) {
      console.log(data);
      $("#assets_alert").show();
      setTimeout(() => {
        $("#assets_alert").hide();
      }, 4000);
      $("#video").val("");
      $("#360video").val("");
      uploadbar.style.width = 0;
      var node = document.createElement("img");
      node.src = data.data.thumbnail;
      node.width = 125;
      node.height = 125;
      node.id = "img" + perm;
      node.style = "margin:4px;";
      node.setAttribute("onclick", "pushVid(this);");
      node.setAttribute("data-source", data.data.video);
      node.setAttribute("data-type", data.data.type);
      var div = document.createElement("div");
      div.setAttribute("class", "hbox");
      div.appendChild(node);
      var overlay = document.createElement("div");
      overlay.setAttribute("class", "options");
      var del = document.createElement("button");
      del.innerHTML = "<i class='fa fa-trash'></i>";
      overlay.appendChild(del);
      div.appendChild(node);
      div.appendChild(overlay);

      document.getElementById("galleryvids").appendChild(div);
      $(".vedio-panel .btn-showmore").click();
    },
  });
}

function delVideo(id) {
  $.ajax({
    method: "DELETE",
    url: `https://pitchar.io/api/v1/medias/${id}`,
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + accessToken,
    },
    success(data) {
      console.log(data);
    },
  });
}

// to fetch videos
let video = document.getElementById("videobut");
$(".video_assets").click(function () {
  console.log('pls')
  // console.log('Check')
  var panel = $(this).attr("panel-name");
  selectItem("vertical-bars", "active", panel);
  selectItem("left-fixed-bar", "selected", this);

  document.getElementById("galleryvids").innerHTML = "";
  // document.getElementsByClassName("searchbar")[7].value="";
  //document.getElementsByClassName("searchbar")[8].value="";
  var searchYT = document.getElementsByClassName("searchYT");
  // searchYT[0].addEventListener('keyup', function(event) {
  //     event.preventDefault();
  // if (event.keyCode === 13) {
  var q = searchYT[0].value;
  console.log(gapi);
  var request = gapi.client.youtube.search.list({
    q: q,
    maxResults: 12,
    type: "video",
    part: "snippet",
    videoEmbeddable: "true",
    videoSyndicated: "true",
  });

  request.execute(function (response) {
    document.getElementById("ytImgs").innerHTML = "";
    var assets = response.items;
    if (!assets) {
      $('.vid_youtube').html('')
      let youtubeTitle = `
          <h3
            style="
              width: 100%;
              font-size: 16px;
              color: gray;
              margin-top: 0;
              margin-bottom: 0;
              color: #b0bac9;
            "
          >You reached the meximum amount</h3><br>
      `;
      $(youtubeTitle).appendTo(".vid_youtube");
      return;
    }
    $(".vid_youtube").html("");
    let youtubeTitle = `
          <h4
            style="
              width: 100%;
              font-size: 12px;
              color: gray;
              margin-top: 0;
              margin-bottom: 0;
              color: #b0bac9;
            "
          >YOUTUBE</h4><br>
      `;
    $(youtubeTitle).appendTo(".vid_youtube");

    console.log('assets' , assets)
    
    for (var i = 0; i < 6; i++) {
      let asset = assets[i];
      var src = asset.snippet.thumbnails.high.url;
      var id = "ytimg" + i;
      // node.style = "margin: 5px;";
      var ele = `<img data-typ="m" data-type="" data-pid="${id}" src="${src}" id="${id}" data-source="${asset.id.videoId}" onclick="pushYT(this);" alt="">`;
      $(ele).appendTo(".vid_youtube");
    }

    $(".you_tube").html("");
    
    $(youtubeTitle).appendTo(".you_tube");
    for (var i = 0; i < assets.length; i++) {
      asset = assets[i];
      var node = document.createElement("img");
      node.src = asset.snippet.thumbnails.high.url;
      // node.width = 125;
      node.id = "ytimg" + i;
      node.style = "max-width:50%";
      node.style = "margin: 5px;";
      node.setAttribute("onclick", "pushYT(this);");
      node.setAttribute("data-source", asset.id.videoId);
      document.getElementById("ytImgs").appendChild(node);
      $(node).appendTo(".you_tube");
      perm = i;
    }
  });
  // }
  // });

  $.ajax({
    method: "GET",
    url: "https://pitchar.io/api/v1/medias",
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + accessToken,
    },
    success({ data: { data } }) {
      console.log(data);
      var medias = data;
      if (medias.length > 0) {
        $(".video_gallery").html("");
        var count_vid = 0;
        let assetsTitle = `
          <h4
            style="
              width: 100%;
              font-size: 12px;
              color: gray;
              margin-top: 0;
              margin-bottom: 0;
              color: #b0bac9;
            "
          >ASSETS</h4><br>
      `;
        $(assetsTitle).appendTo(".video_gallery");
        for (var i = 0; i < medias.length; i++) {
          media = medias[i];
          var node = document.createElement("img");
          node.src = media.thumbnail;
          node.width = 125;
          node.height = 125;
          node.id = "img" + i;
          node.style = "margin:4px;";
          node.setAttribute("onclick", "pushVid(this);");
          node.setAttribute("class", "image");
          node.setAttribute("data-source", media.video);
          node.setAttribute("data-type", media.type);
          var div = document.createElement("div");
          div.setAttribute("class", "hbox");
          div.appendChild(node);
          var overlay = document.createElement("div");
          overlay.setAttribute("class", "options");
          var del = document.createElement("button");
          del.setAttribute("onclick", "delaud(this)");
          del.innerHTML = "<i class='fa fa-trash'></i>";
          del.setAttribute("data-pid", media.id);
          overlay.appendChild(del);
          var edit = document.createElement("button");
          edit.setAttribute("onclick", "editAssetId(this)");
          edit.setAttribute("data-toggle", "modal");
          edit.setAttribute("data-target", "#editmodal");
          edit.setAttribute("data-pid", media.id);
          edit.setAttribute("data-typ", "m");
          edit.innerHTML = "<i class='fa fa-edit'></i>";
          overlay.appendChild(edit);
          var videotype = document.createElement("button");
          videotype.innerHTML =
            "<b style='position:absolute;left:2px;top:2px;'>" +
            media.type +
            "</b>";
          overlay.appendChild(videotype);
          div.appendChild(overlay);
          if (media.video) {
            src = `https://pitchar.io/storage/${media.video}`;
          } else if (media.audio) {
            src = `https://pitchar.io/storage/${media.audio}`;
          }
          console.log(media);
          var imgid = `uploadsVid${i}`;
          var dropdownId = `myDropdownVid${i}`;
          var inputId = `inputVid${i}`;
          var checkId = `rename__checkVid${i}`;
          media.name = media.name.toUpperCase();
          var format = src.slice(-3).toUpperCase();
          var type = `${media.type}`;
          console.log(type);
          var elem = `
          <div class="upload__wrap">
            <div class="dropdown">
              <button onclick="myFunction(${dropdownId})" class="dropbtn upload__description">
                <i style="color: black" class="fa fa-ellipsis-v"></i>
              </button>
              <div id="${dropdownId}" class="dropdown-content">
                <div class="d-flex align-items-center">
                  <input class="rename__input" id="${inputId}" readonly="true" style="padding: 0 9px; border: 0; width: 100%;" value="${media.name}"/> <i id="${checkId}" onclick="editVideoName(${media.id}, ${inputId}, ${checkId})" style="opacity: 0; padding-right: 8px;" class="fas fa-check"></i>
                </div>
                <small style="color: gray; padding: 0 9px;">FILE TYPE: ${format}</small> <br>
                <hr style="margin: .5em 0;">
                <a onclick="renameAsset(${inputId}, ${checkId})" ><i style="padding-right: 4px" class="fas fa-pen"></i> <b>RENAME</b></a>
                <a onclick="delVideo(${media.id})" ><i style="padding-right: 6.2px" class="fas fa-trash"></i> <b>DELETE</b></a>
              </div>
            </div>
            <div
              onclick="clickVid(${imgid})"
            >
              <img data-type="${media.type}" src="https://pitchar.io/storage/${data.thumbnail}" data-source="${src}" id="${imgid}" onclick="pushVid(this);" />
            </div>
          </div>`;
          // var elem = `
					// <div class="col-sm-2 float-left img-panel" id="media_${media.id}">
					// <div class="overlay">
					// 	<div class="icons float-right mt-3 mr-2">
					// 	  <i class="fa fa-star" data-toggle="tooltip" data-placement="top" title="Remove from my favorites" aria-hidden="true"></i>
					// 	  <i class="fa fa-ellipsis-h custom-tooltip menu-icon" aria-hidden="true">
					// 		  <span class="tooltiptext">
					// 			<h5 class="w-100 float-left"><small>Add to my favorites</small><hr style="margin-bottom: 0;"></h5>

					// 			<div class="w-100 float-left">Crop</div>
					// 			<div data-typ="m" class="w-100 float-left edit_info" data-name="${media.name}" data-tags="${media.tags}" data-pid='${media.id}' onclick='editAssetId(this)' data-toggle="modal">Edit</div>
					// 			<h5 onclick='delimg(this)' data-pid='${media.id}' class="w-100 float-left pt-2"  style="border-top: 1px solid #ccc"><small>Delete</small></h5>
					// 		  </span>
					// 	  </i>
					// 	</div>
					//   </div>
					// <div class="w-100 float-left col-sm-12 p-0">
					//   <img class="w-100 pt-4 pb-4 " data-type="${media.type}" data-source="https://pitchar.io/storage/${media.video}" src="${media.thumbnail}" id="img${i}" alt="Chania" style="height: 150px" onclick="pushVid(this);">
					// </div>

				  // </div>
					// `;
          if ((media.type == "2D" || media.type == "360") && media.video) {
            $(elem).appendTo("#galleryimgs");
            document.getElementById("galleryvids").appendChild(div);
            var id = "img" + i;
            if (count_vid < 6) {
              var ele = `<img data-typ="m" data-type="${media.type}" data-pid="${media.id}" src="${media.thumbnail}" id="${id}" data-source="https://pitchar.io/storage/${media.video}" onclick="pushVid(this);" alt="">`;
              $(ele).appendTo(".video_gallery");
              count_vid++;
            }
          }
          perm = i;
        }
      }
    },
  });
});

var l = 15;
var m = 20;

function fetchnew() {}
$("body").on("keyup", ".searchVid", function (event) {
  event.preventDefault();
  if ($(".searchVid").val() == "") {
    document.getElementById("galleryimgsrch").innerHTML = "";
    $("#galleryimgs").show();
  }
  if (event.keyCode === 13) {
    $.ajax({
      method: "post",
      url: "http://pitchar.io/user/apis/_search_media.php",
      data: {
        submit: true,
        authtoken: token,
        tags: $(".searchVid").val(),
      },
      success(result) {
        $("#galleryimgs").hide();
        document.getElementById("galleryvids").innerHTML = "";
        var medias = result.media;

        for (var i = 0; i < medias.length; i++) {
          media = medias[i];
          var elem = `
					<div class="col-sm-2 float-left img-panel" id="media_${media.id}">
					<div class="overlay">
						<div class="icons float-right mt-3 mr-2">
						  <i class="fa fa-star" data-toggle="tooltip" data-placement="top" title="Remove from my favorites" aria-hidden="true"></i>
						  <i class="fa fa-ellipsis-h custom-tooltip menu-icon" aria-hidden="true">
							  <span class="tooltiptext">
								<h5 class="w-100 float-left"><small>Add to my favorites</small><hr style="margin-bottom: 0;"></h5>

								<div class="w-100 float-left">Crop</div>
								<div data-typ="m" class="w-100 float-left edit_info" data-name="${media.name}" data-tags="${media.tags}" data-pid='${media.id}' onclick='editAssetId(this)' data-toggle="modal">Edit</div>
								<h5 onclick='delimg(this)' data-pid='${media.id}' class="w-100 float-left pt-2"  style="border-top: 1px solid #ccc"><small>Delete</small></h5>
							  </span>
						  </i>
						</div>
					  </div>
					<div class="w-100 float-left col-sm-12 p-0">
					  <img class="w-100 pt-4 pb-4 " data-type="${media.type}" data-source="${media.video}" src="${media.thumbnail}" id="img${i}" alt="Chania" style="height: 150px" onclick="pushVid(this);">
					</div>

				  </div>
					`;
          if ((media.type == "2D" || media.type == "360") && media.video) {
            $(elem).appendTo("#galleryimgsrch");
          }
          var node = document.createElement("img");
          node.src = media.thumbnail;
          node.width = 125;
          node.height = 125;
          node.id = "img" + i;
          node.style = "margin:4px;";
          node.setAttribute("onclick", "pushVid(this);");
          if (media.type == "2D" || media.type == "360")
            document.getElementById("galleryvids").appendChild(node);
          perm = i;
        }
      },
    });
  }
});

//video functionalities
function chgvidtype(e) {
  if (e.checked) {
    document.getElementById("vidtype").value = "360";
  } else {
    document.getElementById("vidtype").value = "2D";
  }
}

// googlePoly Integration
var scene = new THREE.Scene();
var container = new THREE.Group();
scene.add(container);

const API_KEY = "AIzaSyANZMpdihFsQgcJkFIEjasfiLgX6Nyb8SE";
$("body").on("keyup", ".searchGooglePoly", function (event) {
  event.preventDefault();

  var que = $(this).val();
  console.log(que);
  if (que !== "") {
    // if (event.keyCode === 13) {
    //alert("searchGooglePoly");

    var settings = {
      async: true,
      crossDomain: true,
      url: `https://poly.googleapis.com/v1/assets?keywords=${que}&format=OBJ&key=${API_KEY}`,
      method: "GET",
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
      $(".googlepoly_srch").html("");
      $("#loader").removeClass("d-none");
      $(".googlepoly_srch").addClass("d-none");
      $(".googlepolyImgs").addClass("d-none");
      // document.getElementById("googlePolyImgs").innerHTML = "";

      var modResults = response.assets;
      // console.log(modResults, 'test');
      console.log(modResults);
      for (var i = 0; i < 10; i++) {
        console.log(modResults[i]);
        var src = modResults[i].thumbnail.url;
        var format = modResults[i].formats.find((format) => {
          return format.formatType === "OBJ";
        });
        var obj = format.root;
        var mtl = format.resources.find((resource) => {
          return resource.url.endsWith("mtl");
        });
        var imgid = "img" + i;
        var elem = `
                  <div
                      class="img__wrap"
                      data-source="${modResults[i].name}"
                      id="${imgid}"
                      data-obj="${obj.url}"
                      data-mtl="${mtl.url}"
                      onclick="pushPolyModel(this);"
                  >
                      <img
                          src="${src}"    
                      />
                      <p class="img__description"><span>${modResults[
                        i
                      ].displayName.slice(0, 10)}<span></p>
                  </div>
              `;

        // var del = document.createElement('button');
        // del.setAttribute('onclick', 'delaud(this)');
        // del.innerHTML = "<i class='fa fa-trash'></i>";
        // overlay.appendChild(del);
        // div.appendChild(elem);
        // document.getElementById('googlePolyImgs').appendChild(elem);

        $(elem).appendTo(".googlepoly_srch");
        // div.appendChild(elem);
      }
      $(".googlepoly_srch").removeClass("d-none");
      $("#loader").addClass("d-none");
    });
    // }
  } else {
    $("#loader").addClass("d-none");
    $(".googlepoly_srch").addClass("d-none");
    $(".googlepolyImgs").removeClass("d-none");

    // $(".googlepolyImgs").show();
  }
});

function pushPolyModel(e) {
  console.log(e.dataset);
  // var loader = new THREE.MTLLoader();
  // loader.setCrossOrigin( true );
  // loader.setMaterialOptions( { ignoreZeroRGBs: true } );
  // loader.setTexturePath( path );
  // loader.load( mtl.url, function ( materials ) {

  //   var loader = new THREE.OBJLoader();
  //   loader.setMaterials( materials );
  //   loader.load( obj.url, function ( object ) {

  var node = document.createElement("a-entity");
  node.setAttribute("rotation", { x: 0, y: 0, z: 0 });
  node.setAttribute("visible", "true");
  node.setAttribute("scale", { x: 1, y: 1, z: 1 });

  node.setAttribute("obj-model", {
    obj: e.dataset.obj,
    mtl: e.dataset.mtl,
  });

  node.id = e.id + "3d";
  node.object3D.position.set(0, 0.1, 0);
  node.object3D.rotation.set(0, 1.57, 0);
  node.object3D.scale.set(0.7, 0.7, 0.7);
  node.setAttribute("click-drag", "");
  node.classList.add("exp");
  node.setAttribute("loaded", "objectloaded()");
  document.getElementById("perswin").appendChild(node);
  $("#assets .close").click();
  $(".modal-backdrop").remove();
  objectloaded(node.id);

  // // re-center
  // var center = box.getCenter();
  // center.y = box.min.y;
  // object.position.sub( center );

  // // scale
  // var scaler = new THREE.Group();
  // scaler.add( object );
  // scaler.scale.setScalar( 6 / box.getSize().length() );
  // container.add( scaler );
  // } );

  // } );
}

async function objectloaded(id) {
  object = document.getElementById(id);
  try {
    var objectd = object.getObject3D("mesh");
    var sphere = new THREE.Sphere();
    var bbox = new THREE.Box3().setFromObject(objectd);
    bbox.getBoundingSphere(sphere);
    var dia = sphere.radius;
    var pow = Math.pow(dia, -1);
    object.object3D.scale.x = pow;
    object.object3D.scale.y = pow;
    object.object3D.scale.z = pow;
  } catch (err) {
    setTimeout(function () {
      objectloaded(id);
    }, 2000);
  }
}

document
  .getElementById("choosemarkerbut")
  .addEventListener("click", function (e) {
    // document.getElementById('gallerymarkers').innerHTML = "<img src='marker/hiro.png' width='150px' style='padding:5px;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);' onclick='resetMarker(this);'>";
    fetchMarkers();
  });

function clickMarker(e) {
  $(`#${e.id}`).on("click", function (e) {
    e.stopPropagation();
  });
  $(`#${e.id}`).click();
}

$("#uploads_panel_btn").click(async function () {
  await fetchUplodsPics();
  await fetchUploadMedia();
  await fetchModels();
  await fetchAudio();
});

function renameAsset(input, check) {
  document.getElementById(input.id).readOnly = false;
  document.getElementById(check.id).style.opacity = 1;
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction(e) {
  var dropdowns = document.getElementsByClassName("dropdown-content");
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains("show") && openDropdown.id !== e.id) {
      openDropdown.classList.remove("show");
    }
  }
  document.getElementById(e.id).classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// $.ajax({
//   method: "POST",
//   url: "http://pitchar.io/api/v1/_fetch_markers",
//   data: { authtoken: token, submit: 1 },
//   success(data) {
//     console.log(data);
//     if (!data.data) return;
//     var markers = data.Data;
//     for (var i = 0; i < markers.length; i++) {
//       marker = markers[i];
//       // var node = document.createElement('img');
//       // // node.src = marker.linkmarker;
//       // node.id = 'markerimg' + i;
//       // node.style = 'padding:5px;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);width:150px;';
//       // node.setAttribute('onclick', 'selectMarker(this);');
//       // node.setAttribute('data-markerid', marker.id);
//       // document.getElementById('gallerymarkers').appendChild(node);
//       var elem = `
//             <div class="col-sm-2 float-left img-panel" id="media_">
//             <div class="overlay">
//                     <div class="icons float-right mt-3 mr-2">
//                       <i class="fa fa-star" data-toggle="tooltip" data-placement="top" title="Remove from my favorites" aria-hidden="true"></i>

//                       </i>
//                     </div>
//                   </div>
//             <div class="w-100 float-left col-sm-12 p-0">

//               <img data-markerid="${marker.id}" class="w-100 pt-4 pb-4 " src="${marker.linkmarker}" id="'markerimg'+${i}" onclick="selectMarker(this);" alt="Chania" style="height: 150px">
//             </div>
//             <div class="mt-1 float-left w-100" id="name_"><small></small></div>
//           </div>`;
//       // $('#gallerymarkers').append(elem);
//       $("#unsplash_thumb_marker").append(elem);
//     }
//   },
// });

function fetchfetching(url) {
  return $.ajax({
    method: "GET",
    url,
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + accessToken,
    },
  });
}

async function fetchUplodsPics() {
  $("#unsplash_thumb_upload").html("");
  $("#upload_loader").removeClass("d-none");
  $("#unsplash_thumb_upload").addClass("d-none");

  let {
    data: { data },
  } = await fetchfetching("https://pitchar.io/api/v1/assets");
  if (!data.length) return;
  console.log(data);
  let imagesTitle = `
      <h4
        style="
          width: 100%;
          font-size: 12px;
          color: gray;
          margin-top: 0;
          margin-bottom: 0;
          color: #b0bac9;
        "
      >IMAGES</h4><br>
    `;
  $(imagesTitle).appendTo("#unsplash_thumb_upload");

  var assets = data;
  // var count_ast = 0;
  for (var i = 0; i < assets.length; i++) {
    var asset = assets[i];
    var src = asset.image;
    var imgid = `uploadsImg${i}`;
    var dropdownId = `myDropdown${i}`;
    var inputId = `input${i}`;
    var checkId = `rename__check${i}`;
    asset.name = asset.name.toUpperCase();
    var format = src ? src.slice(-3).toUpperCase() : "N/A";

    if (asset.type === "image" && asset.image !== "") {
      // if (count_ast < 6) {
      //     var imag = `<img src="https://pitchar.io/storage/${src}" onclick="pushImg(this);"  alt="">`;
      //     $(imag).appendTo('#unsplash_thumb_upload');
      // }
      // count_ast++;

      var elem = `
          <div class="upload__wrap">
            <div class="dropdown">
              <button onclick="myFunction(${dropdownId})" class="dropbtn upload__description">
                <i style="color: black" class="fa fa-ellipsis-v"></i>
              </button>
              <div id="${dropdownId}" class="dropdown-content">
                <div class="d-flex align-items-center">
                  <input class="rename__input" id="${inputId}" readonly="true" style="padding: 0 9px; border: 0; width: 100%;" value="${asset.name}"/> <i id="${checkId}" onclick="editNameAsset(${asset.id}, ${inputId}, ${checkId}, 'image')" style="opacity: 0; padding-right: 8px;" class="fas fa-check"></i>
                </div>
                <small style="color: gray; padding: 0 9px;">FILE TYPE: ${format}</small> <br>
                <hr style="margin: .5em 0;">
                <a onclick="renameAsset(${inputId}, ${checkId})" ><i style="padding-right: 4px" class="fas fa-pen"></i> <b>RENAME</b></a>
                <a onclick="delimg(${asset.id})" ><i style="padding-right: 6.2px" class="fas fa-trash"></i> <b>DELETE</b></a>
              </div>
            </div>
            <div
              onclick="clickImg(${imgid})"
            >
              <img
                src="https://pitchar.io/storage/${src}"
                id="${imgid}"
                onclick="pushImg(this);"
                crossorigin="anonymous"
                alt="${imgid}"
                style="margin: 5px 1px;"
              />
            </div>
          </div>`;

      $(elem).appendTo("#unsplash_thumb_upload");
    }
  }
  setTimeout(() => {
    $("#upload_loader").addClass("d-none");
    $("#unsplash_thumb_upload").removeClass("d-none");
  }, 1000);
  // Fetch Images
  // $.ajax({
  //   method: "GET",
  //   async: true,
  //   url: "https://pitchar.io/api/v1/assets",
  //   headers: {
  //     Accept: "application/json",
  //     Authorization: "Bearer " + accessToken,
  //   },
  //   success({ data: { data } }) {

  //   },
  // });
}

async function fetchUploadMedia() {
  let {
    data: { data },
  } = await fetchfetching("https://pitchar.io/api/v1/medias");
  if (!data.length) return;
  console.log(data);
  let videosTitle = `
    <br> <h4
      style="
        width: 100%;
        font-size: 12px;
        color: gray;
        margin-bottom: 0;
        color: #b0bac9;
      "
    >MEDIA & MODELS</h4><br>
  `;
  $(videosTitle).appendTo("#unsplash_thumb_upload");

  for (var i = 0; i < data.length; i++) {
    var asset = data[i];
    var src = asset.video;
    console.log(asset);
    if (!src) continue;
    if (asset.video) {
      src = `https://pitchar.io/storage/${asset.video}`;
    } else if (asset.audio) {
      src = `https://pitchar.io/storage/${asset.audio}`;
    }
    console.log(asset);
    var imgid = `uploadsVid${i}`;
    var dropdownId = `myDropdownVid${i}`;
    var inputId = `inputVid${i}`;
    var checkId = `rename__checkVid${i}`;
    asset.name = asset.name.toUpperCase();
    var format = src.slice(-3).toUpperCase();
    var type = `${asset.type}`;
    console.log(type);

    // if (asset.type === "image" && asset.image !== "") {
    // if (count_ast < 6) {
    //     var imag = `<img src="https://pitchar.io/storage/${src}" onclick="pushImg(this);"  alt="">`;
    //     $(imag).appendTo('#unsplash_thumb_upload');
    // }
    // count_ast++;

    // var elem = `
    //     <div class="upload__wrap">
    //       <div class="dropdown">
    //         <button onclick="myFunction(${dropdownId})" class="dropbtn upload__description">
    //           <i style="color: black" class="fa fa-ellipsis-v"></i>
    //         </button>
    //         <div id="${dropdownId}" class="dropdown-content">
    //           <div class="d-flex align-items-center">
    //             <input class="rename__input" id="${inputId}" readonly="true" style="padding: 0 9px; border: 0; width: 100%;" value="${asset.name}"/> <i id="${checkId}" onclick="editVideoName(${asset.id}, ${inputId}, ${checkId})" style="opacity: 0; padding-right: 8px;" class="fas fa-check"></i>
    //           </div>
    //           <small style="color: gray; padding: 0 9px;">FILE TYPE: ${format}</small> <br>
    //           <hr style="margin: .5em 0;">
    //           <a onclick="renameAsset(${inputId}, ${checkId})" ><i style="padding-right: 4px" class="fas fa-pen"></i> <b>RENAME</b></a>
    //           <a onclick="delVideo(${asset.id})" ><i style="padding-right: 6.2px" class="fas fa-trash"></i> <b>DELETE</b></a>
    //         </div>
    //       </div>
    //       <div
    //         onclick="clickVid(${imgid})"
    //       >
    //         <video autoplay="0" data-type="${asset.type}" src="${src}" poster="${src}" width="120" height="140" id="${imgid}" onclick="pushVid(this);">
    //           <source src="${src}#t=0.1" type="video/mp4">
    //         </video>
    //       </div>
    //     </div>`;

    if (asset.video) {
      var elem = `
            <div class="upload__wrap">
              <div class="dropdown">
                <button onclick="myFunction(${dropdownId})" class="dropbtn upload__description">
                  <i style="color: black" class="fa fa-ellipsis-v"></i>
                </button>
                <div id="${dropdownId}" class="dropdown-content">
                  <div class="d-flex align-items-center">
                    <input class="rename__input" id="${inputId}" readonly="true" style="padding: 0 9px; border: 0; width: 100%;" value="${asset.name}"/> <i id="${checkId}" onclick="editVideoName(${asset.id}, ${inputId}, ${checkId})" style="opacity: 0; padding-right: 8px;" class="fas fa-check"></i>
                  </div>
                  <small style="color: gray; padding: 0 9px;">FILE TYPE: ${format}</small> <br>
                  <hr style="margin: .5em 0;">
                  <a onclick="renameAsset(${inputId}, ${checkId})" ><i style="padding-right: 4px" class="fas fa-pen"></i> <b>RENAME</b></a>
                  <a onclick="delVideo(${asset.id})" ><i style="padding-right: 6.2px" class="fas fa-trash"></i> <b>DELETE</b></a>
                </div>
              </div>
              <div
                onclick="clickVid(${imgid})"
              >
                <img data-type="${asset.type}" src="https://pitchar.io/storage/${data.thumbnail}" data-source="${src}" id="${imgid}" onclick="pushVid(this);" />
              </div>
            </div>`;
    } else if (asset.audio) {
      var elem = `
          <div class="upload__wrap">
            <div class="dropdown">
              <button onclick="myFunction(${dropdownId})" class="dropbtn upload__description">
                <i style="color: black" class="fa fa-ellipsis-v"></i>
              </button>
              <div id="${dropdownId}" class="dropdown-content">
                <div class="d-flex align-items-center">
                  <input class="rename__input" id="${inputId}" readonly="true" style="padding: 0 9px; border: 0; width: 100%;" value="${asset.name}"/> <i id="${checkId}" onclick="editVideoName(${asset.id}, ${inputId}, ${checkId})" style="opacity: 0; padding-right: 8px;" class="fas fa-check"></i>
                </div>
                <small style="color: gray; padding: 0 9px;">FILE TYPE: ${format}</small> <br>
                <hr style="margin: .5em 0;">
                <a onclick="renameAsset(${inputId}, ${checkId})" ><i style="padding-right: 4px" class="fas fa-pen"></i> <b>RENAME</b></a>
                <a onclick="delVideo(${asset.id})" ><i style="padding-right: 6.2px" class="fas fa-trash"></i> <b>DELETE</b></a>
              </div>
            </div>
            <div
              onclick="clickVid(${imgid})"
            >
              <img data-type="${asset.type}" src="https://pitchar.io/storage/${data.thumbnail}" data-source="${src}" id="${imgid}" onclick="pushAud(this);" />
            </div>
          </div>`;
    }

    $(elem).appendTo("#unsplash_thumb_upload");
    // }
  }
  // for (var i = 0; i < data.length; i++) {
  //   var media = data[i];
  //   if (!media.video) continue
  //   console.log(media)

  //   var elem = `
  //   <div class="img-panel" id="media_${media.id}">
  //     <div class="w-100 float-left col-sm-12 p-0">
  //       <video width="120" height="140" controls  id="img${i}" onclick="pushVid(this);">
  //         <source src="https://pitchar.io/storage/${media.video}" type="video/mp4">
  //       </video>
  //     </div>
  //   </div>
  //   `;

  //   // if ((media.type == "2D" || media.type == "360") && media.video) {
  //     $(elem).appendTo("#unsplash_thumb_upload");
  //   // }
  //   // var node = document.createElement("img");
  //   // node.src = media.thumbnail;
  //   // node.width = 125;
  //   // node.height = 125;
  //   // node.id = "img" + i;
  //   // node.style = "margin:4px;";
  //   // node.setAttribute("onclick", "pushVid(this);");
  //   // if (media.type == "2D" || media.type == "360")
  //   //   document.getElementById("galleryvids").appendChild(node);
  //   // perm = i;
  // }
}

async function fetchModels() {
  let {
    data: { data },
  } = await fetchfetching("https://pitchar.io/api/v1/assets");
  data = data.filter((element) => element.type !== "image");
  console.log(data);
  for (var i = 0; i < data.length; i++) {
    if (data[i].name === "gtlf") continue;
    console.log(data[i]);
    // var src = data[i].thumbnail.url;
    // var format = data[i].formats.find((format) => {
    //   return format.formatType === "OBJ";
    // });
    // var obj = format.root;
    // var mtl = format.resources.find((resource) => {
    //   return resource.url.endsWith("mtl");
    // });
    var imgid = "img" + i;
    var elem = `
        <div
            class="img__wrap"
            data-source="${data[i].name}"
            id="${imgid}"
            data-obj="https://pitchar.io/storage/${data[i].obj}"
            data-mtl="https://pitchar.io/storage/${data[i].mtl}"
            onclick="pushPolyModel(this);"
        >
            <img
                src="https://pitchar.io/storage/${data[i].objthumbnail}"
            />
            <p class="img__description"><span>${data[i].name.slice(
              0,
              10
            )}<span></p>
        </div>
    `;

    $(elem).appendTo("#unsplash_thumb_upload");
    // $(elem).appendTo(".googlepolyImgs");
  }
}

async function fetchAudio() {
  let {
    data: { data },
  } = await fetchfetching("https://pitchar.io/api/v1/medias");
  if (!data.length) return;
  console.log("fetching...", data);

  for (var i = 0; i < data.length; i++) {
    var asset = data[i];
    var src = asset.audio;
    console.log("audio", asset);
    if (asset.type !== "audio" || !src) continue;
    console.log("audio", asset);
    src = `https://pitchar.io/storage/${asset.audio}`;
    console.log(asset);
    var imgid = `uploadsAud${i}`;
    var dropdownId = `myDropdownAud${i}`;
    var inputId = `inputAud${i}`;
    var checkId = `rename__checkAud${i}`;
    asset.name = asset.name.toUpperCase();
    var format = src.slice(-3).toUpperCase();
    var type = `${asset.type}`;
    console.log(type);

    var elem = `
          <div class="upload__wrap">
            <div class="dropdown">
              <button onclick="myFunction(${dropdownId})" class="dropbtn upload__description">
                <i style="color: black" class="fa fa-ellipsis-v"></i>
              </button>
              <div id="${dropdownId}" class="dropdown-content">
                <div class="d-flex align-items-center">
                  <input class="rename__input" id="${inputId}" readonly="true" style="padding: 0 9px; border: 0; width: 100%;" value="${asset.name}"/> <i id="${checkId}" onclick="editVideoName(${asset.id}, ${inputId}, ${checkId})" style="opacity: 0; padding-right: 8px;" class="fas fa-check"></i>
                </div>
                <small style="color: gray; padding: 0 9px;">FILE TYPE: ${format}</small> <br>
                <hr style="margin: .5em 0;">
                <a onclick="renameAsset(${inputId}, ${checkId})" ><i style="padding-right: 4px" class="fas fa-pen"></i> <b>RENAME</b></a>
                <a onclick="delVideo(${asset.id})" ><i style="padding-right: 6.2px" class="fas fa-trash"></i> <b>DELETE</b></a>
              </div>
            </div>
            <div
              onclick="clickVid(${imgid})"
            >
              <img data-source="${src}" src="https://pitchar.io/storage/${asset.thumbnail}" id="${imgid}" onclick="pushAud(this);" />
            </div>
          </div>`;

    $(elem).appendTo("#unsplash_thumb_upload");
    // }
  }
  // for (var i = 0; i < data.length; i++) {
  //   var media = data[i];
  //   if (!media.video) continue
  //   console.log(media)

  //   var elem = `
  //   <div class="img-panel" id="media_${media.id}">
  //     <div class="w-100 float-left col-sm-12 p-0">
  //       <video width="120" height="140" controls  id="img${i}" onclick="pushVid(this);">
  //         <source src="https://pitchar.io/storage/${media.video}" type="video/mp4">
  //       </video>
  //     </div>
  //   </div>
  //   `;

  //   // if ((media.type == "2D" || media.type == "360") && media.video) {
  //     $(elem).appendTo("#unsplash_thumb_upload");
  //   // }
  //   // var node = document.createElement("img");
  //   // node.src = media.thumbnail;
  //   // node.width = 125;
  //   // node.height = 125;
  //   // node.id = "img" + i;
  //   // node.style = "margin:4px;";
  //   // node.setAttribute("onclick", "pushVid(this);");
  //   // if (media.type == "2D" || media.type == "360")
  //   //   document.getElementById("galleryvids").appendChild(node);
  //   // perm = i;
  // }
}

function clickVid(e) {
  $(`#${e.id}`).on("click", function (e) {
    e.stopPropagation();
  });
  $(`#${e.id}`).click();
}

function fetchMarkers() {
  $("#unsplash_thumb_marker").html("");
  $("#marker_loader").removeClass("d-none");
  $("#unsplash_thumb_marker").addClass("d-none");

  $.ajax({
    method: "GET",
    url: "https://pitchar.io/api/v1/markers",
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + accessToken,
    },
    success({ data: { data } }) {
      if (!data.length) return;
      var markers = data;
      console.log(data);
      for (var i = 0; i < markers.length; i++) {
        marker = markers[i];
        let markerId = `markerimg${i}`;
        var elem = `
              <div
                class="img__wrap"
                onclick="clickMarker(${markerId})"
              >
                <img
                  src="https://pitchar.io/storage/${marker.marker}"
                  data-markerid="${marker.id}"
                  id="${markerId}"
                  onclick="selectMarker(this)"
                  alt="Chania"
                  crossorigin="anonymous"
                />
                <p class="img__description"><span>${marker.name.slice(
                  0,
                  10
                )}<span></p>
              </div>
          `;
        $("#unsplash_thumb_marker").append(elem);
      }
      setTimeout(() => {
        $("#marker_loader").addClass("d-none");
        $("#unsplash_thumb_marker").removeClass("d-none");
      }, 1000);
    },
  });
}

function editVideoName(id, newName, checkIcon, assetType) {
  console.log(id, newName, checkIcon, assetType);
  const assetData = {
    name: newName.value,
    // type: "image",
  };
  // if (edittype == "a") {
  $.ajax({
    method: "PUT",
    url: `https://pitchar.io/api/v1/medias/${id}`,
    data: JSON.stringify(assetData),
    processData: false,
    contentType: false,
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
    xhr: function () {
      var xhr = new window.XMLHttpRequest();
      // Upload progress
      xhr.upload.addEventListener(
        "progress",
        function (evt) {
          if (evt.lengthComputable) {
            var percentComplete = evt.loaded / evt.total;
            //Do something with upload progress
            uploadbar.style.width = percentComplete * 100 + "%";
            if (percentComplete == 1) uploadbar.style.width = 0;
          }
        },
        false
      );

      // Download progress
      xhr.addEventListener(
        "progress",
        function (evt) {
          if (evt.lengthComputable) {
            var percentComplete = evt.loaded / evt.total;
            // Do something with download progress
            uploadbar.style.width = percentComplete * 100 + "%";
            if (percentComplete == 1) uploadbar.style.width = 0;
          }
        },
        false
      );

      return xhr;
    },
    success(data) {
      console.log(data);
      document.getElementById(checkIcon.id).style.opacity = 0;
      $("#rename_alert").show();
      setTimeout(() => {
        $("#rename_alert").hide();
      }, 4000);
      // $("#name_" + data.data.id).text(data.data.name);
    },
  });
  // }
  // else {
  //   $.ajax({
  //     method: "POST",
  //     url: "http://pitchar.io/user/apis/_update_media.php",
  //     data: formData,
  //     processData: false,
  //     contentType: false,
  //     xhr: function () {
  //       var xhr = new window.XMLHttpRequest();

  //       // Upload progress
  //       xhr.upload.addEventListener(
  //         "progress",
  //         function (evt) {
  //           if (evt.lengthComputable) {
  //             var percentComplete = evt.loaded / evt.total;
  //             //Do something with upload progress
  //             uploadbar.style.width = percentComplete * 100 + "%";
  //             if (percentComplete == 1) uploadbar.style.width = 0;
  //           }
  //         },
  //         false
  //       );

  //       // Download progress
  //       xhr.addEventListener(
  //         "progress",
  //         function (evt) {
  //           if (evt.lengthComputable) {
  //             var percentComplete = evt.loaded / evt.total;
  //             // Do something with download progress
  //             uploadbar.style.width = percentComplete * 100 + "%";
  //             if (percentComplete == 1) uploadbar.style.width = 0;
  //           }
  //         },
  //         false
  //       );

  //       return xhr;
  //     },
  //     success(data) {
  //       $("#name_" + data.id).text(data.name);
  //     },
  //   });
  // }
}

// Search Uploads
$("body").on("keyup", ".uploads_search", function (event) {
  event.preventDefault();
  var que = $(this).val().toLowerCase();
  let result = [];
  if (que !== "") {
    var settings = {
      async: true,
      url: `https://pitchar.io/api/v1/assets`,
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + accessToken,
      },
      method: "GET",
    };

    $("#unsplash_thumb_upload").hide();
    $.ajax(settings).done(function ({ data: { data } }) {
      console.log(data);
      result = data.filter((element) => {
        return element.name.includes(que);
      }, []);

      $("#unsplash_thumb_upload_srch").html("");

      for (var i = 0; i < result.length; i++) {
        var asset = result[i];
        console.log(asset);
        var src = asset.image;
        var imgid = `uploadsImg_srch${i}`;
        var dropdownId = `myDropdown_srch${i}`;
        var inputId = `input_srch${i}`;
        var checkId = `rename__check_srch${i}`;
        asset.name = asset.name.toUpperCase();
        var format = src ? src.slice(-3).toUpperCase() : "N/A";

        if (asset.type === "image" && asset.image !== "") {
          // if (count_ast < 6) {
          //     var imag = `<img src="https://pitchar.io/storage/${src}" onclick="pushImg(this);"  alt="">`;
          //     $(imag).appendTo('#unsplash_thumb_upload');
          // }
          // count_ast++;

          var elem = `
            <div class="upload__wrap">
              <div class="dropdown">
                <button onclick="myFunction(${dropdownId})" class="dropbtn upload__description">
                  <i style="color: black" class="fa fa-ellipsis-v"></i>
                </button>
                <div id="${dropdownId}" class="dropdown-content">
                  <div class="d-flex align-items-center">
                    <input class="rename__input" id="${inputId}" readonly="true" style="padding: 0 9px; border: 0; width: 100%;" value="${asset.name}"/> <i id="${checkId}" onclick="editNameAsset(${asset.id}, ${inputId}, ${checkId})" style="opacity: 0; padding-right: 8px;" class="fas fa-check"></i>
                  </div>
                  <small style="color: gray; padding: 0 9px;">FILE TYPE: ${format}</small> <br>
                  <hr style="margin: .5em 0;">
                  <a onclick="renameAsset(${inputId}, ${checkId})" ><i style="padding-right: 4px" class="fas fa-pen"></i> <b>RENAME</b></a>
                  <a onclick="delimg(${asset.id})" ><i style="padding-right: 6.2px" class="fas fa-trash"></i> <b>DELETE</b></a>
                </div>
              </div>
              <div
                onclick="clickImg(${imgid})"
              >
                <img
                  src="https://pitchar.io/storage/${src}"
                  id="${imgid}"
                  onclick="pushImg(this);"
                  crossorigin="anonymous"
                  alt="${imgid}"
                />
              </div>
            </div>`;

          $(elem).appendTo("#unsplash_thumb_upload_srch");
        }
      }
    });
    console.log(result);
  } else {
    $("#unsplash_thumb_upload").show();
  }
});

$(".template_asset").click(async function () {
  let {
    data: { data },
  } = await fetchfetching("https://pitchar.io/api/v1/templates");
  console.log(data);
  if (!data.length) return;
  for (var i = 0; i < data.length; i++) {
    var asset = data[i];
    var src = asset.video;
    console.log('assets', asset);
    // if (asset.video) {
    //   src = `https://pitchar.io/storage/${asset.video}`;
    // } else if (asset.audio) {
    //   src = `https://pitchar.io/storage/${asset.audio}`;
    // }
    var imgid = `uploadsVid${i}`;
    var dropdownId = `myDropdownVid${i}`;
    var inputId = `inputVid${i}`;
    var checkId = `rename__checkVid${i}`;
    asset.name = asset.name.toUpperCase();
    var format = src.slice(-3).toUpperCase();
    var type = `${asset.type}`;
    console.log(type);

    // if (asset.type === "image" && asset.image !== "") {
    // if (count_ast < 6) {
    //     var imag = `<img src="https://pitchar.io/storage/${src}" onclick="pushImg(this);"  alt="">`;
    //     $(imag).appendTo('#unsplash_thumb_upload');
    // }
    // count_ast++;

    // var elem = `
    //     <div class="upload__wrap">
    //       <div class="dropdown">
    //         <button onclick="myFunction(${dropdownId})" class="dropbtn upload__description">
    //           <i style="color: black" class="fa fa-ellipsis-v"></i>
    //         </button>
    //         <div id="${dropdownId}" class="dropdown-content">
    //           <div class="d-flex align-items-center">
    //             <input class="rename__input" id="${inputId}" readonly="true" style="padding: 0 9px; border: 0; width: 100%;" value="${asset.name}"/> <i id="${checkId}" onclick="editVideoName(${asset.id}, ${inputId}, ${checkId})" style="opacity: 0; padding-right: 8px;" class="fas fa-check"></i>
    //           </div>
    //           <small style="color: gray; padding: 0 9px;">FILE TYPE: ${format}</small> <br>
    //           <hr style="margin: .5em 0;">
    //           <a onclick="renameAsset(${inputId}, ${checkId})" ><i style="padding-right: 4px" class="fas fa-pen"></i> <b>RENAME</b></a>
    //           <a onclick="delVideo(${asset.id})" ><i style="padding-right: 6.2px" class="fas fa-trash"></i> <b>DELETE</b></a>
    //         </div>
    //       </div>
    //       <div
    //         onclick="clickVid(${imgid})"
    //       >
    //         <video autoplay="0" data-type="${asset.type}" src="${src}" poster="${src}" width="120" height="140" id="${imgid}" onclick="pushVid(this);">
    //           <source src="${src}#t=0.1" type="video/mp4">
    //         </video>
    //       </div>
    //     </div>`;

    if (asset.video) {
      var elem = `
            <div class="upload__wrap">
              <div class="dropdown">
                <button onclick="myFunction(${dropdownId})" class="dropbtn upload__description">
                  <i style="color: black" class="fa fa-ellipsis-v"></i>
                </button>
                <div id="${dropdownId}" class="dropdown-content">
                  <div class="d-flex align-items-center">
                    <input class="rename__input" id="${inputId}" readonly="true" style="padding: 0 9px; border: 0; width: 100%;" value="${asset.name}"/> <i id="${checkId}" onclick="editVideoName(${asset.id}, ${inputId}, ${checkId})" style="opacity: 0; padding-right: 8px;" class="fas fa-check"></i>
                  </div>
                  <small style="color: gray; padding: 0 9px;">FILE TYPE: ${format}</small> <br>
                  <hr style="margin: .5em 0;">
                  <a onclick="renameAsset(${inputId}, ${checkId})" ><i style="padding-right: 4px" class="fas fa-pen"></i> <b>RENAME</b></a>
                  <a onclick="delVideo(${asset.id})" ><i style="padding-right: 6.2px" class="fas fa-trash"></i> <b>DELETE</b></a>
                </div>
              </div>
              <div
                onclick="clickVid(${imgid})"
              >
                <img data-type="${asset.type}" src="https://pitchar.io/storage/${data.thumbnail}" data-source="${src}" id="${imgid}" onclick="pushVid(this);" />
              </div>
            </div>`;
    } else if (asset.audio) {
      var elem = `
          <div class="upload__wrap">
            <div class="dropdown">
              <button onclick="myFunction(${dropdownId})" class="dropbtn upload__description">
                <i style="color: black" class="fa fa-ellipsis-v"></i>
              </button>
              <div id="${dropdownId}" class="dropdown-content">
                <div class="d-flex align-items-center">
                  <input class="rename__input" id="${inputId}" readonly="true" style="padding: 0 9px; border: 0; width: 100%;" value="${asset.name}"/> <i id="${checkId}" onclick="editVideoName(${asset.id}, ${inputId}, ${checkId})" style="opacity: 0; padding-right: 8px;" class="fas fa-check"></i>
                </div>
                <small style="color: gray; padding: 0 9px;">FILE TYPE: ${format}</small> <br>
                <hr style="margin: .5em 0;">
                <a onclick="renameAsset(${inputId}, ${checkId})" ><i style="padding-right: 4px" class="fas fa-pen"></i> <b>RENAME</b></a>
                <a onclick="delVideo(${asset.id})" ><i style="padding-right: 6.2px" class="fas fa-trash"></i> <b>DELETE</b></a>
              </div>
            </div>
            <div
              onclick="clickVid(${imgid})"
            >
              <img data-type="${asset.type}" src="https://pitchar.io/storage/${data.thumbnail}" data-source="${src}" id="${imgid}" onclick="pushAud(this);" />
            </div>
          </div>`;
    }

    $(elem).appendTo("#unsplash_thumb_upload");
    // }
  }

});