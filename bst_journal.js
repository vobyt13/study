// freecodecamp
// a node holds value.
// a teachers handbook.
class Journal {
    constructor() {
      this.cell = null;
      this.low = -1;
      this.high = -1;
    }
    addStudent(name, age) {
      var student = new Entry(name, age);
      student.present();

      if(this.cell === null) {
        this.cell = student;
        return undefined;
      }
      var students = this.cell;
      while(students) {
        if(name < students.name) {
          if(!students.left) {
            students.left = student;
            return undefined;
          }
          students = students.left;
        } else if(name > students.name){
        if(!students.right) {
          students.right = student;
          return undefined;
        }
        students = students.right;
      } else {
        return null;
      }
    }
  }
  findMin() {
    var student = this.cell;
    this.low = this.cell.age;
    if(!student) {
        return null;
    }

    while(student) {
        if(student.low < this.low) {
            this.low = student.age;
        }
        student = student.left;
    }
    return this.low;
  }
  findMax() {
      var entries = this.cell;
      this.high = this.cell.age;
      if(!entries) {
          return null;
      }

      while(entries) {
          if(entries.age > this.high) {
              this.high = entries.age;
          }
          entries = entries.right;
      }
      return this.high;
  }
  isPresent(name, student = this.cell) {
      while(student) {
        if(name == student.name) {
          var attendance = student.attendance;
          if(attendance == true) {
            return true;
          } else {
            return false;
          }
        } else if(this.hash(name) < this.hash(student.name)) {
          return this.isPresent(name, student.left);
        } else if(this.hash(name) > this.hash(student.name)) {
          return this.isPresent(name, student.right);
        } else {
          return false;
        }
      }
  }
  hash(string) {
    var hashed = 0;
    for(var i = 0; i < string.length; i++) {
      hashed += string.charCodeAt(i);
    }
    return hashed;
  }
}
  
class Entry {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.attendance = null;
  
      this.left = null;
      this.right = null;
    }
    present() {
        this.attendance = true;
    }
    absent() {
        this.attendance = false;
    }
}

const journal = new Journal();
journal.addStudent("abe", 1);
journal.addStudent("abeeee", 4);
journal.addStudent("abeee", 3);
// let low = journal.findMin();
// console.log(low);
let find = journal.isPresent("abeee");
console.log(find);