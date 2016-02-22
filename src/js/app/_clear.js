function clearLayer(layer) {
  if (paper.project.layers[layer].index !== 5) {
    paper.project.layers[layer].getItem({class: CompoundPath}).removeChildren(1);
    paper.view.draw();
  } else {
    paper.project.layers[layer].getItem({class: paper.Raster}).set({
      source: null
    });
  }
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
