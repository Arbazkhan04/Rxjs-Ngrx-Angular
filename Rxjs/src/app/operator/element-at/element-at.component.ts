import { AfterViewInit, Component, OnInit } from '@angular/core';
import { elementAt, fromEvent } from 'rxjs';

@Component({
  selector: 'app-element-at',
  templateUrl: './element-at.component.html',
  styleUrls: ['./element-at.component.css']
})
export class ElementAtComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    const button$=fromEvent(document.getElementById('Elememtat')!,'click') //here we use non null asseration operator because somethime typescript compiler is not able to read the property here the concept will come non null asseration property
    button$.pipe(elementAt(2)).subscribe(data=>console.log('Element Data '+data))
  }

}
