/** Class representing a Stack. */

class Stack {

    constructor() {
		this._storage = {};
		this._length = 0;
	}

	/*
	* Adds a new value at the end of the stack
	* @param {*} value the value to push
	*/
	push(value) {
		//TODO: add typechecking and check arguments
		this._storage[this._length] = value;
		this._length++;
	}

	/*
	* Removes the value at the end of the stack and return it
	* @param {*} the last and newest value in the stack
	*/
	pop() {
		if(this._length) {
			const lastValue = this._storage[this._length - 1];	
			delete this._storage[this._length - 1];
			this._length--;

			return lastValue;
		}
	}

	/*
	* Returns the value at the end of the stack without removing it
	* @return {*{ the last and newest value in the stack
	*/
	peek() {
		if(this._lenth) {
			return this._storage[this._lenth - 1];
		}	
	}
}

const myStack = new Stack();

myStack.push('zero');
myStack.push('one');
console.log(myStack.peek());
