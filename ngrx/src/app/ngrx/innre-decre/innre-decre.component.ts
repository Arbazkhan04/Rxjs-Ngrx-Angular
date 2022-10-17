import { Component, OnInit } from '@angular/core';
import { ButtonService } from 'src/app/service/button.service';

@Component({
  selector: 'app-innre-decre',
  templateUrl: './innre-decre.component.html',
  styleUrls: ['./innre-decre.component.css']
})
export class InnreDecreComponent implements OnInit {

  constructor(private buttonService:ButtonService) { }
count=0;
  ngOnInit(): void {
  }
Increament(){
  this.count++;
}
decrement(){
  if(this.count>0){
    this.count--
  }
  return;
}
reset(){
  this.count=0;
}


}
