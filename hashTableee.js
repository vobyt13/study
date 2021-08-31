// freecodecamp
// merlin. butter knife.

class Hash {
    constructor(string) {
        this.string = string;
        this.hash = 0;
        this.called = 0;
    }
    hashed() {
        this.called++;
        var hash = 0;
        for(var i = 0; i < this.string.length; i++) {
            this.hash += this.string.charCodeAt(i);
        }
    }
}

class HashTable {
    constructor() {
        this.collection = {};
    }

    add(key, val) {
        // hash the key
        var theHash = new Hash(key);
        theHash.hashed();
        // if there is no key
        if(!this.collection.hasOwnProperty(theHash)) {
            // 2d object
            // collection { {.hash} }
            this.collection[theHash] = {};
        }
        // collection : { {hidden} : { key : value } }
        this.collection[theHash][key] = val;
    }

    remove(key) {
        var theHash = new Hash(key);
        theHash.hashed();
        var hashedObj = this.collection[theHash];
        if(hashedObj.hasOwnProperty(key)) {
            delete hashedObj[key];
        }
        if(!Object.keys(hashedObj).length) {
            delete this.collection[theHash];
        }
    }

    lookup(key) {
        var theHash = new Hash(key);
        theHash.hashed();
        // if collection has hashed 
        var hashedObj = this.collection[theHash];
        if(hashedObj.hasOwnProperty(key)) {
            // return value stored in key.
            return this.collection[theHash][key];
        }
        return null;
    }
}

const hashTable = new HashTable();
hashTable.add("mail", 3);
hashTable.add("armor", 2);
let output = JSON.stringify(hashTable);
console.log(output);

let value = hashTable.lookup("armor");
console.log(value);

// hashTable.remove("mail");
console.log(output);
