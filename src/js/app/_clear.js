function clearLayer(layer) {
  paper.project.layers[layer].getItem({class: CompoundPath}).removeChildren(1);
  paper.view.draw();
}

$('.clear').on('click', function(){
  clearLayer(app.activeLayerIndex);
})

$('.clearAll').on('click', function(){
  var numOfLayers = document.querySelectorAll(".layers > div");
  for (var i = 0; i < numOfLayers.length; i++) {
    clearLayer(i)
  }
})
