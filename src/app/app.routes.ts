import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ProductComponent } from './component/product/product.component';
import { FormProductComponent } from './component/form-product/form-product.component';
import { CurrencyComponent } from './component/currency/currency.component';
import { TransactionComponent } from './component/transaction/transaction.component';
import { TicketComponent } from './component/ticket/ticket.component';
import { FormTikcketComponent } from './component/form-tikcket/form-tikcket.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductComponent },
    { path: 'formProduct', component: FormProductComponent },
    { path: 'divisas', component: CurrencyComponent },
    { path: 'transacciones', component: TransactionComponent },
    { path: 'ticket', component: TicketComponent },
    { path: 'formTicket', component: FormTikcketComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },

];
