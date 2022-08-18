import { sha256 } from './universal_sha256.js'; // Imports the function for hash generation

export interface Transacrion {
  // A custom type representing a single transaction
  readonly sender: string;
  readonly recipient: string;
  readonly amount: string;
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
