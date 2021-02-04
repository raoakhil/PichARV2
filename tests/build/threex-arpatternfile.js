var params = new URL(document.location).searchParams;

var token = params.get("token");

var expid = params.get("edit");
var historyState = [];
var Blobimg;

var Blobpatt;
var edit_Id;

var THREEx = THREEx || {};

THREEx.ArPatternFile = {};

THREEx.ArPatternFile.toCanvas = function (patternFileString, onComplete) {
  console.assert(false, "not yet implemented");
};

//function to encode image

THREEx.ArPatternFile.encodeImageURL = function (imageURL, onComplete) {
  var image = new Image();
  image.onload = function () {
    var patternFileString = THREEx.ArPatternFile.encodeImage(image);
    onComplete(patternFileString);
  };
  image.src = imageURL;
};

THREEx.ArPatternFile.encodeImage = function (image) {
  // copy image on canvas
  var canvas = document.createElement("canvas");
  var context = canvas.getContext("2d");
  canvas.width = 16;
  canvas.height = 16;
  canvas.classList.add("markercanvas");
  // document.body.appendChild(canvas)
  // canvas.style.width = '200px'

  var patternFileString = "";
  for (
    var orientation = 0;
    orientation > -2 * Math.PI;
    orientation -= Math.PI / 2
  ) {
    // draw on canvas - honor orientation
    context.save();
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.translate(canvas.width / 2, canvas.height / 2);
    context.rotate(orientation);
    context.drawImage(
      image,
      -canvas.width / 2,
      -canvas.height / 2,
      canvas.width,
      canvas.height
    );
    context.restore();

    // get imageData
    var imageData = context.getImageData(0, 0, canvas.width, canvas.height);

    // generate the patternFileString for this orientation
    if (orientation !== 0) patternFileString += "\n";
    // NOTE bgr order and not rgb!!! so from 2 to 0
    for (var channelOffset = 2; channelOffset >= 0; channelOffset--) {
      // console.log('channelOffset', channelOffset)
      for (var y = 0; y < imageData.height; y++) {
        for (var x = 0; x < imageData.width; x++) {
          if (x !== 0) patternFileString += " ";

          var offset = y * imageData.width * 4 + x * 4 + channelOffset;
          var value = imageData.data[offset];

          patternFileString += String(value).padStart(3);
        }
        patternFileString += "\n";
      }
    }
  }

  return patternFileString;
};

//		trigger download

THREEx.ArPatternFile.triggerDownload = function (patternFileString) {
  var domElement = window.document.createElement("a");
  domElement.href = window.URL.createObjectURL(
    new Blob([patternFileString], { type: "text/plain" })
  );
  var fil = new Blob([patternFileString], { type: "text/plain" });
  console.log("fill", fil);
  Blobpatt = fil;
};

THREEx.ArPatternFile.buildFullMarker = function (
  innerImageURL,
  pattRatio,
  onComplete
) {
  console.log("im here", innerImageURL);
  var whiteMargin = 0.1;
  var blackMargin = (1 - 2 * whiteMargin) * ((1 - pattRatio) / 2);
  // var blackMargin = 0.2

  var innerMargin = whiteMargin + blackMargin;

  var canvas = document.createElement("canvas");
  var context = canvas.getContext("2d");
  canvas.width = canvas.height = 512;
  canvas.id = "markercanvas";

  context.fillStyle = "white";
  context.fillRect(0, 0, canvas.width, canvas.height);

  // copy image on canvas
  context.fillStyle = "black";
  context.fillRect(
    whiteMargin * canvas.width,
    whiteMargin * canvas.height,
    canvas.width * (1 - 2 * whiteMargin),
    canvas.height * (1 - 2 * whiteMargin)
  );

  // clear the area for innerImage (in case of transparent image)
  context.fillStyle = "white";
  context.fillRect(
    innerMargin * canvas.width,
    innerMargin * canvas.height,
    canvas.width * (1 - 2 * innerMargin),
    canvas.height * (1 - 2 * innerMargin)
  );

  // display innerImage in the middle
  var innerImage = document.createElement("img");
  innerImage.addEventListener("load", function () {
    // draw innerImage
    context.drawImage(
      innerImage,
      innerMargin * canvas.width,
      innerMargin * canvas.height,
      canvas.width * (1 - 2 * innerMargin),
      canvas.height * (1 - 2 * innerMargin)
    );

    // const cropper = new Cropper(canvas, {
    // 	aspectRatio: 16 / 9,
    // 	crop(event) {
    // 		console.log(event.detail.x);
    // 		console.log(event.detail.y);
    // 		console.log(event.detail.width);
    // 		console.log(event.detail.height);
    // 		console.log(event.detail.rotate);
    // 		console.log(event.detail.scaleX);
    // 		console.log(event.detail.scaleY);
    // 	},
    // });
    var imageUrl = canvas.toDataURL();
    onComplete(imageUrl);
    canvas.toBlob(
      function (blob) {
        console.log("blob", blob);
        Blobimg = blob;
        THREEx.ArPatternFile.uploadMarker();
      },
      "image/jpeg",
      1.0
    );
  });
  innerImage.src = innerImageURL;
};

THREEx.ArPatternFile.uploadMarker = function () {
  var m_id;
  var dataimg = new FormData();

  console.log(Blobimg);
  console.log($("#fileinput").val().slice(7, -4));

  dataimg.append("marker", Blobimg);
  dataimg.append("name", $("#fileinput").val().slice(7, -4));

  console.log(dataimg.get("marker"));

  console.log(expid);
  $.ajax({
    method: "POST",
    url: "https://pitchar.io/api/v1/markers",
    data: dataimg,
    enctype: "multipart/form-data",
    contentType: false,
    processData: false,
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + accessToken,
    },
    success: function ({ data: data }) {
      console.log(data);
      console.log("BlobPatt", Blobpatt);
      // $('#marker_alert').show();
      // setTimeout(() => {
      //   $('#marker_alert').hide();
      // }, 4000);

      m_id = data.id;
      console.log("id", m_id);
      var datapatt = new FormData();
      datapatt.append("pattern", Blobpatt, "marker.patt");
      console.log(datapatt.get("pattern"));
      $.ajax({
        method: "POST",
        url: `https://pitchar.io/api/v1/markers/updatePattern/${m_id}`,
        data: datapatt,
        enctype: "multipart/form-data",
        contentType: false,
        processData: false,
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + accessToken,
        },
        success: function (data) {
          console.log(data);
          fetchMarkers();
        },
        error: function (res) {
          console.log(res);
        },
      });
    },
    error: function (res) {
      console.log(res);
    },
  });
};

