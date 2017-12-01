import { LoggerService } from 'typings-package';

export class Logger implements LoggerService {
    public log(message: string): void {
        console.log(message);
    }

    public error(message: string): void {
        console.error(message);
    }

    public warning(message: string): void {
        console.warn(message);
    }
}
