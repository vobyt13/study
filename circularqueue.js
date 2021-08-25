// wikipedia
// programiz
// freecodecamp
// geeksforgeeks

class circularQueue {
    constructor(size) {
        // this.empty = -1;
        this.rear = -1;
        this.front = -1;
        this.max = size - 1;
        this.queue = [];
    }
    enqueue(value) {
        // if full
        if (this.front === this.max) {
            this.front = 0;
            this.rear = 0;
            this.queue[this.rear] = value;
        } // start out empty
        else if (this.front === -1) {
            this.front = 0;
            this.rear++;
            this.queue[this.rear] = value;
            // end up full
        } 
        else {
            this.front++;
            this.rear++;
            this.queue[this.rear] = value;
        }
    }

    dequeue() {
        if (this.front === -1 && this.rear === -1) {
            console.log("Queue is empty.");
        } else if (this.front === this.rear) {
            this.front = 0;
            this.rear = 0;
        }
        let data = this.queue[this.front];
        this.front++;
        return data;
    }
    display() {
        return this.queue;
    }
}

let queue = new circularQueue(5);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
queue.enqueue(8);

var t = queue.dequeue();
var r = queue.dequeue();
var x = queue.dequeue();
console.log(t);
console.log(r);
console.log(x);

console.log(queue.display());