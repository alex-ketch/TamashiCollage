var numOfLayers = document.querySelectorAll(".layers > div");

function selectLayer(layer) {
  switch (this.className) {
    case "layerBg":
      app.activeLayer = this.className;
      closePath();
      break;
    case "layer1":
      app.activeLayer = this.className;
      closePath();
      break;
    case "layer2":
      app.activeLayer = this.className;
      closePath();
      break;
    case "layer3":
      app.activeLayer = this.className;
      closePath();
      break;
    default:
      alert("error selecting layer!");
  }
}

for (var i = 0; i < numOfLayers.length; i++) {
  var layerName = numOfLayers[i].className.toString();

  // layerName = new Layer();

  numOfLayers[i].addEventListener('click', selectLayer);
}
