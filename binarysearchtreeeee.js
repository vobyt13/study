class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    add(value) {
       
        if(!this.root) {
            this.root = new Node(value);
            return undefined;
        }
        var curr = this.root;
        while(curr) {
            if(curr.value < value) {
                if(!curr.left) {
                    curr.left = new Node(value);
                    return undefined;
                }
                curr = curr.left;
            } else if(curr.value > value) {
                if(!curr.right) {
                    curr.right = new Node(value);
                    return undefined;
                }
            } else {
                return null;
            }
        }
    }
    delete(value) {
        var curr = this.root;
        while(curr) {
            if(curr.value === value) {
                let right = curr.right;
                let left = curr.left;
                this.root = curr.right;

                var pointer = this.root;
                while(pointer) {
                    if(pointer.right === null) {
                        pointer.right = left;
                    }
                }
            } else if(value < curr.value)  {
                if(curr.left) {
                    curr = curr.left;
                }
            } else if(value > curr.value) {
                if(curr.right) {
                    curr = curr.right;
                }
            }
        }
    }
}

const bst = new BinarySearchTree();
bst.add(5);
bst.add(10);
bst.add(13);
bst.add(28);
bst.add(22);

bst.delete(13);