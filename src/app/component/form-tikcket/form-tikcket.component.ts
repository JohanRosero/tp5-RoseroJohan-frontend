import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TicketService } from '../../service/ticket.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
  categorias!:any;

  
  ngOnInit(): void {
    this.accion="add";
    this.getEspectators();
    this.getCategorias();
  }
  
  constructor(private ticketService: TicketService, private fb : FormBuilder,
    private route: ActivatedRoute, private router: Router,
    private toastr: ToastrService) { }
  
  ticketForm = this.fb.group({
    precioTicket: [0, [Validators.required, Validators.min(1)]],
    categoriaEspectador:["",[Validators.required]],
    fechaCompra:["",[Validators.required]],      
    espectador:["",[Validators.required]],
    tipoCategoria:["", [Validators.required]]
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
    //console.log(this.ticketForm.value);
    this.ticketService.createTicket(this.ticketForm.value).subscribe({
      next: (response) => {
        console.log(response);
        this.toastr.success('ticket created successfully');
        this.router.navigate(['/ticket']);
      },
      error: (error) => {
        console.log(error);
      }
    });

  }

  getCategorias(){
    this.ticketService.getCategorias().subscribe({
      next: (response) => {
        this.categorias=response;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
