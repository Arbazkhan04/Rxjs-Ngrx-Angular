import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-buffer-operator',
  templateUrl: './buffer-operator.component.html',
  styleUrls: ['./buffer-operator.component.css']
})
export class BufferOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    interval(1000).subscribe(data=>console.log('buffer operator data '+ data))
  }

}
