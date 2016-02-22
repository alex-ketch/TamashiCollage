var app = _app;
var currentPath;
newShape();

// $(window).load(function(){
//   $('.lassoFree').addClass("active");
// });

$('.lassoFree').on('click', function(){
  app.tool = "free";
  $(this).addClass("active");
  $('.lassoPoly').removeClass("active");
});

$('.lassoPoly').on('click', function(){
  app.tool = "poly";
  $(this).addClass("active");
  $('.lassoFree').removeClass("active");
});

function onMouseDown(event) {
  if (app.activeLayer !== "layerBg") {
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
}

function onMouseDrag(event) {
  if (app.activeLayer !== "layerBg") {
    if (app.tool === "free") {
      tool.minDistance = 8;
      currentPath.add(event.point);
    } else if (app.tool === "poly" && !currentPath.closed) {
      currentPath.segments[currentPath.lastSegment.index].set({
        point: event.point
      })
    }
  }
}

function onMouseUp(event) {
 if (app.tool === "free" && app.activeLayer !== "layerBg") {
    closePath();
  }
};
