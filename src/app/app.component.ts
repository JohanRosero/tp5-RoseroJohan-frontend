import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/layouts/header/header.component';
import { FooterComponent } from './component/layouts/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { ProductComponent } from './component/product/product.component';
import { CurrencyComponent } from './component/currency/currency.component';
import { TransactionComponent } from './component/transaction/transaction.component';
import { TicketComponent } from './component/ticket/ticket.component';
import { FormTikcketComponent } from './component/form-tikcket/form-tikcket.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductComponent,
    CurrencyComponent,
    TransactionComponent,
    TicketComponent,
    FormTikcketComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tp5-RoseroJohan-frontend';
}
