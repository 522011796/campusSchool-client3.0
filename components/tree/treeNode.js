const hasOwnProperty = Object.prototype.hasOwnProperty;
export default class Node {
  constructor(options) {
    this.data = null;
    this.expanded = false;
    this.parent = null;

    for (let name in options) {
      if (options.hasOwnProperty(name)) {
        this[name] = options[name];
      }
    }

    this.level = 0;

    if (this.parent) {
      this.level = this.parent.level + 1;
    }
  }
}
