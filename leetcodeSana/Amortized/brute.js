class DynamicArray {
    constructor() {
        this.array = new Array(1);  // Start with an initial capacity of 1
        this.size = 0;  // Number of elements in the array
        this.capacity = 1;  // Initial capacity
    }

    push(value) {
        // If the array is full, double its capacity
        if (this.size === this.capacity) {
            this.resize();
        }

        // Add the new value and increment size
        this.array[this.size] = value;
        this.size++;
    }

    resize() {
        console.log(`Resizing from ${this.capacity} to ${this.capacity * 2}`);
        
        // Double the capacity
        this.capacity *= 2;
        let newArray = new Array(this.capacity);
        
        // Copy existing elements to the new array
        for (let i = 0; i < this.size; i++) {
            newArray[i] = this.array[i];
        }

        // Replace the old array with the new one
        this.array = newArray;
    }

    print() {
        console.log("Array contents:", this.array.slice(0, this.size));
    }
}

// Example usage
let dynamicArray = new DynamicArray();

for (let i = 1; i <= 10; i++) {
    dynamicArray.push(i);
    dynamicArray.print();
}
