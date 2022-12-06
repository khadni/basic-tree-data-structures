class Tree {
  constructor() {
    this.root = null;
  }

  hasNode(data) {
    return this.searchRoot(this.root, data);
  }

  searchRoot(root, data) {
    if (!root) {
      return false;
    }
    if (root.data === data) {
      return true;
    }
    if (root.data > data) {
      return this.searchRoot(root.left, data);
    }
    if (root.data < data) {
      return this.searchRoot(root.right, data);
    }
  }

  addNode(node) {
    if (!this.root) {
      this.root = node;
    } else {
      this.addToRoot(this.root, node);
    }
  }

  addToRoot(root, node) {
    if (node.data < root.data) {
      if (!root.left) {
        root.left = node.data;
      } else {
        this.addToRoot(root.left, node);
      }
      // quid if node.data = root.data?
    } else {
      if (!root.right) {
        root.right = node.data;
      } else {
        this.addToRoot(root.right, node);
      }
    }
  }
}
