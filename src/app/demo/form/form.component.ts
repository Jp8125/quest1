import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  student: FormGroup;
constructor(private fm:FormBuilder){
 this.student=this.fm.group({
  id:['',[Validators.required]],
  name:['ruhi',[Validators.required]]
 })
}
get name(){
  return this.student.get('name')
}
get id(){
  return this.student.get('id')
}
}
