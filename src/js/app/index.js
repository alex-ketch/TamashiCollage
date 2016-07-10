// debugger;

import paper from 'paper';
import $ from 'jquery';
import layers from './_layers.js';
import cursor, {draw} from './_cursor.js';
import colorPicker from './_colorPicker.js';
import setTexture from './_textures.js';
import shortcuts from './_keyboard.js';
import exportCanvas from './_export.js';
import {selectLayer} from './_layers.js';
import clearLayer from './_clear.js';
import tooltip from '../lib/tooltip.js';
import {app} from './_settings.js';
import {newShape} from './_shapes.js';

window.onload = function() {
  let canvas = document.getElementById('myCanvas');
  paper.setup(canvas);
  newShape();
  cursor();
  layers();
  setTexture();
  shortcuts();
  colorPicker();
  paper.view.draw();
  $('.clear').on('click', function(){
    let target = $(this).parent().parent()[0].className.replace(' activeLayer', '');

    selectLayer(target);
    let clearConfirm = confirm("Reset layer?");
    if (clearConfirm == true) {
      clearLayer(target);
    }
  });
  $('.clearAll').on('click', function(){
    var clearAllConfirm = confirm("Are you sure you want to start new?");

    if (clearAllConfirm == true) {
      // TODO: Actually sort out layer counting logic and get rid of this silliness.
      clearLayer('layer1');
      clearLayer('layer2');
      clearLayer('layer3');
      clearLayer('layer4');
      selectLayer('layer4');
    }
  });
  $(".shortcut").attr("data-remodal-target", "modalKeys");
  $('[data-remodal-id=modalKeys]').remodal().open();
  $('.lassoFree').addClass("active");
  $('.undo').on('click', function(){
    if(app.layerCount >= 0) {
      app.layerCount--;
      let _ = app.undoHistory.pop();

      let target = paper.project.getItem({name: _[0]})
        .getItem({name: 'clipMask'})
        .replaceWith(_[1])
    }
  });
  tooltip();
    exportCanvas();
};
