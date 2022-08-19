var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Blockchain } from '../lib/bc_transactions.js';
(function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('⏳ Initializing the blockchain creating the genesis block...');
        const bc = new Blockchain(); // Create a new blockchain
        yield bc.createGenesisBlock(); // Creates the genesis block
        // Creates a pending transaction
        bc.createTransaction({ sender: 'Beckham', recipient: 'Vani', amount: 10 });
        bc.createTransaction({ sender: 'Scholes', recipient: 'Rooney', amount: 20 });
        // Creates a new block and adds it to the blockchain
        yield bc.minePendingTransactions();
        bc.createTransaction({ sender: 'Pirlo', recipient: 'Toni', amount: 30 });
        bc.createTransaction({ sender: 'Ki', recipient: 'Son', amount: 40 });
        yield bc.minePendingTransactions();
        // Prints the content of the blockchain
        console.log(JSON.stringify(bc, null, 2));
    });
})();
//# sourceMappingURL=main.js.map