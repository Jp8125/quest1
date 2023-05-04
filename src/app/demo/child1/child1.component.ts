import { Component } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {
  list=[] as Array<{id:number,name:string}>
  ngOnInit(): void {
    this.getlist()
  }
  constructor(private serv :ListService){}
  getlist(){
    this.list=this.serv.list
  }
}
