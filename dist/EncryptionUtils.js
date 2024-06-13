"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncryptionUtils = void 0;
class EncryptionUtils {
    static async generateKey(password) {
        const encoder = new TextEncoder();
        const data = encoder.encode(password);
        return window.crypto.subtle.importKey("raw", data, { name: "PBKDF2" }, false, ["deriveKey"]);
    }
    static async deriveKey(baseKey, salt) {
        return window.crypto.subtle.deriveKey({
            name: "PBKDF2",
            salt: salt,
            iterations: 100000,
            hash: "SHA-256"
        }, baseKey, { name: "AES-GCM", length: 256 }, true, ["encrypt", "decrypt"]);
    }
    static async encrypt(plaintext, password) {
        const salt = window.crypto.getRandomValues(new Uint8Array(16));
        const baseKey = await this.generateKey(password);
        const key = await this.deriveKey(baseKey, salt);
        const iv = window.crypto.getRandomValues(new Uint8Array(12));
        const encoder = new TextEncoder();
        const data = encoder.encode(plaintext);
        const ciphertext = await window.crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, data);
        const ciphertextArray = Array.from(new Uint8Array(ciphertext));
        const combined = [salt, iv, ...ciphertextArray];
        const combinedChars = combined.map(byte => String.fromCharCode(byte)).join('');
        return btoa(combinedChars);
    }
    static async decrypt(ciphertext, password) {
        const combined = Uint8Array.from(atob(ciphertext), c => c.charCodeAt(0));
        const salt = combined.slice(0, 16);
        const iv = combined.slice(16, 28);
        const ciphertextData = combined.slice(28);
        const baseKey = await this.generateKey(password);
        const key = await this.deriveKey(baseKey, salt);
        const decrypted = await window.crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, ciphertextData);
        const decoder = new TextDecoder();
        return decoder.decode(decrypted);
    }
}
exports.EncryptionUtils = EncryptionUtils;
