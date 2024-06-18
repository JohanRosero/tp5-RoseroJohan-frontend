import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../service/currency.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css'
})
export class TransactionComponent implements OnInit {

  transactions!: any;
  opciones!: any;
  origen:string="";
  destino:string="";

  constructor(private currencyService: CurrencyService) { }
  ngOnInit(): void {
    this.getTransactions()
    this.getCurrencies()

  }
  getTransactions() {
    this.currencyService.getTransactions().subscribe({
      next: (data) => {
        this.transactions = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
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

  filterByOriginDestiny(){
    console.log(this.origen);
    console.log(this.destino);
    this.currencyService.getCurrencyByOriginDestiny(this.origen,this.destino).subscribe({
      next: (data) => {
        console.log(data);
        this.transactions = data;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
