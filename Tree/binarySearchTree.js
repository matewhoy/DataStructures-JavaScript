class BinaryTree {
  constructor() {
    this.data = [];
  }

  add(newValue) {
    let currentNode = 0;

    while (this.getData(currentNode) !== undefined) {
      if (newValue < this.getData(currentNode)) {
        currentNode = this.getLeftChild(currentNode);
      } else {
        currentNode = this.getRightChild(currentNode);
      }
    }

    this.data[currentNode] = newValue;
  }

  getData(index) {
    return this.data[index];
  }

  getParent(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChild(index) {
    return 2 * index + 1;
  }

  getRightChild(index) {
    return 2 * index + 2;
  }

  search(value) {
    let currentNode = 0;

    while (this.getData(currentNode) != value) {
      if (value < this.getData(currentNode)) {
        currentNode = this.getLeftChild(currentNode);
      } else {
        currentNode = this.getRightChild(currentNode);
      }
    }

    return {
      found: currentNode != null,
      data: {
        value,
        index: currentNode,
        parentValue: this.getData(this.getParent(currentNode)),
        left: this.getData(this.getLeftChild(currentNode)),
        right: this.getData(this.getRightChild(currentNode)),
      },
    };
  }
}

const binaryTree = new BinaryTree();
binaryTree.add(10);
binaryTree.add(4);
binaryTree.add(2);
binaryTree.add(8);
binaryTree.add(20);
binaryTree.add(17);
binaryTree.add(170);

console.log(binaryTree.data);
console.log(binaryTree.search(8));