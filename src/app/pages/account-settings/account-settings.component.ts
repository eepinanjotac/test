import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  public linkTheme = document.querySelector('#theme');
  

  constructor( private serviseSettings : SettingsService) { }

  ngOnInit(): void {
    this.serviseSettings.checkCurrent();
  }
 changeTheme(theme: string){
  this.serviseSettings.changeTheme(theme);
 }

  

}
