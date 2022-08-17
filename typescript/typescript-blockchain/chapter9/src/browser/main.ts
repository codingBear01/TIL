import { Blockchain, Block } from '../lib/bc_transactions.js';

enum Status { // Declares possible statuses of the app
  Initialization = '⏳ Initializing the blockchain, creating the genesis block...',
  AddTransaction = '✉ Add one or more transactions.',
  ReadyToMine = '✅ Ready to mine a new block.',
  MineInProgress = '⏳ Mining a new block...',
}

// Get HTML elements
const amountEl = document.querySelector('#amount') as HTMLInputElement;
const blocksEl = document.querySelector('#blocks') as HTMLDivElement;
const confirmBtn = document.querySelector('#confirm') as HTMLButtonElement;
const pendingTransactionsEl = document.querySelector(
  '#pending-transactions'
) as HTMLPreElement;
const recipientEl = document.querySelector('#recipient') as HTMLInputElement;
const senderEl = document.querySelector('#sender') as HTMLInputElement;
const statusEl = document.querySelector('#status') as HTMLParagraphElement;
const transferBtn = document.querySelector('#transfer') as HTMLButtonElement;

(async function main(): Promise<void> {
  transferBtn.addEventListener('click', addTransaction);
  confirmBtn.addEventListener('click', mineBlock);

  statusEl.textContent = Status.Initialization;

  const blockchain = new Blockchain(); // Creates an instance of Blockchain
  await blockchain.createGenesisBlock(); // Creates the genesis block
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

  async function mineBlock() {
    // Mines the block and renders it on the web page
    statusEl.textContent = Status.MineInProgress;
    toggleState(true, true);
    await Blockchain.minePendingTransactions(); // Creates a new block, calculates the hash, and adds it to the blockchain

    pendingTransactionsEl.textContent =
      'No pending transactions at the moment.';
    statusEl.textContent = Status.AddTransaction;
    blocksEl.innerHTML = blockchain.chain
      .map((b, i) => generateBlockHtml(b, i))
      .join(''); // Renders the newly inserted block on the web page
    toggleState(true, false);
  }

  function toggleState(confirmation: boolean, transferForm: boolean): void {
    // Disables/enables the form and the confirm button
    transferBtn.disabled =
      amountEl.disabled =
      senderEl.disabled =
      recipientEl.disabled =
        transferForm;
    confirmBtn.disabled = confirmation;
  }

  function generateBlockHtml(block: Block, index: number) {
    return `
    <div class="block"> 
      <span class="block__index">#${index}</span> 
      <span class="block__timestamp">${new Date(
        block.timestamp
      ).toLocaleTimeString()}</span> 
      
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
        <pre class="transactionsvalue">${block.transactions.map(
          (t) => `${t.sender} • ${t.recipient} - $${t.amount}`
        )}</pre>
      </div>
    </div>
    `;
  }
})();
