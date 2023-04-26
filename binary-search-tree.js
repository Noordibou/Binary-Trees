// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  insert(val, currentNode = this.root) {
    const newNode = new TreeNode(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }
    if (val < currentNode.val) {
      if (!currentNode.left) {
        currentNode.left = newNode;
        return this;
      } else {
        return this.insert(val, currentNode.left);
      }
    }

    if (val > currentNode.val) {
      if (!currentNode.right) {
        currentNode.right = newNode;
        return this;
      } else {
        return this.insert(val, currentNode.right);
      }
    }
  }

  // search2(val) {
  //   let current = this.root;

  //   while (current) {
  //     if (current.val === val) return true;

  //     if (current.val > val) {
  //       current = current.left;
  //     } else {
  //       current = current.right;
  //     }
  //   }

  //   return false;
  // }

  search(val, current = this.root) {
    if (!current) return false;

    if (current.val === val) return true;

    if (current.val > val) {
      return this.search(val, current.left);
    } else {
      return this.search(val, current.right);
    }
  }

  // self, left, right
  preOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;
    
    if (currentNode) {
      console.log(currentNode.val);
      this.preOrderTraversal(currentNode.left);
      this.preOrderTraversal(currentNode.right);
    }

    return this;
  }

// left, self, right;
  inOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;

    if (currentNode) {
      this.inOrderTraversal(currentNode.left);
      console.log(currentNode.val);
      this.inOrderTraversal(currentNode.right);
    }

    return this;
  }

// left, right, self
  postOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;

    if (currentNode) {
      this.postOrderTraversal(currentNode.left);
      this.postOrderTraversal(currentNode.right);
      console.log(currentNode.val);
    }

    return this;
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    const queue = [];
    queue.push(this.root);

    while (queue.length) {
      let current = queue.shift();
      console.log(current.val)

      if (current.left) {
        queue.push(current.left)
      } 
      if (current.right) {
        queue.push(current.right)
      }
    }

    return this;
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    const stack = [];
    stack.push(this.root);

    while (stack.length) {
      let current = stack.pop();
      console.log(current.val)

      if (current.left) {
        stack.push(current.left)
      } 
      if (current.right) {
        stack.push(current.right)
      }
    }

    return this;
  }
};

module.exports = { BinarySearchTree, TreeNode };
