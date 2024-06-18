import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  products: any;

  constructor(private prodService: ProductService,private toastr: ToastrService) { }
  ngOnInit(): void {
    this.getProducts()

  }

  getProducts(){
    this.prodService.getProducts().subscribe({
      next: (data) => {
        this.products= data;    
        this.toastr.info("Se cargaron todos los productos destacados","success");

      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
