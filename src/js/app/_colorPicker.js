function setLayerColor(color, opacity) {
  app.layers[app.activeLayer].fillColor = color;
  app.layers[app.activeLayer].opacity = opacity;
  project.layers[app.activeLayerIndex].set({
    fillColor: color,
    opacity: opacity
  });
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
