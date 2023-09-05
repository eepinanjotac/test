import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private linkTheme = document.querySelector('#theme');

  constructor() { 

    const url = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';
    this.linkTheme?.setAttribute('href', url);
  }

  public changeTheme(theme: string) {

    const url = `./assets/css/colors/${theme}.css`
    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.checkCurrent();
  }

  checkCurrent() {
    const links = document.querySelectorAll('.selector');
    links.forEach(elem => {
      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`
      const curretTheme = this.linkTheme?.getAttribute('href');
      if (btnThemeUrl === curretTheme) {
        elem.classList.add('working');
      }

    })
  }
}
