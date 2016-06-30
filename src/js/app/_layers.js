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
    paper.project.getItem({name: _layer}).activate();
    highlightActiveLayer(_layer)
    closePath();
    // $('.picker.colorPicker').minicolors('value', app.layers[app.activeLayer].fillColor);
}

/**
 * [initializeLayer description]
 * @param  {string} name    Name for Layer in paper.project
 * @param  {string} color   background fill color
 * @param  {string} texture URL for background texture
 * @param  {object} bounds  the dimensions of the canvas
 * @return {object}         Paper.js project Layer
 */
export function initializeLayer(name, color, texture, bounds) {
  let _ = new paper.Layer();
  _.name = name;

  let textureImage = new paper.Raster(texture);

  let layerBg = new paper.Path.Rectangle(0,0, bounds._width, bounds._height);
  layerBg.set({fillColor: color})

  if (name !== "layerBg") {
    let compClipMask = new paper.CompoundPath({
      clipMask: true,
      children: [
        new paper.Path.Rectangle(0,0, bounds._width, bounds._height)
      ]
    });

    let layerGroup = new paper.Group([compClipMask, layerBg, textureImage]);
  }

  document.getElementsByClassName(name)[0].addEventListener('click', () => selectLayer(name) );
}

export default function setup() {
  let numOfLayers = document.querySelectorAll(".layers > div");
  let bounds = paper.project.view.viewSize;
  for (let i = 0; i < numOfLayers.length; i++) {
    let name = numOfLayers[i].className.toString().replace(/ activeLayer/, '');
    let color = app.layers[name].fillColor || '#FFAABB';
    let texture = app.layers[name].texture ? "/assets/textures/" + app.layers[name].texture : null;

    initializeLayer(name, color, texture, bounds);
  }

  paper.project.layers.reverse();

  selectLayer("layer4");
}
