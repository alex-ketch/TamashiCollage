import $ from 'jquery';
import paper from 'paper';
import blob from 'blob-polyfill';
import saveAs from 'filesaver.js';
import toBlob from 'canvas-to-blob';

function canvasExport() {
  toBlob.init();
  paper.view.draw();
  console.log(saveAs);
  paper.view.element.toBlob(function(blob) { saveAs.saveAs(blob, "littleWhittle.png");});
}

export default function() {
  $(".export").on('click', canvasExport);
}
