import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

// @ts-ignore
declare function costumInitFunction();
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: []
})
export class PagesComponent implements OnInit {

    constructor(private settingsService: SettingsService){}
    ngOnInit(): void {
      costumInitFunction();

}
}
