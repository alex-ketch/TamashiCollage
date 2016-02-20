var app = _app;
var currentPath;
newShape();

function onMouseDown(event) {
  if (currentPath.isEmpty()) {
    currentPath.add(event.point);
  } else {
    var pointDist = event.point.getDistance(currentPath._segments[0].point);
    if (pointDist < 15) {
      closePath();
    } else {
      currentPath.add(event.point);
    }
  }
}
