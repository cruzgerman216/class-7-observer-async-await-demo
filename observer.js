// Observer Pattern 
// define class 

class Observer {
  // subscribers 
  observers = [];

  // instance method - adding subscribers
  subscribe(fn) {
    this.observers.push(fn);
  }

  // instance method - broadcast information to subscribers
  broadcast(data) {
    this.observers.forEach(sub => sub(data))
  }
}

// observer instance 
const observer = new Observer;

// declare a subscriber
const subscriber = (data) => {
  console.log("This is from subscriber 1")
  console.log("Here is some data, " + data);
}

const subscriberTwo = (data) => {
  console.log("This is from subscriber 2");
  console.log("Here is the data again:", data);
}

console.log("Before subscriber list ", observer.observers)

// adding a subscriber
observer.subscribe(subscriber);
observer.subscribe(subscriberTwo);

console.log("After subscriber list ", observer.subscribe);

// broadcast information to each subscriber
observer.broadcast("John Doe");