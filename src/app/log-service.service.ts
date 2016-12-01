/*import { Injectable } from '@angular/core';

@Injectable()*/
export class LogServiceService {

  constructor() { }
  logMessages:any[] = [];

  writeLog(msg:String){
    this.logMessages.push(msg);
  }

  getLog(){
    return this.logMessages;
  }
}
