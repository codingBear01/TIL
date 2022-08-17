import * as crypto from 'crypto';

class Block {
  readonly hash: string; // The hash of this block

  constructor(
    readonly index: number, // The sequential number of this block
    readonly previousHash: string, // The hash of the previous block
    readonly timestamp: number, // The time of the block’s creation
    readonly data: string // The app-specific data
  ) {
    this.hash = this.calculateHash(); // Calculates the hash of this block on its creation
  }

  private calculateHash(): string {
    const data = this.index + this.previousHash + this.timestamp + this.data;

    return crypto
      .createHash('sha256') // Creates an instance of the Hash object for generating SHA-256 hashes
      .update(data) // Computes and updates the hash value inside the Hash object
      .digest('hex'); // Converts the hash value into a hexadecimal string
  }
}

class Blockchain {
  private readonly chain: Block[] = []; // Our blockchain is stored here.

  private get latestBlock(): Block {
    // The getter to get a reference to the most recently added block
    return this.chain[this.chain.length - 1];
  }

  constructor() {
    // Creates the genesis block and adds it to the chain
    this.chain.push(new Block(0, '0', Date.now(), 'Genesis block'));
  }

  addBlock(data: string): void {
    // Creates a new instance of Block and populates its properties
    const block = new Block(
      this.latestBlock.index + 1,
      this.latestBlock.hash,
      Date.now(),
      data
    );

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
