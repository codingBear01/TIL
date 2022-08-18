import { sha256 } from './universal_sha256.js'; // Imports the function for hash generation

export interface Transaction {
  // A custom type representing a single transaction
  readonly sender: string;
  readonly recipient: string;
  readonly amount: number;
}

export class Block {
  // A custom type representing a single block
  nonce: number = 0;
  hash: string;

  constructor(
    readonly previousHash: string,
    readonly timestamp: number,
    readonly transactions: Transaction[] // Passes an array of transactions to the newly-created block
  ) {}

  async mine(): Promise<void> {
    // The asynchronous function to mine the block
    do {
      // Uses brute force to find the proper nonce
      this.hash = await this.calculateHash(this.nonce++);
    } while (this.hash.startsWith('0000') === false);
  }

  private async calculateHash(nonce: number): Promise<string> {
    // The asynchronous wrapper function for hash generation
    const data =
      this.previousHash +
      this.timestamp +
      JSON.stringify(this.transactions) +
      nonce;

    return sha256(data); // Invokes the function that uses the crypto API and generates the hash
  }
}

export class Blockchain {
  private readonly _chain: Block[] = [];
  private _pendingTransactions: Transaction[] = [];

  private get latestBlock(): Block {
    // The getter for the latest block in the blockchain
    return this._chain[this._chain.length - 1];
  }

  get chain(): Block[] {
    // The getter for all blocks in the blockchain
    return [...this._chain];
  }

  get pendingTransactions(): Transaction[] {
    // The getter for all pending transactions
    return [...this._pendingTransactions];
  }

  async createGenesisBlock(): Promise<void> {
    // Creates the genesis block
    const genesisBlock = new Block('0', Date.now(), []);
    await genesisBlock.mine(); // Creates the hash for the genesis block
    this._chain.push(genesisBlock); // Adds the genesis block to the chain
  }

  createTransaction(transaction: Transaction): void {
    // Adds a pending transaction
    this._pendingTransactions.push(transaction);
  }

  async minePendingTransactions(): Promise<void> {
    // Creates a block with pending transactions and adds it to the blockchain
    const block = new Block(
      this.latestBlock.hash,
      Date.now(),
      this._pendingTransactions
    ); // Creates the hash for the new block
    await block.mine(); // Adds the new block to the blockchain
    this._chain.push(block);
    this._pendingTransactions = [];
  }
}
