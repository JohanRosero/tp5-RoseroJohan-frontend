import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CurrencyService } from '../../service/currency.service';
import { RouterLink } from '@angular/router';
import { Transaction } from '../../models/transaction';

@Component({
  selector: 'app-currency',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,RouterLink],
  templateUrl: './currency.component.html',
  styleUrl: './currency.component.css'
})
export class CurrencyComponent implements OnInit {

  currencyForm = this.fb.group({
    amount: [0, [Validators.required, Validators.min(1)]],
    from: ['', [Validators.required]],
    to: ['', [Validators.required]]
  });

  cantidadDestino: number = 0;
  opciones!: any;
  resp!:any;
  transaccion:Transaction=new Transaction;

  constructor(private currencyService: CurrencyService, private fb: FormBuilder) {

  }
  ngOnInit(): void {
    this.getCurrencies();
  }

  getCurrencies() {
    this.currencyService.getCurrencies().subscribe({
      next: (data) => {
        console.log(data);
        this.opciones = data;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  onSubmit() {
    const formData = this.currencyForm.value;
    console.log(formData);
    this.currencyService.convertion(formData).subscribe({
      next: (data) => {
        console.log(data);
        this.resp = data;
        this.cantidadDestino=data.result.convertedAmount;
        this.transaccion.cantidadDestino=data.result.convertedAmount;
        this.transaccion.cantidadOrigen=data.result.amountToConvert;
        this.transaccion.monedaDestino=data.result.to;
        this.transaccion.monedaOrigen=data.result.from;
        this.transaccion.tasaConversion=data.result.convertedAmount/data.result.amountToConvert;
        console.log(this.transaccion);
        this.saveTransaction();
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  saveTransaction(){
    this.currencyService.saveTransaction(JSON.stringify(this.transaccion)).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
