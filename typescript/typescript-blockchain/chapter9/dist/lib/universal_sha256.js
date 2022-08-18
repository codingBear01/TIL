var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// The function to be used in the Node.js runtime
function sha256_node(data) {
    const crypto = require('crypto');
    return Promise.resolve(crypto.createHash('sha256').update(data).digest('hex')); // Generates a SHA-256 hash
}
// The function to be used in browsers
function sha256_browser(data) {
    return __awaiter(this, void 0, void 0, function* () {
        // Encodes the provided string as UTF-8
        const msgUnit8Array = new TextEncoder().encode(data);
        // Hashes the data
        const hashByteArray = yield crypto.subtle.digest('SHA-256', msgUnit8Array);
        // Converts the ArrayBuffer to Array
        const hashArray = Array.from(new Uint8Array(hashByteArray));
        // Converts bytes to a hexadecimal string
        const hashHex = hashArray
            .map((b) => '00' + b.toString(16).slice(-2))
            .join('');
        return hashHex;
    });
}
// Exports the hashing function for Node
export const sha256 = 
// Checks if the runtime has a global variable window
typeof window === 'undefined' ? sha256_node : sha256_browser; // Exports the hashing function for browsers
//# sourceMappingURL=universal_sha256.js.map