class ShoppingCartObserver {
  // instance properties 
  items = [];
  observers = [];

  // add item 
  addItem(item) {
    // add item to items 
    this.items.push(item);
    // notify all subscribers that an item has been added
    this.notifyAll();
  }

  // add subscriber to observers 
  subscribe(observer) {
    this.observers.push(observer);
  }

  // broadcast information to all subscribers
  notifyAll() {
    this.observers.forEach(observer => observer(this.items))
  }
}

// instance creation 
const shoppingCart = new ShoppingCartObserver;

const updateCart = (items) => {
  // update the ui based on the items
  console.log("Updating cart...");

  // get cart element 
  const cartElem = document.getElementById("header-cart");

  // adjust the content
  cartElem.innerText = `Cart(${items.length})`
}

const updatePopUp = (items) => {
  // update the ui based on the items
  console.log("Updating pop up");

  // get pop up element
  const popUpElem = document.getElementById("pop-up");

  // adjust the content
  popUpElem.innerText = `You have added ${items[items.length - 1]}`;

  // show the popup 
  popUpElem.style.display = "block";
}

shoppingCart.subscribe(updateCart);
shoppingCart.subscribe(updatePopUp);


