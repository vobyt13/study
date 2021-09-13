class Node {
    constructor() {
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
                    curr.left = new Node(value);
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
        }
        traverse();
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

        traverse();
        return nodes;
    }

    postorder(root = this.root) {
        if(root === null) {
            return null;
        }
        const nodes = [];
        const traverse = (root) => {
            if(this.root === null) {
                return null;
            }
            traverse(root.left);
            traverse(root.right);
            nodes.push(root.value);
        }
        traverse();
        return nodes;
    }
}