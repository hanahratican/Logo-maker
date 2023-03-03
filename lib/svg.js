class SVG {
  constructor() {
    this.text = "";
    this.shape = "";
  }
  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
    ${this.shape}
    ${this.text}
</svg>`;
  };
  setText(message, color) {
    this.text = `<text xmlns="http://www.w3.org/2000/svg" x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${message}</text>`
  };
  setShape(shape) {
    this.shape = shape.render();
  };
};

module.exports = SVG
