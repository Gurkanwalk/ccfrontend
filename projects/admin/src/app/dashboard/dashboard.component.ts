import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { ProductsService } from '../services/product.service';
import { UsersService } from '../services/users.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
