class CircularQueue {
    constructor() {
        this.queue = [];
        this.write = 0;
        this.read = 0;
        this.max = 0;
    }
    fill(size) {
        while(size > 0) {
            this.max++;
            this.queue.push(null);
            size--;
        }
    }
    print() {
        return this.queue;
    }
    enqueue(item) {
        if(this.queue[this.write] === null) {
            this.queue[this.write++] = item;
            if(this.write > this.max) {
                this.write = 0;
            }
            return item;
        }
        return null;
    }
    dequeue() {
        if(this.queue[this.read] != null) {
            let item = this.queue[this.read];
            this.queue[this.read++] = null;
            if(this.read > this.max) {
                this.read = 0;
            }
            return item;
        }
        return null;
    }
}

const cq = new CircularQueue();
cq.fill(5);
cq.enqueue(1);

console.log(cq.print());