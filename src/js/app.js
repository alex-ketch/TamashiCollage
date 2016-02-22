debugger;

var tempPath;

window._app = {
    tool: "poly",
    activeLayer: "layer1",
    activeLayerIndex: 1,
    activePath: tempPath,
    fillColor: "#FFAABB",
    strokeColor: "#43597D",
    layers: {
      layerBg: {
        fillColor: "#fae7d3",
        texture: null,
        opacity: 1
      },
      layer1: {
        fillColor: "#007D6E",
        texture: null,
        opacity: 1
      },
      layer2: {
        fillColor: "#D8D618",
        texture: null,
        opacity: 1
      },
      layer3: {
        fillColor: "#FFB873",
        texture: "texture_07.png",
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

  paper.project.activeLayer.getItem({class: paper.CompoundPath}).addChild(currentPath);
  newShape();
}
