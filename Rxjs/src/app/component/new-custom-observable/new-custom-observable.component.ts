import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-custom-observable',
  templateUrl: './new-custom-observable.component.html',
  styleUrls: ['./new-custom-observable.component.css']
})
export class NewCustomObservableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const newObservable= new Observable<number>(observer=>{
      for(let i=0;i<=5;i++){
        if(i==4){
          observer.error(" unknown error occured becuase The value of i is 2 ")
        }
         observer.next(i)
      }
     
    });
    // successfully created a observable and now going to subscribe my observable

    let observer={
      next:(data:number)=>console.log(data),
      error:(error:string)=>console.log(error),
      complete:()=>console.log("all is done")
      
    }
    
    newObservable.subscribe(observer)

    // i have created a sepreate object for observer and calling into a subscribe method




    //   {
    //   next:(data)=>console.log(data),
    //   error:(error)=>console.log(error),
    //   complete:()=>console.log("All is done "),
    // }
  
     
       
  }

}
