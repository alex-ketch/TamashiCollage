import $ from 'jquery';
import {app} from './_settings.js';
import paper from 'paper';
import minicolors from 'jquery-minicolors';
import remodal from 'remodal';
require('style!minicolors_css');
// require('style!remodal_css');
// require('style!remodal_theme');

export default function() {
  function setLayerColor(color, opacity) {
    app.layers[app.activeLayer].fillColor = color;
    app.layers[app.activeLayer].opacity = opacity;

    if (app.activeLayer !== "layerBg") {
      paper.project.layers[app.activeLayerIndex].firstChild.children[1].set({
      fillColor: color,
      });
      paper.paper.project.layers[app.activeLayerIndex].firstChild.set({
        opacity: opacity
      });
    } else {
      paper.paper.project.layers[app.activeLayerIndex].getItem({class: paper.Path}).set({
        fillColor: color,
      });
      paper.paper.project.layers[app.activeLayerIndex].firstChild.set({
        opacity: opacity
      });
    }
  }

  $(".edit").attr("data-remodal-target", "modal");

  $('.picker.colorPicker').minicolors({
    changeDelay: 15,
    opacity: true,
    inline: true,
    change: function(value, opacity) {
      setLayerColor(value, opacity);
      $("." + app.activeLayer).css("background-color", value);
    }
  });
}
