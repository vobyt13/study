// freecodecamp

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
            if(value < curr.value) {
                if(!curr.left) {
                    curr.left = new Node(value);
                    return undefined;
                }
                curr = curr.left;
            } else if(value > curr.value) {
                if(!curr.right) {
                    curr.right = new Node(value);
                    return undefined;
                }
                curr = curr.right;
            } else {
                return null;
            }
        }
    }
    isBinarySearchTree(node = this.root) {
        if(node === null) {
            return null;
        } else {
            let bst = this.checkTree(node);
        }
        // this.checkTree(node);
        return bst;
    }
    checkTree(node, isBST = false) {
        if(node.left != null) {
            const left = node.left;
            if(left.value > node.value) {
                isBST = false;
            } else {
                this.checkTree(left);
            }
        }
        if(node.right != null) {
            const right = node.right;
            if(right.value < node.value) {
                isBST = false;
            } else {
                this.checkTree(right);
            }
        }
        return isBST;
    }
}

const bst = new BinarySearchTree();
bst.add(1);
bst.add(3);
bst.add(2);
bst.add(5);

let isBst = bst.isBinarySearchTree();