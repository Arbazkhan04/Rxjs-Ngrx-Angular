import { AfterViewInit, Component, OnInit } from '@angular/core';
import { debounce, fromEvent, interval } from 'rxjs';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.css']
})
export class DebounceComponent implements OnInit , AfterViewInit {

  constructor() { }

  ngOnInit(): void {
   
    interval(1000).pipe(debounce((value)=>interval(value*100))).subscribe(data=>console.log("Deeboucne value "+data))

  }
  //it will only print the value that is not greater than the first interval 
  //output 0 -->1-->2--->3.......9--->no output because in the next time the vlaue of second interval become 1000 the condtion become false 
 ngAfterViewInit(): void {
    let debounce_btn=fromEvent(document.getElementById('debounce-btn')!,'click').pipe(debounce(value=>interval(1000))).subscribe(console.log)
 }
}
