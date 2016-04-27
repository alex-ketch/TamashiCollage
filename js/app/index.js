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
    let clearConfirm = confirm("Reset layer?");
    if (clearConfirm == true) {
      selectLayer($(this).parent().parent()[0]);
      clearLayer(app.activeLayerIndex);
    }
  });
  $('.clearAll').on('click', function(){
    var clearAllConfirm = confirm("Are you sure you want to start new?");

    if (clearAllConfirm == true) {
      var numOfLayers = document.querySelectorAll(".layers > div");
      for (var i = 0; i < numOfLayers.length; i++) {
          selectLayer(numOfLayers[i]);
          clearLayer(app.activeLayerIndex);
      }
      selectLayer(numOfLayers[0]);
    }
  });
  $(".shortcut").attr("data-remodal-target", "modalKeys");
  $('[data-remodal-id=modalKeys]').remodal().open();
  $('.lassoFree').addClass("active");
  tooltip();
    exportCanvas();
};
