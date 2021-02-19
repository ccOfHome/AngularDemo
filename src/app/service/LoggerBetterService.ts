import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoggerBetterService {
    log(text){
        console.log(text, new Date().toLocaleString());
    }
}