/*
  ArrayList
  
  We are going to approximate an implementation of ArrayList. In JavaScript terms, that means we are
  going to implement an array using objects. You should not use arrays at all in this exercise, just
  objects. Make a class (or constructor function; something you can call new on) called ArrayList.
  ArrayList should have the following properties (in addition to whatever properties you create):
  
  length - integer  - How many elements in the array
  push   - function - accepts a value and adds to the end of the list
  pop    - function - removes the last value in the list and returns it
  get    - function - accepts an index and returns the value at that position
  delete - function - accepts an index, removes value from list, collapses, 
                      and returns removed value

  As always, you can change describe to xdescribe to prevent the unit tests from running while
  you work
*/

class ArrayList {
    constructor(){
        this.data = {}
        this._length = 0
    }

    pop(){
        // return this.delete(this._length - 1)
        // or
        const res = this.data[this._length - 1];
        delete this.data[this._length - 1];
        this._length--;
        return res;
    }

    get(index){
        return this.data[index]
    }

    push(value){
        this.data[this._length] = value
        this._length++;
    }

    length(){
        return this._length;
    }

    delete(index){
        const res = this.data[index];
        this._collapse(index);
        return res;
    }

    _collapse(index){
        for (let i = index; i < this._length; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this._length - 1];
        this._length--;
    }
}

const arr = new ArrayList();
arr.push("Suresh")
arr.push("Koochana")
arr.push("SK")
console.log(arr.length())
console.log(arr)
console.log(arr.pop())
console.log(arr.length())
console.log(arr.delete(0))
console.log(arr)