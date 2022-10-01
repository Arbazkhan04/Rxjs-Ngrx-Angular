import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-unsubscribe-observable',
  templateUrl: './unsubscribe-observable.component.html',
  styleUrls: ['./unsubscribe-observable.component.css']
})
export class UnsubscribeObservableComponent implements OnInit {
 newSubscribtion!:Subscription
  constructor() { }

  ngOnInit(): void {

    const newObservable= interval(1000) // interval method from rxjs will generate a value from 0 to infinity
    // now i have to subscribe this interval or observable 
     this.newSubscribtion = newObservable.subscribe(data=>{
      console.log(new Date().toLocaleTimeString() + ' ' + data) //every one second it will emit data along with the time and second 
    })
  }
  stop(){
    
    this.newSubscribtion.unsubscribe()  // We calling Subscribtion method from rxjs that has an only one  important method that is called  unsubscibe it does not take any argument
    console.log("unSubscription work successfully")
  }
 
}
