export class Generator {
    public static generateRandomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    public static generateRandomString(length: number): string {
        const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let randomString = "";
        for (let i = 0; i < length; i++) {
            randomString += chars[Math.floor(Math.random() * chars.length)];
        }
        return randomString;
    }

    public static generateRandomHexColor(): string {
        return "#" + Math.floor(Math.random() * 16777215).toString(16);
    }

    public static generateRandomRgbColor(): `rgb(${number}, ${number}, ${number})` {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    public static generateRandomRgbaColor(): `rgba(${number}, ${number}, ${number}, ${string})` {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const a = Math.random().toFixed(1);
        return `rgba(${r}, ${g}, ${b}, ${a})`;
    }

    public static generateRandomHslColor(): `hsl(${number}, ${number}%, ${number}%)` {
        const h = Math.floor(Math.random() * 361);
        const s = Math.floor(Math.random() * 101);
        const l = Math.floor(Math.random() * 101);
        return `hsl(${h}, ${s}%, ${l}%)`;
    }

    public static generateUuid(): string {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
            const r = Math.random() * 16 | 0;
            const v = c === "x" ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    public static generateRandomDate(start: Date, end: Date): Date {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    public static generateRandomBoolean(): boolean {
        return Math.random() < 0.5;
    }
}