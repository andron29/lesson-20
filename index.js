class Menu {
    constructor(elem) {
      this._elem = elem;
      elem.onclick = this.onClick.bind(this); 
    }
    but1() {
      alert('You clicked First button');
      console.log('capturing', 'this.tagName');
    }
    but2() {
      alert('You clicked Second button');
      console.log('capturing', 'this.tagName');
    }
    but3() {
      alert('You clicked Third button');
      console.log('capturing', 'this.tagName')
    }
    onClick(event) {
      let action = event.target.dataset.action;
      if (action) {
        this[action]();
    }
  };
}

new Menu(menu);
