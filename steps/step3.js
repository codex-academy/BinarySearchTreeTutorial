var prettyjson = require('prettyjson');


var TreeNode = function(data, left, right) {

    this.data = data;
    this.left = left;
    this.right = right;

}

var BST = function() {
    this.root = null;

    this.add = function(num) {
        var newNode = new TreeNode(num, null, null);
        if (this.root === null) {
            this.root = newNode;
        } else {
            var current = this.root;
            while (true) {
                if (newNode.data < current.data) {
                    if (current.left === null) {
                        current.left = newNode;
                        break;
                    }
                    current = current.left;
                } else {
                    if (current.right === null) {
                        current.right = newNode;
                        break;
                    }
                    current = current.right;
                }
            }
        }
    }
}


var bst = new BST();
console.log(bst.root);

bst.add(7);
//console.log(bst.root);

bst.add(14);
//console.log(bst.root);

bst.add(6);
//console.log(bst.root);

bst.add(13);

bst.add(3);

bst.add(1);
bst.add(9);

console.log(prettyjson.render(bst.root));
