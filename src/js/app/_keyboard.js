function onKeyDown(event) {
  event.preventDefault();
  // console.log(event.key);
  if (event.key === "backspace") {
    if (!currentPath.isEmpty()) {
      currentPath.removeSegment(currentPath._segments.length - 1);
      console.log(currentPath._segments.length);
    }
  } else if (event.key === "space") {
    console.log(app);
    // console.log(currentPath);
  } else if (event.key === "enter") {
    closePath();
  }
}
