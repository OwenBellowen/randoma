enum LogLevel {
    DEBUG = 'DEBUG',
    INFO = 'INFO',
    WARN = 'WARN',
    ERROR = 'ERROR',
}

export class LoggingUtils {
    private static currentLogLevel: LogLevel = LogLevel.INFO;

    public static setLogLevel(level: LogLevel) {
        this.currentLogLevel = level;
    }

    private static formatMessage(level: LogLevel, message: string): string {
        const timestamp = new Date().toISOString();
        return `[${timestamp}] [${level}] ${message}`;
    }

    public static debug(message: string) {
        if (this.currentLogLevel <= LogLevel.DEBUG) {
            console.log(this.formatMessage(LogLevel.DEBUG, message));
        }
    }

    public static info(message: string) {
        if (this.currentLogLevel <= LogLevel.INFO) {
            console.info(this.formatMessage(LogLevel.INFO, message));
        }
    }

    public static warn(message: string) {
        if (this.currentLogLevel <= LogLevel.WARN) {
            console.warn(this.formatMessage(LogLevel.WARN, message));
        }
    }

    public static error(message: string, error?: Error) {
        const formattedMessage = this.formatMessage(LogLevel.ERROR, message);
        if (error) {
            console.error(formattedMessage, error);
        } else {
            console.error(formattedMessage);
        }
    }
}