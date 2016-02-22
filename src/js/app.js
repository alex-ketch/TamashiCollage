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
        texture: "texture_02.png",
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
  // currentPath.selected = true;
  currentPath.set({
    strokeColor: "black",
    dashArray: [10, 6],
    strokeWidth: 2,
    strokeCap: "round",
    strokeJoin: "round"
  })
}

function closePath() {
  if (currentPath) {
    currentPath.selected = false;
    currentPath.set({
      strokeColor: null,
      strokeWidth: 0
    })
    currentPath.closed = true;
  }

  if (app.activeLayer !== "layerBg") {
    paper.project.activeLayer.getItem({class: paper.CompoundPath}).addChild(currentPath);
    newShape();
  }
}

$(".export").on('click', function(){
  paper.view.draw();
  paper.view.element.toBlob(function(blob) { saveAs(blob, "littleWhittle.png");});
})
