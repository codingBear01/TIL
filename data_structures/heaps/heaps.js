class Heap {
    constructor() {
        this.items = [];
    }

    swap(index1, index2) {
        const temp = this.items[index1];
        this.items[index1] = this.items[index2];
        this.items[index2] = temp;
    }

    parentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    leftChildIndex(index) {
        return index * 2 + 1;
    }

    rightChildIndex(index) {
        return index * 2 + 2;
    }

    parent(index) {
        return this.items[this.parentIndex(index)];
    }

    leftChild(index) {
        return this.items[this.leftChildIndex(index)];
    }

    rightChild(index) {
        return this.items[this.rightChildIndex(index)];
    }

    peek(item) {
        return this.items[0];
    }

    size() {
        return this.items.length;
    }
}

// inherit helpers from heap by extends
class MinHeap extends Heap {
    constructor(items) {
        super(items);
    }

    add(item) {
        this.items.push(item);
        this.bubbleUp();
    }

    // removes the minimum element(the root) from heap and calls bubbleDown() to keep the min-heap order
    poll() {
        const item = this.items[0];
        this.items[0] = this.items[this.items.length - 1];
        this.items.pop();
        this.bubbleDown();

        return item;
    }

    bubbleDown() {
        let index = 0;

        while (
            this.leftChild(index) &&
            this.leftChild(index) < this.items[index]
        ) {
            let smallerIndex = this.leftChildIndex(index);

            if (
                this.rightChild(index) &&
                this.rightChild(index) < this.items[smallerIndex]
            ) {
                // if right is smaller, right swaps
                smallerIndex = this.rightChildIndex(index);
            }

            this.swap(smallerIndex, index);
            index = smallerIndex;
        }
    }

    bubbleUp() {
        let index = this.items.length - 1;

        while (this.parent(index) && this.parent(index) > this.items[index]) {
            this.swap(this.parentIndex(index), index);
            index = this.parentIndex(index);
        }
    }
}

console.log('===== MIN HEAPS =====');
const min = new MinHeap();
min.add(1);
min.add(10);
min.add(5);
min.add(100);
min.add(8);

console.log('min poll', min.poll());
console.log('min poll', min.poll());
console.log('min poll', min.poll());
console.log('min poll', min.poll());
console.log('min poll', min.poll());

class MaxHeap extends Heap {
    constructor(items) {
        super(items);
    }

    add(item) {
        this.items.push(item);
        this.bubbleUp();
    }

    // removes the maximum element(the root) from heap and calls bubbleDown() to keep the max-heap order
    poll() {
        const item = this.items[0];
        this.items[0] = this.items[this.items.length - 1];
        this.items.pop();
        this.bubbleDown();

        return item;
    }

    bubbleDown() {
        let index = 0;

        while (
            this.leftChild(index) &&
            this.leftChild(index) > this.items[index]
        ) {
            let biggerIndex = this.leftChildIndex(index);

            if (
                this.rightChild(index) &&
                this.rightChild(index) > this.items[biggerIndex]
            ) {
                // if right is bigger, right swaps
                biggerIndex = this.rightChildIndex(index);
            }

            this.swap(biggerIndex, index);
            index = biggerIndex;
        }
    }

    bubbleUp() {
        let index = this.items.length - 1;

        while (this.parent(index) && this.parent(index) < this.items[index]) {
            this.swap(this.parentIndex(index), index);
            index = this.parentIndex(index);
        }
    }
}

console.log('===== MAX HEAPS =====');
const max = new MaxHeap();
max.add(1);
max.add(10);
max.add(5);
max.add(100);
max.add(8);

console.log('max poll', max.poll());
console.log('max poll', max.poll());
console.log('max poll', max.poll());
console.log('max poll', max.poll());
console.log('max poll', max.poll());

console.log('= Ascending-Order Sort with MIN-HEAP =');
const ascendingOrderSorting = new MinHeap();
ascendingOrderSorting.add(12);
ascendingOrderSorting.add(2);
ascendingOrderSorting.add(23);
ascendingOrderSorting.add(4);
ascendingOrderSorting.add(13);
console.log('ascendingOrderSorting', ascendingOrderSorting.items);

console.log('ascendingOrderSorting poll', ascendingOrderSorting.poll());
console.log('ascendingOrderSorting poll', ascendingOrderSorting.poll());
console.log('ascendingOrderSorting poll', ascendingOrderSorting.poll());
console.log('ascendingOrderSorting poll', ascendingOrderSorting.poll());
console.log('ascendingOrderSorting poll', ascendingOrderSorting.poll());

console.log('= Descending-Order Sort with MAX-HEAP =');
const descendingOrderSorting = new MaxHeap();
descendingOrderSorting.add(12);
descendingOrderSorting.add(2);
descendingOrderSorting.add(23);
descendingOrderSorting.add(4);
descendingOrderSorting.add(13);
console.log('descendingOrderSorting', descendingOrderSorting.items);

console.log('descendingOrderSorting poll', descendingOrderSorting.poll());
console.log('descendingOrderSorting poll', descendingOrderSorting.poll());
console.log('descendingOrderSorting poll', descendingOrderSorting.poll());
console.log('descendingOrderSorting poll', descendingOrderSorting.poll());
console.log('descendingOrderSorting poll', descendingOrderSorting.poll());
