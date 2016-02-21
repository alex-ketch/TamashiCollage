var numOfLayers = document.querySelectorAll(".layers > div");

function activateLayer(name, index) {
  app.activeLayer = name;
  app.activeLayerIndex = index;
  paper.project.layers[index].activate();
  highlightActiveLayer(name);
  closePath();
}

highlightActiveLayer("layer3");

function highlightActiveLayer(target) {
  $(".layers > div").removeClass("activeLayer");
  $("." + target).addClass("activeLayer");
}

function selectLayer(layer) {
  switch (this.className) {
    case "layerBg":
      activateLayer(this.className, 0);
      break;
    case "layer1":
      activateLayer(this.className, 1);
      break;
    case "layer2":
      activateLayer(this.className, 2);
      break;
    case "layer3":
      activateLayer(this.className, 3);
      break;
    default:
      alert("error selecting layer!");
  }
}

var bounds = paper.project.view.viewSize;

for (var i = 0; i < numOfLayers.length; i++) {
  var layerName = numOfLayers[i].className.toString().replace(/ activeLayer/, '');
  var layerColor = app.layers[layerName].fillColor;

  new Layer();

  var path = new CompoundPath({
    children: [
      new Path.Rectangle(0, 0, bounds._width, bounds._height)
    ],
    fillColor: layerColor,
    // fillRule: 'nonzero'
  });

  numOfLayers[i].addEventListener('click', selectLayer);
}

paper.project.layers.reverse();
