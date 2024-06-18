import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TicketService } from '../../service/ticket.service';

@Component({
  selector: 'app-form-tikcket',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './form-tikcket.component.html',
  styleUrl: './form-tikcket.component.css'
})
export class FormTikcketComponent implements OnInit {

  accion="";
  espectadores!:any;

  
  ngOnInit(): void {
    this.accion="add";
    this.getEspectators();
  }
  
  constructor(private ticketService: TicketService, private fb : FormBuilder) { }
  
  ticketForm = this.fb.group({
    precioTicket: [0, [Validators.required, Validators.min(1)]],
    categoriaEspectador:["",[Validators.required]],
    fechaCompra:["",[Validators.required]],      
    espectador:["",[Validators.required]],
  });

  getEspectators(){
    this.ticketService.getEspectators().subscribe({
      next: (response) => {
        this.espectadores=response;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  createTicket(){
    console.log(this.ticketForm.value);
    this.ticketService.createTicket(this.ticketForm.value).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      }
    });

  }


}
