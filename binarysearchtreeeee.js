class Node {
    constructor(item) {
        this.value = item;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    add(value) {
        let node = new Node(value);

        if(!this.root) {
            this.root = node;
            return undefined;
        }
        var pointer = this.root;

        while(pointer) {
            if(node.value < pointer.value) {
                if(!pointer.left) {
                    pointer.left = node;
                    return undefined;
                }
                pointer = pointer.left;
            } else if(node.value > pointer.value) {
                if(!pointer.right) {
                    pointer.right = node;
                    return undefined;
                }
                pointer = pointer.right;
            } else {
                return null;
            }
        }
    }
    findMin() {
        if(!this.root) {
            return null;
        }

        var pointer = this.root;
        while(pointer) {
            if(pointer.left) {
                pointer = pointer.left;
            }
        }
        return pointer.value;
    }
    findMax() {
        if(!this.root) {
            return null;
        }
        var pointer = this.root;
        while(pointer.right) {
            pointer = pointer.right;
        }
        return pointer.value;

    }
    isPresent(value) {
        if(!this.root) {
            return null;
        }

        var pointer = this.root;
        while(pointer) {
            if(value == pointer.value) {
                return true;
            } else {
                if(value < pointer.value) {
                    pointer = pointer.left;
                } else if(value > pointer.value) {
                    pointer = pointer.right;
                }
            }
            
        }
    }
}


const bst = new BinarySearchTree();
bst.add(1);
bst.add(4);
bst.add(5);
bst.add(8);

let ts = bst.isPresent(5);
console.log(ts);