import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BoardComponent } from './shared/board/board.component';
import { SideComponent } from './shared/side/side.component';
import { CategoriesComponent } from './categories/categories.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './categories/form/form.component';
import { ProductComponent } from './products/products.component';
import { OrderComponent } from './order/order.component';
import { LoginComponent } from './login/login.component';
import { ProdFormComponent } from './products/prod-form/prod-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BoardComponent,
    SideComponent,
    CategoriesComponent,
    FormComponent,
    ProductComponent,
    OrderComponent,
    LoginComponent,
    ProdFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
