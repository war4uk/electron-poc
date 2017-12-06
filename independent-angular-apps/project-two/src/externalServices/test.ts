/// plugin 1
@Injectable() class downloaderService {
    constructor(private restCaller: RestCaller, private logService: LoggerService){

    }
} 

/// plugin 2
@Injectable() class voiceService {
    constructor(private restCaller: RestCaller, private logService: LoggerService){

    }
} 