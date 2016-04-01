// debugger;

import paper from 'paper';
import $ from 'jquery';
import layers from './_layers.js';
import cursor, {draw} from './_cursor.js';
import colorPicker from './_colorPicker.js';
import setTexture from './_textures.js';
import shortcuts from './_keyboard.js';
import exportCanvas from './_export.js';
import {selectLayer} from './_layers.js'
import clearLayer from './_clear.js';
import tooltip from '../lib/tooltip.js';

export let tool = new paper.Tool();

export var app = {
    tool: "free",
    activeLayer: "layer4",
    currentPath: null,
    activeLayerIndex: 4,
    activePath: null,
    fillColor: "#FFAABB",
    strokeColor: "#43597D",
    layers: {
      layerBg: {
        fillColor: "#c8c0ba",
        texture: null,
        opacity: 1
      },
      layer1: {
        fillColor: "#931ba8",
        texture: "texture_02.png",
        opacity: 1
      },
      layer2: {
        fillColor: "#d7d518",
        texture: null,
        opacity: 1
      },
      layer3: {
        fillColor: "#14deaf",
        texture: "texture_10.png",
        opacity: 1
      },
      layer4: {
        fillColor: "#ffb661",
        texture: null,
        opacity: 1
      }
    }
};

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
  $(".shortcut").attr("data-remodal-target", "modalKeys");
  $('[data-remodal-id=modalKeys]').remodal().open();
  $('.lassoFree').addClass("active");
  tooltip();
  exportCanvas()
}

function newShape() {
  app.currentPath = new paper.Path()
  app.currentPath.set({
    strokeColor: "black",
    dashArray: [10, 6],
    strokeWidth: 2,
    strokeCap: "round",
    strokeJoin: "round"
  })
}

export function closePath() {
  if (app.currentPath && !app.currentPath.isEmpty()) {
    app.currentPath.selected = false;
    app.currentPath.set({
      strokeColor: null,
      strokeWidth: 0
    })
    app.currentPath.closed = true;

    var clipGroup = paper.project.activeLayer.getItem({class: paper.CompoundPath });
    var temp = clipGroup.subtract(app.currentPath);

    if (temp.area === clipGroup.area) {
      clipGroup = clipGroup.replaceWith(clipGroup.unite(app.currentPath));
    } else {
      clipGroup = clipGroup.replaceWith(clipGroup.subtract(app.currentPath));
    }
    clipGroup.clipMask = true;

    app.currentPath.remove();
    temp.remove();

    newShape();
  }
}
