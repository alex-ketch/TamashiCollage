debugger;

var tempPath;

window._app = {
    tool: "free",
    activeLayer: "layer4",
    activeLayerIndex: 4,
    activePath: tempPath,
    fillColor: "#FFAABB",
    strokeColor: "#43597D",
    layers: {
      layerBg: {
        fillColor: "#c8c0ba",
        texture: null,
        opacity: 1
      },
      layer1: {
        fillColor: "#931ba8",
        texture: "texture_02.png",
        opacity: 1
      },
      layer2: {
        fillColor: "#d7d518",
        texture: null,
        opacity: 1
      },
      layer3: {
        fillColor: "#14deaf",
        texture: "texture_10.png",
        opacity: 1
      },
      layer4: {
        fillColor: "#ffb661",
        texture: null,
        opacity: 1
      }
    }
};

function newShape() {
  currentPath = new Path()
  currentPath.set({
    strokeColor: "black",
    dashArray: [10, 6],
    strokeWidth: 2,
    strokeCap: "round",
    strokeJoin: "round"
  })
}

function closePath() {
  if (!currentPath.isEmpty()) {
    currentPath.selected = false;
    currentPath.set({
      strokeColor: null,
      strokeWidth: 0
    })
    currentPath.closed = true;

    var clipGroup = paper.project.activeLayer.getItem({class: paper.CompoundPath });
    var temp = clipGroup.unite(currentPath);

    if (temp === clipGroup || currentPath.intersects(clipGroup)) {
      clipGroup = clipGroup.replaceWith(clipGroup.subtract(currentPath));
    } else {
      clipGroup = clipGroup.replaceWith(clipGroup.subtract(currentPath));
    }
    clipGroup.clipMask = true;

    currentPath.remove();
    temp.remove();

    newShape();
  }
}

function canvasExport() {
  paper.view.draw();
  paper.view.element.toBlob(function(blob) { saveAs(blob, "littleWhittle.png");});
}

$(".export").on('click', canvasExport);
