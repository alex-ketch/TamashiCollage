import $ from 'jquery';
import {app} from './_settings.js';
import paper from 'paper';
import minicolors from 'jquery-minicolors';
import remodal from 'remodal';
require('style!minicolors_css');
// require('style!remodal_css');
// require('style!remodal_theme');

export default function() {
  function setLayerColor(target, color, opacity) {
    app.layers[app.activeLayer].fillColor = color;
    app.layers[app.activeLayer].opacity = opacity;

    if (paper.project.activeLayer.name !== "layerBg") {
      paper.project.activeLayer.getItem({name: 'layerBG'}).set({
        fillColor: color,
      });
      // TODO: Imporve accessor to the group
      paper.project.layers[app.activeLayerIndex].firstChild.set({
        opacity: opacity
      });
    } else {
      paper.project.activeLayer.getItem({class: paper.Path}).set({
        fillColor: color,
      });
      paper.project.activeLayer.firstChild.set({
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
      let target = $('.activeLayer')[0].className.replace(' activeLayer', '');
      setLayerColor(target, value, opacity);
      $("." + app.activeLayer).css("background-color", value);
    }
  });
}
