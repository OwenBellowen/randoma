export declare class EncryptionUtils {
    private static generateKey;
    private static deriveKey;
    static encrypt(plaintext: string, password: string): Promise<string>;
    static decrypt(ciphertext: string, password: string): Promise<string>;
}
