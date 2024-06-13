declare enum LogLevel {
    DEBUG = "DEBUG",
    INFO = "INFO",
    WARN = "WARN",
    ERROR = "ERROR"
}
export declare class LoggingUtils {
    private static currentLogLevel;
    static setLogLevel(level: LogLevel): void;
    private static formatMessage;
    static debug(message: string): void;
    static info(message: string): void;
    static warn(message: string): void;
    static error(message: string, error?: Error): void;
}
export {};
