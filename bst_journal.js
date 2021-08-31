// a node holds value.
// a teachers handbook.
class Journal {
    constructor() {
      this.cell = null;
    }
    addStudent(name, age) {
      var student = new Entry(name, age);
      if(this.cell === null) {
        this.cell = student;
        return undefined;
      }
      var entries = this.cell;
      while(entries) {
        if(age < entries.age) {
          if(!entries.left) {
            entries.left = student;
            return undefined;
          }
          entries = entries.left;
        } else if(age > entries.age){
        if(!entries.right) {
          entries.right = student;
          return undefined;
        }
        entries = entries.right;
      } else {
        return null;
      }
    }
  }
}
  
class Entry {
    constructor(name, age) {
      this.name = name;
      this.age = age;
  
      this.left = null;
      this.right = null;
    }
}

const journal = new Journal();
journal.addStudent("a", 1);
journal.addStudent("d", 4);
journal.addStudent("c", 3);

