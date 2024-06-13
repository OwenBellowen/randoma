"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateUtils = void 0;
class DateUtils {
    static formatDate(date, format) {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return format
            .replace("dd", day.toString().padStart(2, "0"))
            .replace("MM", month.toString().padStart(2, "0"))
            .replace("yyyy", year.toString());
    }
    static formatTime(date, format) {
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        return format
            .replace("HH", hours.toString().padStart(2, "0"))
            .replace("mm", minutes.toString().padStart(2, "0"))
            .replace("ss", seconds.toString().padStart(2, "0"));
    }
    static formatDateTime(date, dateFormat, timeFormat) {
        return `${this.formatDate(date, dateFormat)} ${this.formatTime(date, timeFormat)}`;
    }
    static getDaysInMonth(month, year) {
        return new Date(year, month, 0).getDate();
    }
}
exports.DateUtils = DateUtils;
