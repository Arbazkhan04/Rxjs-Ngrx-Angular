import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-take-operator',
  templateUrl: './take-operator.component.html',
  styleUrls: ['./take-operator.component.css']
})
export class TakeOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    interval(1000).pipe(
      (take(5)))
      .subscribe(data=>
        console.log('take opertor value 0' +data)
        );
  }

}
