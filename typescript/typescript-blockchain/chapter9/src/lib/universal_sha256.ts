// The function to be used in the Node.js runtime
function sha256_node(data: string): Promise<string> {
  const crypto = require('crypto');

  return Promise.resolve(
    crypto.createHash('sha256').update(data).digest('hex')
  ); // Generates a SHA-256 hash
}

// The function to be used in browsers
async function sha256_browser(data: string): Promise<string> {
  // Encodes the provided string as UTF-8
  const msgUnit8Array = new TextEncoder().encode(data);

  // Hashes the data
  const hashByteArray = await crypto.subtle.digest('SHA-256', msgUnit8Array);

  // Converts the ArrayBuffer to Array
  const hashArray = Array.from(new Uint8Array(hashByteArray));

  // Converts bytes to a hexadecimal string
  const hashHex = hashArray
    .map((b) => '00' + b.toString(16).slice(-2))
    .join('');

  return hashHex;
}

// Exports the hashing function for Node
export const sha256 =
  // Checks if the runtime has a global variable window
  typeof window === 'undefined' ? sha256_node : sha256_browser; // Exports the hashing function for browsers
