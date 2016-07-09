import $ from 'jquery';
import paper from 'paper';
import {app} from './_settings.js';
import {initializeLayer, selectLayer} from './_layers.js';

export default function clearLayer(layer) {
  let target = paper.project.getItem({recursive: false, name: layer});
  if(target.getItem({name: 'clipMask'})) {
    target.getItem({name: 'clipMask'}).removeChildren(1);
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
