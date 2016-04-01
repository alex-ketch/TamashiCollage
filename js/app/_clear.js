import $ from 'jquery';
import paper from 'paper';
import {app} from './index.js';
import {selectLayer} from './_layers.js';

export default function clearLayer(layer) {
  if (paper.project.layers[layer].index !== 5) {
    let bounds = paper.project.view.viewSize;
    let cleanLayer = new paper.CompoundPath({
      clipMask: true,
      children: [
        new paper.Path.Rectangle(0,0, bounds._width, bounds._height)
      ]
    });

    paper.project.activeLayer.getItem({class: paper.CompoundPath }).replaceWith(cleanLayer);
    paper.view.draw();
  } else {
    paper.project.layers[layer].getItem({class: paper.Raster}).set({
      source: null
    });
    $("." + app.activeLayer + " .texture").css({
      'backgroundImage': 'none'
    });
  }
}

export function selectThenClear(layer) {
  selectLayer(layer);
  clearLayer(app.activeLayerIndex);
}

$('.clearAll').on('click', function(){
  var clearAllConfirm = confirm("Are you sure you want to start new?");
  if (clearAllConfirm == true) {
    var numOfLayers = document.querySelectorAll(".layers > div");
    for (var i = 0; i < numOfLayers.length; i++) {
      clearLayer(i)
    }
  }
})
