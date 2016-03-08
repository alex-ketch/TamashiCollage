import $ from 'jquery';
import paper from '../lib/paper-full.min.js';
import {app, closePath} from './index.js';

export function activateLayer(name, index) {
  app.activeLayer = name.replace(/ activeLayer/, '');
  app.activeLayerIndex = index;
  paper.project.layers[index].activate();
  highlightActiveLayer(name);
  closePath();
  // $('.picker.colorPicker').minicolors('value', app.layers[app.activeLayer].fillColor);
}

function highlightActiveLayer(target) {
  if (!target.includes('activeLayer')) {
    $(".layers > div").removeClass("activeLayer");
    $("." + target).addClass("activeLayer");
  }
}

function selectLayer(layer) {
  switch (this.className.replace(/ activeLayer/, '')) {
    case "layerBg":
      activateLayer(this.className, 0);
      break;
    case "layer1":
      activateLayer(this.className, 1);
      break;
    case "layer2":
      activateLayer(this.className, 2);
      break;
    case "layer3":
      activateLayer(this.className, 3);
      break;
    case "layer4":
      activateLayer(this.className, 4);
      break;
    default:
      alert("error selecting layer!");
  }
}

export default function setup() {
  var numOfLayers = document.querySelectorAll(".layers > div");
  var bounds = paper.project.view.viewSize;
  for (var i = 0; i < numOfLayers.length; i++) {
    var layerName = numOfLayers[i].className.toString().replace(/ activeLayer/, '');
    var layerColor = app.layers[layerName].fillColor;
    var layerTexture = app.layers[layerName].texture ? "/assets/textures/" + app.layers[layerName].texture : null;

    new paper.Layer();

    var textureImage = new paper.Raster(layerTexture);

    var layerBg = new paper.Path.Rectangle(0,0, bounds._width, bounds._height);
    layerBg.set({fillColor: layerColor})

    if (layerName !== "layerBg") {
      var compClipMask = new paper.CompoundPath({
        clipMask: true,
        children: [
          new paper.Path.Rectangle(0,0, bounds._width, bounds._height)
        ]
      });

      var layerGroup = new paper.Group([compClipMask, layerBg, textureImage]);
    }

    numOfLayers[i].addEventListener('click', selectLayer);
  }

  paper.project.layers.reverse();

  activateLayer("layer4", 4);
}
