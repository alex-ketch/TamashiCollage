function clearLayer(layer) {
  paper.project.layers[layer].getItem({class: CompoundPath}).removeChildren(1);
  paper.view.draw();
}

$('.clear').on('click', function(){
  var clearConfirm = confirm("Reset layer?");
  if (clearConfirm == true) {
  clearLayer(app.activeLayerIndex);
}
})

$('.clearAll').on('click', function(){
  var clearAllConfirm = confirm("Are you sure you want to start new?");
  if (clearAllConfirm == true) {
  var numOfLayers = document.querySelectorAll(".layers > div");
  for (var i = 0; i < numOfLayers.length; i++) {
    clearLayer(i)
  }
}
})
