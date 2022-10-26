import { compileClassMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { observable, of, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.Observable()
    this.subject()
  }


  Observable() {
    const observale$ = of(1, 2, 3, 4)

    let observer1 = {
      next: (data: number) => {
        console.log(data)
      },
      error: (err: any) => {
        console.log(err)
      },
      complete: () => {
        console.log('Obsever 1 is complete ')
      }

    }
    let observer2 = {
      next: (data: number) => {
        console.log(data)
      },
      error: (err: any) => {
        console.log(err)
      },
      complete: () => {
        console.log('Obsever 2 is complete ')
      }

    }
    observale$.subscribe(observer1) 
    observale$.subscribe(observer2)

  }


  subject(){
  
     let observable2=of(1,2,3,4)
     let subject2=new Subject<number>()
     
     let observer1 = {
      next: (data: number) => {
        console.log(data)
      },
      error: (err: any) => {
        console.log(err)
      },
      complete: () => {
        console.log('Obsever 1 is complete ')
      }

    }

    let observer2 = {
      next: (data: number) => {
        console.log(data)
      },
      error: (err: any) => {
        console.log(err)
      },
      complete: () => {
        console.log('Obsever 2 is complete ')
      }

    }
    subject2.subscribe(observer1)
    subject2.subscribe(observer2)

    observable2.subscribe(subject2) //we dont need to subscribe the observer 1 and observer2 again and again as we did above here subject will helps us 
    
  }


}
