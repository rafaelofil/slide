export default class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
  }

  onStart(event) {
    event.preventDefault();
    this.wrapper.addEvenListener('mousemove', this.onMove);
  }

  onMove(event) {

  }

  onEnd(event) {
    this.wrapper.removeEventListener('mousemove', this.onMove);
  }

  addSlideEvents() {
    this.wrapper.addEvenListener('mousedown', this.onStart);
    this.wrapper.addEvenListener('mouseup', this.onEnd);
  }

  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }

  init() {
    this.bindEvents();
    this.addSlideEvents();
    return this;
  }
}