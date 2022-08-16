// Import stylesheets
import './style.css';

// Write Javascript code!
class CreateLIItems {
  constructor(name) {
    this.name = name;
    const listEl = document.createElement('li');
    listEl.textContent = name;
    const parentUL = document.querySelector('#names');
    parentUL.appendChild(listEl);
  }
}

class NameGenerator {
  constructor() {
    this.names = ['VHS', 'Virat', 'Tom Cruise'];
    this.currentNameIdx = 0;
    const btn = document.querySelector('#submit');
    console.log(this);
    btn.addEventListener('click', function () {
      this.addName();
    });
  }

  // this.addName() is called inside a callback function which is again called by a button when click event is generated. So on button element object there is no method called addName hence js will throw error stating that "this.addName is not a function".

  addName() {
    console.log(this);
    const name = this.names[this.currentNameIdx];
    new CreateLIItems(name);
    this.currentNameIdx++;
  }
}

new NameGenerator();
