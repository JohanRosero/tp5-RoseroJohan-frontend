import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../service/ticket.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent implements OnInit {

  auxiliar!: any;


  ngOnInit(): void {
    this.getTickets();
  }

  constructor(private ticketService: TicketService, private route: ActivatedRoute, private router: Router,private toasr: ToastrService) { }

  getTickets() {
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

  getTicketsByCategory(category: string) {
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

  deleteTicket(id: string) {
    this.ticketService.deleteTicket(id).subscribe({
      next: (data) => {
        console.log(data);
        this.toasr.success('Ticket eliminado correctamente');
        this.refreshComponent();

      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  refreshComponent() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
}
