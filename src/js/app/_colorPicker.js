function setLayerColor(color, opacity) {
  app.layers[app.activeLayer].fillColor = color;
  app.layers[app.activeLayer].opacity = opacity;

  if (app.activeLayer !== "layerBg") {
    project.layers[app.activeLayerIndex].firstChild.children[1].set({
    fillColor: color,
    opacity: opacity
    });
  } else {
    project.layers[app.activeLayerIndex].getItem({class: paper.Path}).set({
      fillColor: color,
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
