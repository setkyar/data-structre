/** Class representing a Queue.
 * @constructor
*/

class Queue {
	
	constructor() {
		this._storage = {};
		this._length = 0;
		this._headIndex = 0;
	}

	/*
	* Enqueues a new value at the end of the queue
	* @param {*} value - the value to enqueue
	*/
	enqueue(value) {
		//TODO:: typechecking, input validation
		this._storage[this._length + this._headIndex] = value;
		this._length++;
	}
	
	/*
	* Dequeues the value from the 
	* beginning of the queue and returns it
	*/
	dequeue() {
		if (this._length) {
			const firstVal = this._storage[this._headIndex];
			delete this._storage[this._headIndex];
			this._length--;
			this._headIndex++;
		}
	}
	
	/*
	* Returns the value at the beginning of the queue without
	* removing it from the queue
	* @return {*} the first and oldest value in the queue
	*/
	peek() {

	}
}

var myQ = new Queue();
myQ.enqueue('zero');
myQ.enqueue('one');
// { _storage: {0: 'zero', 1: 'one'}
// length: 2
// headIndex:0

myQ.dequeue();
// { _storage: {1: 'one'}
// length: 1
// headIndex: 1
// }

myQ.enqueue('two');
// { _storage: {1: 'one', 2: 'two'}
// lenth: 2
// headIndex: 1
// }
console.log(myQ);
