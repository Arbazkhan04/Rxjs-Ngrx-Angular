import { Component, OnInit } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import {ajax} from 'rxjs/ajax'

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.css']
})
export class AjaxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    
  //   const obs$ = ajax('https://api.github.com/users?per_page=5').pipe(
  //     map(userResponse => console.log('users: ', userResponse)),
  //     catchError(error => {
  //       console.log('error: ', error);
  //       return of(error);
  //     })
  //   );
    
  //   obs$.subscribe({
  //     next: value => console.log(value),
  //     error: err => console.log(err)
  //   });
  // }
   
 

const obs$ = ajax('https://api.github.com/users?per_page=5').pipe(
  map(userResponse => console.log('users: ', userResponse)),
  catchError(error => {
    console.log('error: ', error);
    return of(error);
  })
);

obs$.subscribe({
  next: value => console.log(value),
  error: err => console.log(err)
});

  }
}
