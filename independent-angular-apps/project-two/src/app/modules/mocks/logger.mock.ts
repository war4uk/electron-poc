import { LoggerService } from 'typings-package';

export class LoggerMock implements LoggerService {
    log(message: string): void {
        console.log('Log method mocked in project-two');
    }
    error(message: string): void {
        console.log('Error method mocked in project-two');
    }
    warning(message: string): void {
        console.log('Warning method mocked in project-two');
    }
}
