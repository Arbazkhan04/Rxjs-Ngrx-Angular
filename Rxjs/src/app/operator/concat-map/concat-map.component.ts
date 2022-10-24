import { Component, OnInit } from '@angular/core';
import { concatMap, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.css']
})
export class ConcatMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    of(1,2,3).pipe(
      concatMap((id)=>{
        console.log(id)
        return ajax(`https://jsonplaceholder.typicode.com/posts${id}`)
      })
    ).subscribe(data=>{
      console.log('concat map data is coming form serve by unique id '+data.response)
    })
  }

}
