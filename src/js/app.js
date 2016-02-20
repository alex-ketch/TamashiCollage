debugger;

var tempPath;

window._app = {
    tool: "vector",
    activeLayer: "bg",
    activePath: tempPath,
    fillColor: "#FFAABB",
    strokeColor: "#43597D"
};

function newShape() {
  currentPath = new Path();
  currentPath.fillColor = app.fillColor;
  currentPath.strokeColor = app.strokeColor;
  currentPath.selected = true;
}

function closePath() {
  currentPath.closed = true;
  newShape();
}
