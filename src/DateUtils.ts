export class DateUtils {
    public static formatDate(date: Date, format: string): string {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return format
            .replace("dd", day.toString().padStart(2, "0"))
            .replace("MM", month.toString().padStart(2, "0"))
            .replace("yyyy", year.toString());
    }

    public static formatTime(date: Date, format: string): string {
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        return format
            .replace("HH", hours.toString().padStart(2, "0"))
            .replace("mm", minutes.toString().padStart(2, "0"))
            .replace("ss", seconds.toString().padStart(2, "0"));
    }

    public static formatDateTime(date: Date, dateFormat: string, timeFormat: string): string {
        return `${this.formatDate(date, dateFormat)} ${this.formatTime(date, timeFormat)}`;
    }

    public static getDaysInMonth(month: number, year: number): number {
        return new Date(year, month, 0).getDate();
    }
}