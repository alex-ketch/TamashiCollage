function onKeyDown(event) {
  event.preventDefault();
  // console.log(event.key);
  if (event.key === "backspace") {
    if (!currentPath.isEmpty()) {
      currentPath.removeSegment(currentPath.lastSegment.index)
    }
  } else if (event.key === "space") {
    console.log(app);
    // console.log(currentPath);
  } else if (event.key === "enter") {
    closePath();
  }
}

$(".shortcut").attr("data-remodal-target", "modalKeys");
