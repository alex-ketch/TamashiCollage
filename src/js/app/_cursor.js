var myPath = new Path();
myPath.strokeColor = 'black';
myPath.fillColor = 'blue';

function onMouseDown(event) {
  console.log(event.point);
  if (myPath._segments.length === 0) {
    myPath.add(event.point);
  } else {
    var pointDist = event.point.getDistance(myPath._segments[0].point);
    if (pointDist < 15) {
      myPath.closed = true;
    } else {
      myPath.add(event.point);
    }
  }
}
