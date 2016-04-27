import paper from 'paper';

export let tool = new paper.Tool();

export var app = {
    tool: "free",
    activeLayer: "layer4",
    currentPath: null,
    activeLayerIndex: 4,
    activePath: null,
    fillColor: "#FFAABB",
    strokeColor: "#43597D",
    layers: {
      layerBg: {
        fillColor: "#c8c0ba",
        texture: null,
        opacity: 1
      },
      layer1: {
        fillColor: "#931ba8",
        texture: "texture_02.png",
        opacity: 1
      },
      layer2: {
        fillColor: "#d7d518",
        texture: null,
        opacity: 1
      },
      layer3: {
        fillColor: "#14deaf",
        texture: "texture_10.png",
        opacity: 1
      },
      layer4: {
        fillColor: "#ffb661",
        texture: null,
        opacity: 1
      }
    }
};
