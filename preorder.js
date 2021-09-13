// freecodecamp
// nodes traverse push
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
                curr = curr.right;
            } else {
                return null;
            }
        }
    }
    preorder(root = this.root) {
        if(root === null) {
            return null;
        }
        const nodes = [];
        const traverse = (root) => {
            if(root === null) {
                return;
            }
            nodes.push(root.value);
            traverse(root.left);
            traverse(root.right);
        };
        traverse(root);
        return nodes;
    }
    inorder(root = this.root) {
        if(root === null) {
            return null;
        }
        const nodes = [];
        const traverse = (root) => {
            if(root === null) {
                return;
            }
            traverse(root.left);
            nodes.push(root.value);
            traverse(root.right);
        };
        traverse(root);
        return nodes;
    }
    postorder(root = this.root) {
        if(root === null) {
            return null;
        }
        const nodes = [];
        const traverse = (root) => {
            if(root === null) {
                return;
            }
            traverse(root.left);
            traverse(root.right);
            nodes.push(root.value);
        };
        traverse(root);
        return nodes;
    }
}