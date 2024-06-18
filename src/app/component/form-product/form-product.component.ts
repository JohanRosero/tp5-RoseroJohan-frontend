import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-form-product',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, RouterLink,],
  templateUrl: './form-product.component.html',
  styleUrl: './form-product.component.css'
})
export class FormProductComponent {

  productForm = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    descripcion: ['', [Validators.required]],
    imagen: ['', [Validators.required, Validators.pattern(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/)]],
    precio: [null, [Validators.required, Validators.min(0)]],
    stock: [null, [Validators.required, Validators.min(1)]],
    destacado: ['']
  });

  constructor(private fb: FormBuilder, private prodService: ProductService, private toastr: ToastrService) { }


  onSubmit() {
    this.prodService.createProduct(this.productForm.value).subscribe({
      next: (response) => {
        console.log(response);
        if (response.status === '0') { // Verifica el campo 'status' del objeto JSON
          this.toastr.success('Producto creado con exito');
        }
      },
      error: (err) => {
        console.log(err);
        this.toastr.error('No se ha podido crear el producto, intenta en un momento');
      }
    })
  }


}
