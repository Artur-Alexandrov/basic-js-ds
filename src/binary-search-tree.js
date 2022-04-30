const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor(){
    this._root = null;
  }

  root() {
    
      return this._root;
    
  }

  add(data) {
    {
      
      const newNode  = new Node(data);
      if (this._root === null) {
          this._root = newNode;

      } else {
          let currentNode = this._root;
          while(true) {
              if(data < currentNode.data) {
                  
                  if(!currentNode.left) {
                      currentNode.left = newNode;
                      return this;
                  }
                  currentNode = currentNode.left 
              } else {
                  
                  if(!currentNode.right) {
                      currentNode.right = newNode;
                      return this;

                  }
                  currentNode = currentNode.right
              }
          }
      }
    }
  }

  has(data) {
    if(!this._root) {
      return false;
  }
  let currentNode = this._root;
  while(currentNode) {
      if(data < currentNode.data) {
        currentNode = currentNode.left
      } else if (data > currentNode.data) {
          currentNode = currentNode.right;
      } else if (currentNode.data === data) {
          return true;
      }
    
  }
  return false
  }

  find(data) {
    if(!this._root) {
      return false;
  }
  let currentNode = this._root;
  while(currentNode) {
      if(data < currentNode.data) {
        currentNode = currentNode.left
      } else if (data > currentNode.data) {
          currentNode = currentNode.right;
      } else if (currentNode.data === data) {
          return currentNode;
      }
    
  }
  return null
}
  

  remove(data) {
    
    // remove line with error and write your code here
  }

  min() {
    if(!this._root) {
      return null;
  }

  let l =  traverseInOrder(this._root, []);
  return l[0]
  }

  max() {
    if(!this._root) {
      return null;
  }
  let l =  traverseInOrder(this._root, []);
  return l[l.length - 1]
  }
}

function traverseInOrder(node, list){
  if(node.left) {
    traverseInOrder(node.left, list);
  }
  list.push(node.data);
  if(node.right) {
    traverseInOrder(node.right, list);
  }
  return list;
}



module.exports = {
  BinarySearchTree
};