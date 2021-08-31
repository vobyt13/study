// geekforgeeks
// algorithmtutor

class CircularQueue {

    constructor(size) {
       this.max = size - 1;
        // empty
        this.front = -1;
        this.rear = -1;
        this.queue = new Array(size);
    }

    enqueue(value) {
        // if front is pointing to the first position in queue 
        // and the rear is pointing at the end of the queue
        // the queue is full
        if((this.front == 0 && this.rear == this.max) ||
         (this.rear == (this.front-1)/(this.max))) { // not too sure about this part
            console.log("queue is full");
            return undefined;
         } else if(this.front == -1) {
            // if queue is empty set both pointers to the first position in queue 
            this.front = 0;
            this.rear = 0;
             // rear is the only moving pointer. set the location of value in queue.
            this.queue[this.rear] = value;
         } else if(this.rear == this.max && this.front !== 0) {
            // the starting position changes?
            // checks if queue has been dequeued. altering the value of front.
            // if end of queue. reset and assign value to start of queue.
            this.rear = 0;
            this.queue[this.rear] = value;
         } else {
            // if not full, empty, or end. place values in queue. 
            this.rear++;
            this.queue[this.rear] = value;
         }
    }

    dequeue() {
        if(this.front == -1) {
            console.log("Queue is empty");
            return undefined;
        }
        let item = this.queue[this.front];
        this.queue[this.front] = null;
        // if front dequeues to rear pointer. the queue is empty.
        if(this.front == this.rear) {
            this.front = -1;
            this.rear = -1;
        // dequeued reached end
        } else if(this.front == this.max) {
            this.front = 0;
        } else { // else continue to dequeue
            this.front++;
        }
        // return 
        return item;
    }

    displayQueue() {
        if(this.front == -1) {
            console.log("queue is empty");
            return undefined;
        }
        console.log("Elements in Circular Queue are: ");
        // if there are elements in the queue and the queue is yet full.
        // iterate through the elements reaching a stopping point.
        if(this.rear >= this.front) {
            for(var i = this.front; i <= this.rear; i++) {
                var element = this.queue[i];
                console.log(`${element}`);
            } // else queue is full and we can iterate through it
        } else {
            for(var i = this.front; i < this.max; i++) {
                var element = this.queue[i];
                console.log(`${element}`);
            }

            for(var i = 0; i <= this.rear; i++) {
                var element = this.queue[i];
                console.log(`${element}`);
            }
        }
    }

}

const queue = new CircularQueue(5);
queue.enqueue(10);
queue.enqueue(9);
queue.enqueue(8);
queue.enqueue(7);
queue.enqueue(6);

queue.displayQueue();