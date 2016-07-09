import $ from 'jquery';
import paper from 'paper';
import {closePath} from './_shapes.js';
import {app, tool} from './_settings.js';
import {selectLayer} from './_layers.js';
import clearLayer from './_clear.js';
import remodal from 'remodal';

export default function shortcuts() {
  tool.onKeyDown = function(event) {
    event.preventDefault();
    if (event.key === "backspace") {
      if (app.currentPath && !app.currentPath.isEmpty()) {
        app.currentPath.removeSegment(app.currentPath.lastSegment.index);
      }
    } else if (event.key === "space") {
      console.log(paper.project.activeLayer);
    } else if (event.key === "enter") {
      closePath();
    } else if (event.key === "1") {
      selectLayer('layer1');
    } else if (event.key === "2") {
      selectLayer('layer2');
    } else if (event.key === "3") {
      selectLayer('layer3');
    } else if (event.key === "4") {
      selectLayer('layer4');
    } else if (event.key === "0") {
      selectLayer('layerBg');
    } else if (event.modifiers.shift && event.key === "n") {
      var clearAllConfirm = confirm("Are you sure you want to start new?");

      if (clearAllConfirm == true) {
        clearLayer('layer1');
        clearLayer('layer2');
        clearLayer('layer3');
        clearLayer('layer4');
        selectLayer('layer4');
      }
    } else if (event.modifiers.shift && event.key === "l") {
      var clearConfirm = confirm("Reset layer?");
      if (clearConfirm == true) {
        clearLayer(paper.project.activeLayer.name);
      }
    } else if (event.modifiers.shift && event.key === "e") {
      canvasExport();
    } else if (event.key === "q") {
      selectLayer('layer1');
      $('[data-remodal-id=modal]').remodal().open();
    } else if (event.key === "w") {
      selectLayer('layer2');
      $('[data-remodal-id=modal]').remodal().open();
    } else if (event.key === "e") {
      selectLayer('layer3');
      $('[data-remodal-id=modal]').remodal().open();
    } else if (event.key === "r") {
      selectLayer('layer4');
      $('[data-remodal-id=modal]').remodal().open();
    } else if (event.key === "p") {
      selectLayer('layerBg');
      $('[data-remodal-id=modal]').remodal().open();
    } else if (event.key === "c") {
      app.tool = "free";
      $('.lassoPoly').removeClass("active");
      $('.lassoFree').addClass("active");
    } else if (event.key === "v") {
      app.tool = "poly";
      $('.lassoFree').removeClass("active");
      $('.lassoPoly').addClass("active");
    }
  };
}
