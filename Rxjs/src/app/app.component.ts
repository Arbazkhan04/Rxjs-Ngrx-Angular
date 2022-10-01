import { AfterViewInit, Component } from '@angular/core';
import { from, fromEvent } from 'rxjs';
import { fuctionObs, functionOb } from './services/function';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'Rxjs';
  postArray=[  //this is the array that i am going to convert into obervable
  //through from operator 
    {name:"Arbaz khan", id:1},
    {name:"umar khan", id:1},
    {name:"Mughaira khan", id:1},
  ]
   //is use dollar at the  end because of symbol that
  //varibale name i am going to convert into an obserable 
  postArrayAsObervable$= from(this.postArray)
  //from operator convert postArray into the observable that i will call into
  // construtor through subscribe method
  constructor(){

     console.log('Before function call')
     console.log(fuctionObs())
     console.log(fuctionObs())
     console.log('after function call')

     console.log('Before obseervable call')
     functionOb.subscribe(data=>{
      console.log(data)
     })
     functionOb.subscribe(data=>{
      console.log(data)
     })
     console.log('after after observable call')

    this.postArrayAsObervable$.subscribe( //into the construtor i am subscribing my observale through subscribe method that take  an object having a three method next error and complete if the program run successfully then next method will be run  and the message will be show Action has performed successfully and if there is any error then error method will be exectued  

      {
        next:(data)=>console.log(data),
        error:(error)=>console.log(error),
        complete:()=>console.log("Action has been performed completely"),
        
        
      }
    )


  }
  ngAfterViewInit(): void{
   fromEvent(document.getElementById('click-button')!,'click').subscribe({

    next:(data)=>console.log(data),
    error:(error)=>console.log(error),
    complete:()=>console.log("action perform well")
    
   })
  }
}
