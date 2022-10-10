import { Component, OnInit } from '@angular/core';
import { audit, interval } from 'rxjs';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.css']
})
export class AuditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    interval(1000)
    .pipe(
      audit((val)=>interval(2000))
      )
     .subscribe(data=>console.log('Audit operaotr value '+data))
  }
  // first interval emit --> 0 after --> 1 second then second interval emit value after 2 second --> 1,2 the value whcih will be the latest that will be the output this process will repeat
  //F.interval emit -->3 S.interval emit -->4,5 
  // expectes ouput 2,5

}
