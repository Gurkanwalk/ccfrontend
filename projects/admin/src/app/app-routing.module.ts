import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BoardComponent } from './shared/board/board.component';
import { FormComponent } from './categories/form/form.component';
import { ProductComponent } from './products/products.component';
const routes: Routes = [
  {path:'',component: BoardComponent,
  children:[
    {path:'dashboard',component: DashboardComponent},
    {path:'categories',component: CategoriesComponent},
    {path:'categories/form',component:FormComponent},
    {path:'categories/form/:id',component:FormComponent},
    {path: 'products',component: ProductComponent,},
    //{path: 'products/form',component: ProductFormComponent,},
   // {path: 'products/form/:id',component: ProductFormComponent,},
    


  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
