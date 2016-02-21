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

var bounds = paper.project.view.viewSize;
console.log(bounds);

for (var i = 0; i < numOfLayers.length; i++) {
  var layerName = numOfLayers[i].className.toString();
  var layerColor = app.layers[layerName].fillColor;

  layerName = new Layer();

var path = new CompoundPath({
    children: [
      new Path.Rectangle(0, 0, bounds._width, bounds._height)
    ],
    fillColor: layerColor,
    fillRule: 'nonzero'
});

  // var path = new CompoundPath({
  //   children: [
  //     new Path.Rectangle(0, 0, bounds._width, bounds._height)
  //   ],
  //   fillColor: layerColor
  // });

  numOfLayers[i].addEventListener('click', selectLayer);
}
