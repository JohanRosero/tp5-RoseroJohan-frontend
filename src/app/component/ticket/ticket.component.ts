import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../service/ticket.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent implements OnInit {

  auxiliar!:any;


  ngOnInit(): void {
    this.getTickets();
  }

  constructor(private ticketService:TicketService) { }

  getTickets(){
    this.ticketService.getTickets().subscribe({
      next: (data) => {
        console.log(data);
        this.auxiliar = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getTicketsByCategory(category: string){
    this.ticketService.getTicketByCategory(category).subscribe({
      next: (data) => {
        console.log(data);
        this.auxiliar = data;
      },
      error: (err) => {
        console.log(err);
      },
    })
  }

}
