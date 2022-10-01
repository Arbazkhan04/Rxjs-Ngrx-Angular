import { Observable } from "rxjs";

export function fuctionObs(){
  console.log("function call");
  return '1';
  return '2'; //dead code the complier will execcude only the first return because the every fuction can return only one value 

}

export const functionOb= new Observable(observer=>{
  console.log("Obserbale call")
  observer.next('1')
  observer.next('2') //where as the observer can return the multiple values this is the big difference bw observable and function 
  setTimeout(()=>{
    observer.next('3')
  }, 2000)
})