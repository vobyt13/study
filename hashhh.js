// freecodecamp

class HashTable {
    constructor() {
        this.collection = {};
        this.called = 0;
    }
    add(key, value) {
        this.called++;
        let string = new Hash();
        string.hashed(key);

        if(!this.collection[string.hash]) {
            this.collection[string.hash] = {};
        }
        this.collection[string.hash][key] = value;
    }
    remove(key) {
        let string = new Hash();
        string.hashed(key);
        if(this.collection[string.hash]) {
            delete this.collection[string.hash];
        } else {
            return key;
        }

    }
    lookup(key) {
        let string = new Hash();
        string.hashed(key);
        if(this.collection[string.hash]) {
            return this.collection[string.hash][key];
        } else {
            return key;
        }
    }
    has(hash, key) {
        return this.collection[hash].hasOwnProperty(key);
    }
}

class Hash {
    constructor(string) {
        this.hash = 0;
    }
    hashed(string) {
        var count = 0;
        while(count < string.length) {
            this.hash += string.charCodeAt(count);
            count++;
        }
    }
}

