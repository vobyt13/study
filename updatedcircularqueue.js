// freecodecamp
function CircularQueue() {
    // properties
    this.collection = [];
    this.write = 0;
    this.read = 0;
    this.max = 0;
    // methods
    this.fill = (size) => {
        while(size > 0) {
            this.max++;
            this.collection.push(null);
            size--;
        }
    }
    this.enqueue = (item) => {
        if(this.write >= this.max) {
            this.write = 0;
        }
        this.collection[this.write++] = item;
    }
    this.dequeue = () => {
        if(this.read > this.max) {
            this.read = 0;
        }
        var item = this.collection[this.read];
        this.collection[this.read++] = null;
        return item;
    }
}

const cq = new CircularQueue();