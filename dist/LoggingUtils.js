"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggingUtils = void 0;
var LogLevel;
(function (LogLevel) {
    LogLevel["DEBUG"] = "DEBUG";
    LogLevel["INFO"] = "INFO";
    LogLevel["WARN"] = "WARN";
    LogLevel["ERROR"] = "ERROR";
})(LogLevel || (LogLevel = {}));
class LoggingUtils {
    static currentLogLevel = LogLevel.INFO;
    static setLogLevel(level) {
        this.currentLogLevel = level;
    }
    static formatMessage(level, message) {
        const timestamp = new Date().toISOString();
        return `[${timestamp}] [${level}] ${message}`;
    }
    static debug(message) {
        if (this.currentLogLevel <= LogLevel.DEBUG) {
            console.log(this.formatMessage(LogLevel.DEBUG, message));
        }
    }
    static info(message) {
        if (this.currentLogLevel <= LogLevel.INFO) {
            console.info(this.formatMessage(LogLevel.INFO, message));
        }
    }
    static warn(message) {
        if (this.currentLogLevel <= LogLevel.WARN) {
            console.warn(this.formatMessage(LogLevel.WARN, message));
        }
    }
    static error(message, error) {
        const formattedMessage = this.formatMessage(LogLevel.ERROR, message);
        if (error) {
            console.error(formattedMessage, error);
        }
        else {
            console.error(formattedMessage);
        }
    }
}
exports.LoggingUtils = LoggingUtils;
