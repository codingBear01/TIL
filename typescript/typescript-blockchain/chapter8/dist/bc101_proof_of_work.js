'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const crypto = require('crypto');
class Block {
  constructor(index, previousHash, timestamp, data) {
    this.index = index;
    this.previousHash = previousHash;
    this.timestamp = timestamp;
    this.data = data;
    const { nonce, hash } = this.mine(); // Calculates nonce and hash
    this.nonce = nonce;
    this.hash = hash;
  }
  calculateHash(nonce) {
    const data =
      this.index + this.previousHash + this.timestamp + this.data + nonce; // Nonce is part of the input for calculating the hash
    return crypto.createHash('sha256').update(data).digest('hex');
  }
  mine() {
    let hash;
    let nonce = 0;
    do {
      hash = this.calculateHash(nonce++); // Uses brute force for data mining
    } while (hash.startsWith('00000') === false); // Runs this loop until the hash starts with 00000
    return { nonce, hash };
  }
}
class Blockchain {
  constructor() {
    this.chain = [];
    this.chain.push(new Block(0, '0', Date.now(), 'Genesis block'));
  }
  get latestBlock() {
    return this.chain[this.chain.length - 1];
  }
  addBlock(data) {
    const block = new Block(
      this.latestBlock.index + 1,
      this.latestBlock.hash,
      Date.now(),
      data
    );
    this.chain.push(block);
  }
}
console.log('Creating the blockchain with the genesis block...');
const blockchain = new Blockchain();
console.log('Mining block #1...');
blockchain.addBlock('First block');
console.log('Mining block #2...');
blockchain.addBlock('Second block');
console.log(JSON.stringify(blockchain, null, 2));
