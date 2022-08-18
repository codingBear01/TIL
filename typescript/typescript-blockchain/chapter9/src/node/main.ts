import { Blockchain } from '../lib/bc_transactions';

(async function main(): Promise<void> {
  console.log('? Initializing the blockchain creating the genesis block...');

  const bc = new Blockchain(); // Create a new blockchain

  await bc.createGenesisBlock(); // Creates the genesis block

  // Creates a pending transaction
  bc.createTransaction({ sender: 'Beckham', recipient: 'Vani', amount: 10 });
  bc.createTransaction({ sender: 'Scholes', recipient: 'Rooney', amount: 20 });

  // Creates a new block and adds it to the blockchain
  await bc.minePendingTransactions();

  bc.createTransaction({ sender: 'Pirlo', recipient: 'Toni', amount: 30 });
  bc.createTransaction({ sender: 'Ki', recipient: 'Son', amount: 40 });

  await bc.minePendingTransactions();

  // Prints the content of the blockchain
  console.log(JSON.stringify(bc, null, 2));
});
