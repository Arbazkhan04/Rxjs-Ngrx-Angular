import { Component, OnInit } from '@angular/core';
import { connectable, interval } from 'rxjs';

@Component({
  selector: 'app-hot-cold',
  templateUrl: './hot-cold.component.html',
  styleUrls: ['./hot-cold.component.css']
})
export class HotColdComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // let source= interval(1000);
    // source.subscribe(value=>{
    //   console.log(value)
    // })
    // setTimeout(()=>{
    //   source.subscribe(value=>{ cold observable we have to convert it into an hot observable by using multicast ooerator but this one is depreashed use the latest one concatable operator let use it 
    //     console.log(value)
    //   })
    // },3000)

    let source=connectable(interval(1000));
    source.subscribe(value=>{
      console.log(value)
    })
    source.subscribe(value=>{
      console.log(value)
    })
    source.connect() //cold observale converted into an hot observable through what concatble operator
  }

}
