class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class Queue {
    constructor() {
      this.front = null;
      this.rear = null;
      this.size = 0;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    enqueue(item) {
      const newNode = new Node(item);
  
      if (this.isEmpty()) {
        this.front = newNode;
        this.rear = newNode;
      } else {
        this.rear.next = newNode;
        this.rear = newNode;
      }
      this.size++;
    }
  

    dequeue() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
        return null;
      }
  
      const removedItem = this.front.data;
      if (this.size === 1) {
        this.front = null;
        this.rear = null;
      } else {
        this.front = this.front.next;
      }
      this.size--;
      return removedItem;
    }
  

    frontElement() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
        return null;
      }
      return this.front.data;
    }
  
    
    getSize() {
      return this.size;
    }
  
   
    printQueue() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
        return;
      }
  
      let current = this.front;
      let queueElements = "";
      while (current !== null) {
        queueElements += current.data + " ";
        current = current.next;
      }
      console.log(queueElements);
    }
  }
  
  
  const queue = new Queue();
  
  queue.enqueue(5);
  queue.enqueue(10);
  queue.enqueue(15);
  queue.printQueue(); 
  // Output: 5 10 15
  
  console.log("Front element:", queue.frontElement()); 
  // Output: Front element: 5
  
  queue.dequeue();
  queue.printQueue(); 
  // Output: 10 15
  
  console.log("Size of the queue:", queue.getSize()); 
  // Output: Size of the queue: 2

  