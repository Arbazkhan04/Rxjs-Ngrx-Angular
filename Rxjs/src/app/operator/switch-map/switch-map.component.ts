import { Component, OnInit } from '@angular/core';
import { of, switchMap } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    of(1,2,3,4).pipe(
      switchMap((id=>
       ajax(`https://jsonplaceholder.typicode.com/posts/${id}`)
      ))
      )
      .subscribe(data=>{
      console.log(data)
    })
  

}
}
