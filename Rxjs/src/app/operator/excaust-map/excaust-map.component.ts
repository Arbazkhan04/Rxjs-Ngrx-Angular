import { Component, OnInit } from '@angular/core';
import { exhaustMap, interval, map, of, take } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-excaust-map',
  templateUrl: './excaust-map.component.html',
  styleUrls: ['./excaust-map.component.css']
})
export class ExcaustMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    interval(100).pipe( //here it is not emitting the remaing obsrvable 
    // because the excaust map ignore it is emitting only the first 
    //element and rest of the value will  be ignored 
      exhaustMap(id=>
        ajax(`https://jsonplaceholder.typicode.com/posts/${id}`).pipe(
          map(data=>{
            return data.response
          })
        )
        ),
        take(5)
    )
    .subscribe(data=>{
      console.log(data);
    })
  }

}
