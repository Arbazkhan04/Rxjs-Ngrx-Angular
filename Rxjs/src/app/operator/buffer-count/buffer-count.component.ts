import { Component, OnInit } from '@angular/core';
import { bufferCount, interval, of } from 'rxjs';

@Component({
  selector: 'app-buffer-count',
  templateUrl: './buffer-count.component.html',
  styleUrls: ['./buffer-count.component.css']
})
export class BufferCountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    interval(1000).pipe(bufferCount(10)).subscribe(data=>{
      console.log(data)
    })
  }

}
