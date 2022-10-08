import { Component, OnInit } from '@angular/core';
import { distinct,  from,  of } from 'rxjs';

@Component({
  selector: 'app-distinct-operator',
  templateUrl: './distinct-operator.component.html',
  styleUrls: ['./distinct-operator.component.css']
})
export class DistinctOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    of(1,2,3,4,5,6,1,3,8,5).pipe(distinct()).subscribe(data=>console.log
      ('Distinct Data '+data))

      var employee1 = [
        {name:"umar",id:1},
        {name:"khan",id:2},
        {name:"khan",id:3},
      ]
        from(employee1).pipe(distinct(x=>x.name)).subscribe(data=>console.log(data))
    
  }
  


}
