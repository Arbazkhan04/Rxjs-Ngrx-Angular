import { Component, OnInit } from '@angular/core';
import {of, single } from 'rxjs';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const source$=of(
      {name:'khan',id:1},
      {name:'sabir',id:2},
    )
    source$.pipe(single(x=>x.name.startsWith('k'))).subscribe(
      data=>console.log('single operator data '+data)
    )



    const source2$=of(
      {name:'khan',id:1},
      {name:'sabir',id:2},
      {name:'kabir',id:2},
    )
    source$.pipe(single(x=>x.name.startsWith('k'))).subscribe(
      (data)=>{console.log('single operator data '+data)},
      (error)=>{console.error(error)}
      
    )    

  }//This observable will return an error message becouse there tow method that is started with k

}
