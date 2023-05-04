import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.css']
})
export class ListDataComponent implements  OnInit {
  lt={} as {id:number,name:string}
  ngOnInit(): void {
   
   this.ac.params.subscribe(parma=>{this.lt=this.serv.list.find(obj=>obj.id==parma['id'] as number) as {id:number,name:string}})
  }
  constructor(private serv :ListService,private ac:ActivatedRoute){}
 

}
