import { Component } from '@angular/core';
import { ApidataService } from '../apidata.service';

@Component({
  selector: 'app-q1',
  templateUrl: './q1.component.html',
  styleUrls: ['./q1.component.css']
})
export class Q1Component {
constructor(private dts:ApidataService){
  this.dts.getData().subscribe(obj=>{
    console.log(obj);
  })
}
}
