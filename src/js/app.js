debugger;

var tempPath;

window._app = {
    tool: "vector",
    activeLayer: "layerBg",
    activePath: tempPath,
    fillColor: "#FFAABB",
    strokeColor: "#43597D",
    layers: {
      layerBg: {
        fillColor: "FFAABB",
        strokeColor: "#43597D"
      },
      layer1: {
        fillColor: "red",
        strokeColor: "#43597D"
      },
      layer2: {
        fillColor: "green",
        strokeColor: "#43597D"
      },
      layer3: {
        fillColor: "blue",
        strokeColor: "#43597D"
      }
    }
};

function newShape() {
  currentPath = new Path();
  currentPath.fillColor = app.layers[app.activeLayer].fillColor;
  currentPath.strokeColor = app.strokeColor;
  currentPath.selected = true;
}

function closePath() {
  currentPath.closed = true;
  newShape();
}
