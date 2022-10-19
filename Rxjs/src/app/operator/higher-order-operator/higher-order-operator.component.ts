import { Component, OnInit } from '@angular/core';
import { map, mergeMap, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-higher-order-operator',
  templateUrl: './higher-order-operator.component.html',
  styleUrls: ['./higher-order-operator.component.css']
})
export class HigherOrderOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    of(1,2,3,4).pipe(map((value)=>{
      return of(value*10)//here i have to subscrbie inner observable as well as outer observable i want to avoid this if you want to get rid from this kind of stuff you have to use higher order operator
        
    })
    ).subscribe(data=>{  //outer observable 
      data.subscribe(res=>console.log(res)) //inner observabale
    })

    // higher oreder operator
    of(1,2,3).pipe(
      mergeMap((value)=>{ //it will do samething that is we have done in the above so, use higherorder operator to avoid servel subscribe 
        return of(value*10)
      })
    ).subscribe(data=>console.log('higher order operator data2 '+data))


    // real time example of higher order  operator 
      
    of(1,2,3,4,5).pipe(
      map(
        (value)=>{
          return ajax(`https://jsonplaceholder.typicode.com/posts/${value}`)
        }
      )
    ).subscribe(data=>{
    data.subscribe(res=>{
      console.log("resonse comming form backend "+res)
    })
    })
    // now using by higer order operator
    of(1,2,3).pipe(
      mergeMap((id)=>{
        return ajax(`https://jsonplaceholder.typicode.com/posts/${id}`);
      })
    ).subscribe(data=>{
      console.log(data.response)
    })

  }

  
  

}
