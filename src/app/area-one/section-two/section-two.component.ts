import { Component, OnInit } from '@angular/core';
import {LogServiceService} from "../../log-service.service";

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.css']
})
export class SectionTwoComponent implements OnInit {

  constructor(private log:LogServiceService) { }

  ngOnInit() {
  }
  onLog(msg:String){
    this.log.writeLog(msg);
  }
  get logMessages():any[]{
    return this.log.getLog();
  }

}
