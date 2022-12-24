class Button {
  constructor(label) {
    this.label = label;
  }
  click() {
    console.log(`${this.label} is clicked`);
  }
}

class fancyButton extends Button {
  constructor(label, color) {
    super(label);
    this.color = color;
  }

  glow() {
    console.log(`The button glows in ${this.color}`);
  }
}

const btn = new fancyButton("Print", "green");
btn.glow();
btn.click();
