/**
 * Given a binary tree, determine if it is a valid binary search tree (BST).
 * Assume a BST is defined as follows:
 * The left subtree of a node contains only nodes with keys less than the node's key.
 * The right subtree of a node contains only nodes with keys greater than the node's key.
 * Both the left and right subtrees must also be binary search trees.
 * Input: [2,1,3]
 * Output: true

 * Input: [5,1,4,null,null,3,6]
 * Output: false
 * Explanation: The root node's value is 5 but its right child's value is 4.
 * [10,5,15,null,null,6,20]
 * false

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var isValidBST = function(root,min=Number.MIN_SAFE_INTEGER - 1,max=Number.MAX_SAFE_INTEGER - 1) {
    if (root==null) return true;
    if(root && root.val <= min ){
        return false;
    } 
    if( root && root.val >= max){
        return false;
    } 


   return  isValidBST(root.left,min,root.val) && isValidBST(root.right,root.val,max);
};
