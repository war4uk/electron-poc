import { InjectionToken } from "@angular/core";
import { LoggerService } from "./loggerService";
import { CallService } from "./callService";

export const LOGGER_SERVICE: InjectionToken<LoggerService> = new InjectionToken<LoggerService>("project-one.LoggerService");
export const CALL_SERVICE: InjectionToken<CallService> = new InjectionToken<CallService>("project-one.CallService");
