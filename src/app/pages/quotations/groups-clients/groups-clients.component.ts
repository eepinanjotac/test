import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GroupClient } from 'src/app/models/inventory/group-clients.model';
import { GroupClientsService } from 'src/app/services/inventory/group-clients.service';



@Component({
  selector: 'app-groups-clients',
  templateUrl: './groups-clients.component.html',
  styles: [
  ]
})
export class GroupsClientsComponent implements OnInit {

  public groupsClient: GroupClient[]=[];
  public cargando: boolean = true;

  constructor( private groupsClientService: GroupClientsService){

  }

  ngOnInit(): void {
    this.cargarGroupsClient();
  }

  cargarGroupsClient() {
    this.cargando = true;
      this.groupsClientService.cargarGroupsClient()
        .subscribe(groupsClients => {
          this.groupsClient = groupsClients;
          console.log(groupsClients)
          this.cargando = false;
        });
    }

}
