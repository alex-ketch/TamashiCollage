var myPath = new Path();
myPath.strokeColor = 'black';

function onMouseDown(event) {
  console.log(event.point);
  myPath.add(event.point);
}

