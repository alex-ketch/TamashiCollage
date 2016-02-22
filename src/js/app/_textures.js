function setTexture(targetTexture) {
  var tempLayer = paper.project.activeLayer.getItem({class: paper.Raster});
  tempLayer.set({
    source: "/assets/textures/" + targetTexture
  })
}

$(".texturePicker img").on('click', function(){
  setTexture($(this).attr("data"));
})

