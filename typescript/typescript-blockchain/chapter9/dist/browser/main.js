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
var Status;
(function (Status) {
    Status["Initialization"] = "\u23F3 Initializing the blockchain, creating the genesis block...";
    Status["AddTransaction"] = "\u2709 Add one or more transactions.";
    Status["ReadyToMine"] = "\u2705 Ready to mine a new block.";
    Status["MineInProgress"] = "\u23F3 Mining a new block...";
})(Status || (Status = {}));
// Get HTML elements
const amountEl = document.querySelector('#amount');
const blocksEl = document.querySelector('#blocks');
const confirmBtn = document.querySelector('#confirm');
const pendingTransactionsEl = document.querySelector('#pending-transactions');
const recipientEl = document.querySelector('#recipient');
const senderEl = document.querySelector('#sender');
const statusEl = document.querySelector('#status');
const transferBtn = document.querySelector('#transfer');
(function main() {
    return __awaiter(this, void 0, void 0, function* () {
        transferBtn.addEventListener('click', addTransaction);
        confirmBtn.addEventListener('click', mineBlock);
        statusEl.textContent = Status.Initialization;
        const blockchain = new Blockchain(); // Creates an instance of Blockchain
        yield blockchain.createGenesisBlock(); // Creates the genesis block
        blocksEl.innerHTML = blockchain.chain
            .map((b, i) => generateBlockHtml(b, i))
            .join(''); // Generates HTML for rendering block(s)
        statusEl.textContent = Status.AddTransaction;
        toggleState(true, false);
        function addTransaction() {
            // Adds a new pending transaction
            blockchain.createTransaction({
                sender: senderEl.value,
                recipient: recipientEl.value,
                amount: parseInt(amountEl.value),
            });
        }
        toggleState(false, false);
        pendingTransactionsEl.textContent = blockchain.pendingTransactions
            .map((t) => `${t.sender} • ${t.recipient}: $${t.amount}`)
            .join('\n'); // Renders pending transactions as strings;
        statusEl.textContent = Status.ReadyToMine;
        // Resets the form’s values
        senderEl.value = '';
        recipientEl.value = '';
        amountEl.value = '0';
        function mineBlock() {
            return __awaiter(this, void 0, void 0, function* () {
                // Mines the block and renders it on the web page
                statusEl.textContent = Status.MineInProgress;
                toggleState(true, true);
                yield blockchain.minePendingTransactions(); // Creates a new block, calculates the hash, and adds it to the blockchain
                pendingTransactionsEl.textContent =
                    'No pending transactions at the moment.';
                statusEl.textContent = Status.AddTransaction;
                blocksEl.innerHTML = blockchain.chain
                    .map((b, i) => generateBlockHtml(b, i))
                    .join(''); // Renders the newly inserted block on the web page
                toggleState(true, false);
            });
        }
        function toggleState(confirmation, transferForm) {
            // Disables/enables the form and the confirm button
            transferBtn.disabled =
                amountEl.disabled =
                    senderEl.disabled =
                        recipientEl.disabled =
                            transferForm;
            confirmBtn.disabled = confirmation;
        }
        function generateBlockHtml(block, index) {
            return `
    <div class="block"> 
      <span class="block__index">#${index}</span> 
      <span class="block__timestamp">${new Date(block.timestamp).toLocaleTimeString()}</span> 
      
      <div class="prev-hash"> 
        <div class="hash-title">• PREV HASH</div>\
        <div class="hash-value">${block.previousHash}</div>
      </div>

      <div class="this-hash">
        <div class="hash-title">THIS HASH</div>
        <div class="hash-value">${block.hash}</div>
      </div> 

      <div class="block__transactions">
        <div class="hash-title">TRANSACTIONS</div> 
        <pre class="transactionsvalue">${block.transactions.map((t) => `${t.sender} • ${t.recipient} - $${t.amount}`)}</pre>
      </div>
    </div>
    `;
        }
    });
})();
//# sourceMappingURL=main.js.map