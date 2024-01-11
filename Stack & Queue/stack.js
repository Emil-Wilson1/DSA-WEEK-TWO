class Node {
    constructor(data) {
      this.data = data;
      this.next = null;

    }
  }
  
  class Stack {
    constructor() {
      this.top = null;
      this.size = 0;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    push(item) {
      const newNode = new Node(item);
      if (!this.top) {
        this.top = newNode;
      } else {
        newNode.next = this.top;
        this.top = newNode;
      }
      this.size++;
    }
  
    pop() {
      if (this.isEmpty()) {
        console.log("Stack is empty");
        return null;
      }
      const poppedNode = this.top;
      this.top = this.top.next;
      this.size--;
      return poppedNode.data;
    }
  
    peek() {
      if (this.isEmpty()) {
        console.log("Stack is empty");
        return null;
      }
      return this.top.data;
    }
  
    getSize() {
      return this.size;
    }

    printStack() {
        if (this.isEmpty()) {
          console.log("Stack is empty");
          return;
        }
    
        let current = this.top;
        let stackElements = "";
        while (current !== null) {
          stackElements += current.data + " ";
          current = current.next;
        }
        console.log(stackElements);
      }

      minimum(){
        let min=this.top.data
        let curr=this.top
        while(curr!==null){
          if(curr.data<min){
            min=curr.data
          }
          curr=curr.next
        }
        return min
      }

      removeMiddle(middleIdx, currentIdx) {
        if (middleIdx === currentIdx) {
          return this.pop();
        }
        const temp = this.pop();
        const mid = this.removeMiddle(middleIdx, currentIdx + 1);
        this.push(temp);
        return mid;
      }
  }
  

  const stack = new Stack();
  
  stack.push(5);
  stack.push(10);
  stack.push(15);

  stack.printStack();

  console.log(stack.minimum());
  
  console.log("Peek:", stack.peek()); 
  middleIndex=Math.floor((stack.getSize())/2);
  currentIndex=0
  console.log(stack.removeMiddle(middleIndex,currentIndex));
  

  
  console.log("Size of the stack:", stack.getSize()); 
  
  stack.printStack();