function setTexture(targetTexture) {
  var tempLayer = paper.project.activeLayer.getItem({class: paper.Raster});
  tempLayer.set({
    source: "/assets/textures/" + targetTexture
  });
  $("." + app.activeLayer + " .texture").css({
    'backgroundImage': 'url("/assets/textures/small/' + targetTexture + '")',
    'border': 'none',
    'width': '160px',
    'height': '80px'
  });
  // $("." + app.activeLayer + " .texture").hide();
}

$(".texturePicker img").on('click', function(){
  setTexture($(this).attr("data"));
})
