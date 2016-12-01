import { Component, OnInit } from '@angular/core';
import {LogServiceService} from "../../log-service.service";

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.css']
})
export class SectionOneComponent implements OnInit {

  constructor(private log: LogServiceService) { }

  ngOnInit() {
  }

  onLog(msg:String){
    this.log.writeLog(msg);
  }
  get logMessages():any[]{
    return this.log.getLog();
  }
}
