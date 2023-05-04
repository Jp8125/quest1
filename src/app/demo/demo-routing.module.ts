import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Child1Component } from './child1/child1.component';
import { ListDataComponent } from './list-data/list-data.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
{path:'',redirectTo:'cld1',pathMatch:'full'},
{path:'cld1',component:Child1Component,children:[{path:'list/:id',component:ListDataComponent},{path:'form',component:FormComponent}]}
];
console.log("lazy works");

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
