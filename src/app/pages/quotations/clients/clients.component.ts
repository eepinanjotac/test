import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Model
import { Client } from 'src/app/models/inventory/client.model';

//Service
import { ClientService } from 'src/app/services/inventory/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styles: [
  ]
})
export class ClientsComponent implements OnInit {

  public clients: Client[] = [];
  public cargando: boolean = true;



  
  constructor(
    private clientService: ClientService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.cargarClients();

  }

  cargarClients() {
  this.cargando = true;
    this.clientService.cargarClients()
      .subscribe(clients => {
        this.clients = clients;
        console.log(clients)
        this.cargando = false;
      });
  }

}
