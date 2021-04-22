class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor() {
      this.first = null;
      this.last = null;
      this.length = 0;
    }
    enqueue(value) {
      const  newNode = new Node(value);
      if(this.length === 0) {
        this.first = newNode;
        this.last = newNode;
      } else {
        this.last.next = newNode;
        this.last = newNode;
      }
      this.length++;
      return this;
    }
    peek() {
      return this.first;
    }
    dequeue() {
      if(this.length === 0) {
        console.error('El Queue está vacío, no hay elementos para eliminar');
      } else if(this.length === 1) {
        const deleteNode = this.first;
        this.first = deleteNode.next;
        this.length--;
      } else {
        const deleteNode = this.first;
        this.first = deleteNode.next;
        this.last = null;
        this.length--;
      }
      return this;
    }
  }
  
  const myQueue = new Queue();