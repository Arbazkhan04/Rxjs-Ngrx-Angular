import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged, from, of } from 'rxjs';

@Component({
  selector: 'app-distinct-untill-chanill-changed',
  templateUrl: './distinct-untill-chanill-changed.component.html',
  styleUrls: ['./distinct-untill-chanill-changed.component.css']
})
export class DistinctUntillChanillChangedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    of(1,2,3,3,4,5,5,6,5,5).pipe(distinctUntilChanged()).subscribe(data=>{
      console.log('distinct untill changed data ' + data);
    })//expected output will be 1,2,3,4,5,6,5 will only compare last one value

    const source$= from([
      {name:'khan',id:1},
      {name:'khan',id:2},
      {name:'mughera',id:3}
    ])
    source$.pipe(distinctUntilChanged((pre,cur)=>{
      return pre.name===cur.name;
    }))
    .subscribe(console.log)

  }

}
