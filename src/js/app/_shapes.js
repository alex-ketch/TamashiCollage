import paper from 'paper';
import {app} from './_settings.js';

export function newShape() {
  app.currentPath = new paper.Path();
  app.currentPath.set({
    strokeColor: "black",
    dashArray: [10, 6],
    strokeWidth: 2,
    strokeCap: "round",
    strokeJoin: "round"
  });
}

export function closePath() {
  if (app.currentPath && !app.currentPath.isEmpty()) {
    app.currentPath.selected = false;
    app.currentPath.set({
      strokeColor: null,
      strokeWidth: 0
    });
    app.currentPath.closed = true;

    var clipGroup = paper.project.activeLayer.getItem({class: paper.CompoundPath });
    var temp = clipGroup.subtract(app.currentPath);

    if (temp.area === clipGroup.area) {
      clipGroup = clipGroup.replaceWith(clipGroup.unite(app.currentPath));
    } else {
      clipGroup = clipGroup.replaceWith(clipGroup.subtract(app.currentPath));
    }
    clipGroup.clipMask = true;

    app.currentPath.remove();
    temp.remove();

    newShape();
  }
}
