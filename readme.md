# Binary Tree tutorial

## Introduction

This tutorial an introduction of how to create and use a Binary Search Tree.

A Binary Tree is a Tree data structure where Nodes can only have two children Nodes. A Binary Search Tree (BST) is a special type of Binary Tree with a left and a right Node, the left Nodes value is always smaller than the parent Nodes value and the right Nodes value is always bigger than the parent Node. A Binary Search Tree is a data structure that is very efficient to search through. The way the data is structured makes it very easy to find data without going through the whole dataset stored in the data structure as one can make assumptions where data will be be in the BST. There are various different type of BST like balanced and unbalanced trees. We will focus one unbalanced Binary Search Trees.

## Create a BST

Let's create our own Binary Search Tree.

Here is a typical Node that can be used for a BST:

```javascript
var TreeNode = function(data, left, right){
    this.data = data;
    this.left = left;
    this.right = right;
};
```

You will see that this Node seems similar to what you used to create Linked List, but instead of a `next` property there is a `left` and a `right` property.

A typical BST `TreeNode` looks like this:

```javascript

var leftNode = new TreeNode(5, null, null);
var rightNode = new TreeNode(13, null, null);

var rootNode = new TreeNode(7, leftNode, rightNode);

console.log(rootNode);
```

> Run the Code using NodeJS. And see what it looks like. Remember to add the TreeNode constructor function to your script

Start with this skeleton and create Binary Search Tree class to which one can add values.

```javascript
var BST = function(){
    this.root = null;
    this.add = function(num){
        //add the code to add Tree Nodes here
    }
}
```

To see all the values in the BST we will be using the [prettyjson](https://www.npmjs.com/package/prettyjson) module.

Using code like this:

```javascript
console.log(prettyjson.render(bst.root));
```

### Step 1

In the `add` function add the following functionality.

If the add function is called:

* and the root node is null initialiaze a new `TreeNode` object. And assign it to the root node.

* if the root Node is not null and the new data value is:
    * smaller than the root Nodes value, add a left Node to the root Node
    * bigger than the root Nodes value, add a right Node to the root Node

What is the outcome?

Not quite what we need...

### Step 2

You should only add Nodes if there is not already a Node, so that you don't override existing Nodes as in `Step 1`. If the value wyou are adding is bigger than the value in the root Node you need to check if the right Node exist already, otherwise we need to check the left Node. You should only add a new Node if the target Node doesn't already exists.

What is the outcome of this?

Still not what you need!

### Step 3

What you need to check is to check if a Node have a left or right Node that already exists depending on the value that is to be added. If the Node already exists we need to apply the logic from step 2 on the Node that already exists. You need to keep on doing this until you found a place to add the new Node. You are looking for a Node that have a left or right Node that is null. That is where the new Node is to be added

## Add functionality to it

Now that you have a Binary Search Tree, how could you use it? One thing it can easily do is finding the smallest entry in the Tree. To that you just need to navigate all the way down the Nodes always selecting the left Node until you find a Node with a null left Node. That Node will contain the smallest Node.

> Try it!

How would you find the biggest number in the Tree?

> Did you find the biggest number?

## Use it

Now go ahead and create a Binary Search Tree that can find Nelisa's most popular and least popular products for a given week.
