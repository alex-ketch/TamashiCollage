import $ from 'jquery';
import paper from 'paper';
import {closePath} from './_shapes.js';
import {app} from './_settings.js';

function highlightActiveLayer(target) {
  if (!target.includes('activeLayer')) {
    $(".layers > div").removeClass("activeLayer");
    document.getElementsByClassName(target)[0].className += ' activeLayer';
  }
}

export function selectLayer(layer) {
  let _layer = (layer.className) ? layer.className.replace(/ activeLayer/, '') : layer;
  app.activeLayer = _layer;
  app.activeLayerIndex = _layer.replace(/layer/, '');
  let target = paper.project.layers[_layer];
  target.activate();
  highlightActiveLayer(_layer)
  closePath();
  // $('.picker.colorPicker').minicolors('value', app.layers[app.activeLayer].fillColor);
}

function createLayer(name, color, texture, bounds) {
  let _ = new paper.Layer();
  _.name = name;

  let textureImage = new paper.Raster(texture);

  let layerBg = new paper.Path.Rectangle(0,0, bounds._width, bounds._height);
  layerBg.name = "layerBG";
  layerBg.set({fillColor: color})

  if (name !== "layerBg") {
    let compClipMask = new paper.CompoundPath({
      clipMask: true,
      children: [
        new paper.Path.Rectangle(0,0, bounds._width, bounds._height)
      ],
      name: 'clipMask'
    });

    let layerGroup = new paper.Group([compClipMask, layerBg, textureImage]);
    paper.project.addLayer(_);
  }
}

export default function setup() {
  let numOfLayers = document.querySelectorAll(".layers > div");
  let bounds = paper.project.view.viewSize;
  for (let i = 0; i < numOfLayers.length; i++) {
    let name = numOfLayers[i].className.toString().replace(/ activeLayer/, '');
    let color = app.layers[name].fillColor || '#FFAABB';
    let texture = app.layers[name].texture ? "/assets/textures/" + app.layers[name].texture : null;

    createLayer(name, color, texture, bounds);

    numOfLayers[i].addEventListener('click', function(){
      selectLayer(this);
    });
  }

  paper.project.layers.reverse();

  selectLayer("layer4");
}
