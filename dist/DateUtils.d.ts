export declare class DateUtils {
    static formatDate(date: Date, format: string): string;
    static formatTime(date: Date, format: string): string;
    static formatDateTime(date: Date, dateFormat: string, timeFormat: string): string;
    static getDaysInMonth(month: number, year: number): number;
}
