//1) Draw a BST
//Given the data 3,1,4,6,9,2,5,7, if you were to 
//insert this into an empty binary search tree, 
//what would the tree look like? (Draw the tree, no coding needed here.)

//2. Remove the root
//Show how the above trees would look like if you deleted the root of each tree. 
//(Draw the trees, no coding needed here.)

// Numbers Binary Search Tree Solution to 1 & 2: https://ibb.co/nwD46d2

// Letters Binary Search Tree Solution to 1 & 2: https://ibb.co/1sGzGys 

//3 Create a BST Class with its core functions (insert, remove, find)



//

const BST = require('./binarySearchTree')



//1) Draw a BST
//Given the data 3,1,4,6,9,2,5,7, if you were to 
//insert this into an empty binary search tree, 
//what would the tree look like? (Draw the tree, no coding needed here.)

//2. Remove the root
//Show how the above trees would look like if you deleted the root of each tree. 
//(Draw the trees, no coding needed here.)

// Numbers Binary Search Tree Solution to 1 & 2: https://ibb.co/nwD46d2

// Letters Binary Search Tree Solution to 1 & 2: https://ibb.co/1sGzGys 

//3.1) Create a binary search tree called BST and insert 3,1,4,6,9,2,5,7 into your tree. 
//Compare your result with the result from the 1st exercise.

function main() {
    const myBST = new BinarySearchTree();
    const num = [3,1,4,6,9,2,5,7]
    num.forEach((num) => myBST.insert(num));
    return myBST
}
//console.log(main());


//3.2) Create a binary search tree called BST and insert E A S Y Q U E S T I O N into your tree. 
//Compare your result with the result from the 1st exercise.
function main2() {
  const myBST = new BinarySearchTree();
  const letters = ['E', 'A', 'S', 'Y', 'Q', 'U', 'E', 'S', 'T', 'I', 'O', 'N'];
  letters.forEach((letter) => myBST.insert(letter));
  return myBST
}
//console.log(main2())

//4) What does this program do?
// Without running this code in your code editor, explain what the following program does. 
//Answer: Sums the tree? 

//Show with an example the result of executing this program. 

function tree(t){
    if(!t){
        return 0;
    }
    return tree(t.left) + t.value + tree(t.right)
}

  const bst1 = new BinarySearchTree();
    bst1.insert(1, 1);
    bst1.insert(3, 3);
    bst1.insert(6, 6);
    bst1.insert(5, 5);

//console.log(tree(bst1))
//What is the runtime of this algorithm? Answer: O(log(n)) ?

//5) Height of a BST 
//Write an algorithm to find the height of a binary search tree. 
//What is the time complexity of algo?
//Answer: It depends, if it is a balanced binary search tree then the time complexity is logarithmic O(log(n)), if it is a skewed binary search tree the it will have a linear time of O(n)
function height(t) {
    if (t.key == null) {
        return 0;
    }
    else {
        if (t.left && t.right) {
            if (height(t.right) > height(t.left)) {
                return 1 + height(t.right);
            }
            return 1 + height(t.left);  
        }
        else if (t.left) {
            return 1 + height(t.left);
        }
        else if (t.right) {
            return 1 + height(t.right);
        }
    }
    return 1
} 

//console.log(height(main()));

//6) Is it a BST?
//Write an algo to check whether an arbitary binary tree is a binary search tree, assuming no duplicates.
function isItBSTree(tree) {
  if (!tree) return false;

  if (tree.right) {
    if (tree.right.key > tree.key) {
      isItBSTree(tree.right);
    } else {
      return false;
    }
  }

  if (tree.left) {
    if (tree.left.key < tree.key) {
      isItBSTree(tree.left);
    } else {
      return false;
    }
  }

  return true;
}
//console.log(isItBSTree(main()));

//7) 3rd largest node
// Write an algorithm to find the 3rd largest node in a binary search tree.- something is wrong with this 

  function findThirdLargest(inputTree){
    let treeArray = []
    function iterateTree(inputTree){
      treeArray.push(inputTree.value)
    if(inputTree.right){
     iterateTree(inputTree.right)}
    if(inputTree.left){
      iterateTree(inputTree.left)}
  
   }
    iterateTree(inputTree)
    let sortedArray = treeArray.sort((a, b) => a < b)
    return sortedArray[2]
  }
//console.log(findThirdLargest(bst1()))

//8) Write an algorithm that checks if a BST is balanced (i.e., a tree where no 2 leaves differ in distance from the root by more than 1).
function balanced(node) {
  let rheight = 0
  let lheight = 0
  if (node == null) {
    return true
  } else {
    if (node.right) {
      rheight = height(node.right)
    }
    if (node.left) {
      lheight = height(node.left)
    }
    if (Math.abs(rheight - lheight) <= 2) {
      return true
    } else return false
  }
}
//console.log(balanced(main()));

//9)
  function checkSame(arr1, arr2){
    if(arr1[0] !== arr2[0]){
      return false
      }
    if(arr1.length !== arr2.length){
      return false
    }
    let compareArr = []
    function checkRecur(array, num){
      if(array.length === 0){
        return
      }
      if(array.length === 1){
        compareArr.push(array[0])
        return}
  
      let rightArr = array.filter(arrNum => arrNum > num)
      let rightNum = rightArr.shift()
      compareArr.push(rightNum)
      checkRecur(rightArr, rightNum)
  
      let leftArr = array.filter(arrNum => arrNum < num)
      let leftNum = leftArr.shift()
      compareArr.push(leftNum)
      checkRecur(leftArr, leftNum)
    }
    let inputNum = arr1.shift()
  
    checkRecur(arr1, inputNum)
    checkRecur(arr2, inputNum)
  
    let contrastArr = compareArr.splice(0, (compareArr.length/2))
    
    for(i = 0; i < compareArr.length; i ++){
      if(compareArr[i] !== contrastArr[i]){
        return false
      }
    } return true
  }
  
  //console.log(checkSame([3, 5, 4, 6, 1, 0, 2], [3, 1, 5, 2, 4, 6, 0]))