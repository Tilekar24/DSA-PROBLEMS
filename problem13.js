// Implement Queue using Stacks: Use two stacks to implement a queue with enqueue and dequeue operations.

class Queues1 {
    constructor() {
        this.stack1 = []; 
        this.stack2 = []; 
    }

    // Method to add an item to the queue
    enqueue(item) {
        this.stack1.push(item); // Push the item onto stack1
    }

    // Method to remove and return the front item from the queue
    dequeue() {
        // If stack2 is empty, we need to transfer elements from stack1 to stack2
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop()); // Move items to stack2
            }
        }

        // If stack2 is still empty, the queue is empty
        if (this.stack2.length === 0) {
            throw new Error("Queue is empty");
        }

        // Pop the top item from stack2, which is the front of the queue
        return this.stack2.pop();
    }

    // Method to check if the queue is empty
    isEmpty() {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }

    // Method to get the front item without removing it
    peek() {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop()); // Move items to stack2
            }
        }

        if (this.stack2.length === 0) {
            throw new Error("Queue is empty");
        }

        // Return the top item of stack2
        return this.stack2[this.stack2.length - 1];
    }

    // Method to get the number of items in the queue
    size() {
        return this.stack1.length + this.stack2.length;
    }
}

const queue = new Queues1();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); 
console.log(queue.peek());     
console.log(queue.size());    
console.log(queue.dequeue());  
console.log(queue.dequeue());  
console.log(queue.isEmpty()); 