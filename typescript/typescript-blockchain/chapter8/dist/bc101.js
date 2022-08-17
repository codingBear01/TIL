"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = require("crypto");
class Block {
    constructor(index, // The sequential number of this block
    previousHash, // The hash of the previous block
    timestamp, // The time of the block’s creation
    data // The app-specific data
    ) {
        this.index = index;
        this.previousHash = previousHash;
        this.timestamp = timestamp;
        this.data = data;
        this.hash = this.calculateHash(); // Calculates the hash of this block on its creation
    }
    calculateHash() {
        const data = this.index + this.previousHash + this.timestamp + this.data;
        return crypto
            .createHash('sha256') // Creates an instance of the Hash object for generating SHA-256 hashes
            .update(data) // Computes and updates the hash value inside the Hash object
            .digest('hex'); // Converts the hash value into a hexadecimal string
    }
}
class Blockchain {
    constructor() {
        this.chain = []; // Our blockchain is stored here.
        // Creates the genesis block and adds it to the chain
        this.chain.push(new Block(0, '0', Date.now(), 'Genesis block'));
    }
    get latestBlock() {
        // The getter to get a reference to the most recently added block
        return this.chain[this.chain.length - 1];
    }
    addBlock(data) {
        // Creates a new instance of Block and populates its properties
        const block = new Block(this.latestBlock.index + 1, this.latestBlock.hash, Date.now(), data);
        this.chain.push(block); // Adds the block to the array
    }
}
console.log('Creating the blockchain with the genesis block...');
const blockchain = new Blockchain(); // Creates a new blockchain
console.log('Mining block #1...');
blockchain.addBlock('First block'); // Adds the first block
console.log('Mining block #2...');
blockchain.addBlock('Second block'); // Adds the second block
console.log(JSON.stringify(blockchain, null, 2)); // Prints the content of the blockchain
