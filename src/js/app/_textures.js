import $ from 'jquery';
import paper from 'paper';
import {app} from './_settings.js';

function setTexture(targetTexture) {
  var tempLayer = paper.project.activeLayer.getItem({class: paper.Raster});
  tempLayer.set({
    source: "/assets/textures/" + targetTexture
  });
  $("." + app.activeLayer + " .texture").css({
    'backgroundImage': 'url("/assets/textures/small/' + targetTexture + '")',
    'backgroundPosition': 'top',
    'border': 'none',
    'width': '100%',
    'height': '80px'
  });
}

export default function() {
  $(".texturePicker img").on('click', function(){
    setTexture($(this).attr("data"));
  });
}
