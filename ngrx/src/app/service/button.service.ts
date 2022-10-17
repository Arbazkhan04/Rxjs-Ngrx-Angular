import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ButtonService {
  count = 0;
  constructor() { }

  incre(){
    this.count++;
  }
  decre(){
    this.count--;
  }
  res(){
    this.count;
  }
}
