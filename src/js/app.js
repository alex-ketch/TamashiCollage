debugger;

var tempPath;

window._app = {
    tool: "vector",
    activeLayer: "layer3",
    activeLayerIndex: 3,
    activePath: tempPath,
    fillColor: "#FFAABB",
    strokeColor: "#43597D",
    layers: {
      layerBg: {
        fillColor: "#fae7d3",
        opacity: 1
      },
      layer1: {
        fillColor: "#007D6E",
        opacity: 1
      },
      layer2: {
        fillColor: "#D8D618",
        opacity: 1
      },
      layer3: {
        fillColor: "#FFB873",
        opacity: 1
      }
    }
};

function newShape() {
  currentPath = new Path()
  // currentPath.fillColor = app.layers[app.activeLayer].fillColor;
  // currentPath.strokeColor = app.strokeColor;
  currentPath.selected = true;
}

function closePath() {
  currentPath.selected = false;
  currentPath.closed = true;

  project.layers[app.activeLayerIndex].children[0].addChild(currentPath);
  newShape();
}
