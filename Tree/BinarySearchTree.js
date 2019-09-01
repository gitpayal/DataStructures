(function main() {
  class BinarySearchTree {
      constructor() {
          this.root = null
      }
      insert(val){
          let newNode = new TreeNode(val);
          if (this.root == null){
              this.root = newNode;
          } else {
              this.insertNode(newNode,this.root)
          }
          
      } 
      insertNode(node,root){
      
      if(node.data < root){
          if(root.left == null){
              root.left = node
          } else {
          this.insertNode(node,root.left)
          }
         
      } else {
            if(root.right == null){
              root.right = node
          } else {
           this.insertNode(node,root.right)
          }
      }       
    }
    
  }
  function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
  }

 let bst = new BinarySearchTree();
 bst.insert(5);
 bst.insert(11);
 bst.insert(2);
 bst.insert(1);
     bst.insert(1);

console.log(bst)

}());
