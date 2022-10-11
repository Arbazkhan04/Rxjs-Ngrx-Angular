import { Component, OnInit } from '@angular/core';
import { first, of } from 'rxjs';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    of(1,3,4,6,5,4).pipe(first((value)=>value%2===0)).subscribe(
      (data)=>{console.log(data)},
      (error)=>{console.log(error)},
      ()=>{console.log('complete')},
      
      
      
    );
    // of(1,3,5,7,9).pipe(first((value)=>value%2===0)).subscribe(
    //   (data)=>{
    //     console.log(data)
    //   },
    //   (err)=>{
    //     console.log(err)
    //   },
    //   ()=>console.log('complete')
    // )//it will generate an error because predicate has no value that match in the condition that is way it will generate an error message let see another example that has default value as well

    of(1,3,5,7,9).pipe(first((value)=>value%2===0,10)).subscribe(
      (data)=>console.log(data),
      (error)=>console.log(error),
      ()=>console.log('default value')

      

    ) //now it will generate a defautl value becaye predicate does not match with the condition thats way default value is executed 
  }

}
