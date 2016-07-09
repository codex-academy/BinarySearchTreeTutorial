var TreeNode = function(data, left, right){

    this.data = data;
    this.left = left;
    this.right = right;

}

var BST = function(){
    this.root = null;

    this.add = function(num){
        var newNode = new TreeNode(num, null, null);
        if (this.root === null){
            this.root = newNode;
        }
        else{
            if (newNode.data < this.root.data){
                if (this.root.left === null)
                    this.root.left = newNode;
            }
            else{
                if (this.root.left === null)
                    this.root.right = newNode;
            }
        }
    }
}


var bst = new BST();
console.log(bst.root);

bst.add(7);
console.log(bst.root);

bst.add(14);
console.log(bst.root);

bst.add(6);
console.log(bst.root);

bst.add(13);
console.log(bst.root);
