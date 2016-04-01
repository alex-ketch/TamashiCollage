import $ from 'jquery';
import paper from 'paper';
import {app, closePath, tool} from './index.js';

export default function cursor() {
  $('.lassoFree').on('click', function(){
    app.tool = "free";
    $(this).addClass("active");
    $('.lassoPoly').removeClass("active");
  });

  $('.lassoPoly').on('click', function(){
    app.tool = "poly";
    $(this).addClass("active");
    $('.lassoFree').removeClass("active");
  });

  tool.onMouseDown = function(event) {
    if (app.activeLayer !== "layerBg") {
      if (!app.currentPath) {
        newShape();
      } if (app.currentPath.isEmpty()) {
        app.currentPath.add(event.point);
        app.currentPath.add(event.point);
      } else {
        var pointDist = event.point.getDistance(app.currentPath._segments[0].point);
        console.log(pointDist);
        if (pointDist < 15) {
          closePath();
        } else {
          app.currentPath.add(event.point);
        }
      }
    }
  }

  tool.minDistance = 8;
  tool.onMouseDrag = function(event) {
    if (app.activeLayer !== "layerBg") {
      if (app.tool === "free") {
        app.currentPath.add(event.point);
      } else if (app.tool === "poly" && !app.currentPath.closed) {
        app.currentPath.segments[app.currentPath.lastSegment.index].set({
          point: event.point
        })
      }
    }
  }

  tool.onMouseMove = function(event) {
    if (app.tool === "poly" && app.currentPath.segments.length >= 1 && !app.currentPath.closed) {
      app.currentPath.segments[app.currentPath.lastSegment.index].set({
        point: event.point
      })
    }
  }

  tool.onMouseUp = function(event) {
    if (app.tool === "free" && app.activeLayer !== "layerBg") {
      closePath();
    };
  }
}
