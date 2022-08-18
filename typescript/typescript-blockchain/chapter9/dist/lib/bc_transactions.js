"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blockchain = exports.Block = void 0;
const universal_sha256_js_1 = require("./universal_sha256.js"); // Imports the function for hash generation
class Block {
    constructor(previousHash, timestamp, transactions // Passes an array of transactions to the newly-created block
    ) {
        this.previousHash = previousHash;
        this.timestamp = timestamp;
        this.transactions = transactions;
        // A custom type representing a single block
        this.nonce = 0;
    }
    mine() {
        return __awaiter(this, void 0, void 0, function* () {
            // The asynchronous function to mine the block
            do {
                // Uses brute force to find the proper nonce
                this.hash = yield this.calculateHash(this.nonce++);
            } while (this.hash.startsWith('0000') === false);
        });
    }
    calculateHash(nonce) {
        return __awaiter(this, void 0, void 0, function* () {
            // The asynchronous wrapper function for hash generation
            const data = this.previousHash +
                this.timestamp +
                JSON.stringify(this.transactions) +
                nonce;
            return (0, universal_sha256_js_1.sha256)(data); // Invokes the function that uses the crypto API and generates the hash
        });
    }
}
exports.Block = Block;
class Blockchain {
    constructor() {
        this._chain = [];
        this._pendingTransactions = [];
    }
    get latestBlock() {
        // The getter for the latest block in the blockchain
        return this._chain[this._chain.length - 1];
    }
    get chain() {
        // The getter for all blocks in the blockchain
        return [...this._chain];
    }
    get pendingTransactions() {
        // The getter for all pending transactions
        return [...this._pendingTransactions];
    }
    createGenesisBlock() {
        return __awaiter(this, void 0, void 0, function* () {
            // Creates the genesis block
            const genesisBlock = new Block('0', Date.now(), []);
            yield genesisBlock.mine(); // Creates the hash for the genesis block
            this._chain.push(genesisBlock); // Adds the genesis block to the chain
        });
    }
    createTransaction(transaction) {
        // Adds a pending transaction
        this._pendingTransactions.push(transaction);
    }
    minePendingTransactions() {
        return __awaiter(this, void 0, void 0, function* () {
            // Creates a block with pending transactions and adds it to the blockchain
            const block = new Block(this.latestBlock.hash, Date.now(), this._pendingTransactions); // Creates the hash for the new block
            yield block.mine(); // Adds the new block to the blockchain
            this._chain.push(block);
            this._pendingTransactions = [];
        });
    }
}
exports.Blockchain = Blockchain;
//# sourceMappingURL=bc_transactions.js.map