import { Component } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription, filter, map } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent {
  public titulo: string;
  public tituloSubs$: Subscription;

  constructor(private router: Router) {
    this.tituloSubs$ = this.getBreadCrumbs();
  }

  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();

  }

  getBreadCrumbs() {
    return this.router.events
      .pipe(
        filter(event => event instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        map((event: ActivationEnd) => event.snapshot.data),
      ).subscribe(({ titulo }) => {
        this.titulo = titulo;
        document.title = `FGL - ${titulo}`;
      });


  }

}
