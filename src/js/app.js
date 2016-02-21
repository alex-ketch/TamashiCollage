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
        fillColor: "FFAABB",
        strokeColor: "#43597D"
      },
      layer1: {
        fillColor: "#007D6E",
        strokeColor: "#43597D"
      },
      layer2: {
        fillColor: "#A8AFAF",
        strokeColor: "#43597D"
      },
      layer3: {
        fillColor: "#F77A53",
        strokeColor: "#43597D"
      }
    }
};

function newShape() {
  // console.log(app.activeLayerLevel);


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
