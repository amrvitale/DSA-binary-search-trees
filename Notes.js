////TREES
/* Trees = data structures that consist of nodes linked together in a certain way. 
Nodes have parent-child relationship.
Each node is linked to 0 or more child nodes and at most, 1 parent.
Special node at top of tree = root node
Root node - from where all other nodes descend, root has noparent.
Nodes without any children are called leaf nodes.
 */


 ////BINARY TREES
 /* Binary tree = tree with additional limitation
 Each node can only have 0, 1 or 2 children (at most 2 children)
 
 A branch in a tree = decision path, a choice that connects 1 node to another*
 Binary tree may have a left branch and a rght branch 
 
 Subtree = mini tree within a binary tree, whose root can be any node and all of its descendeds rooted at that node/

 ///BINARY SEARCH TREES
 /* A binary search tree takes concept of binary trees 1 step further.
 All nodes in left-hand branch of a node are guaranteed to have lower values than the node itself
 All nodes in right-hand branch of a node are guranteed to have a higher value than node itself 
 
 Each node in a BST holds a key, a value, and left and right pointers.
 Left pointer points to left child node
 Right pointer points to right child node

 Each node has a parent node, unless its the root node


 3 fundamental operations of BST:
 - Insert
 - Remove
 - Find


 Insertion
 Essentially, you have to iterate to height of the true
 Average case: nodes inserted equally on left and right branches, produces balanced tree
 Because each row in a balanced tree contains 2x as many nodes as row before, width grows exponentially with # nodes

 Height must grow logarithmically with # of nodes, 
 average case is O(log(n))

 Worst case is when tree skews either left or right O9n)
 best case would inserting root only: O(1)

BSTs tend to be recursive in nature.
 */