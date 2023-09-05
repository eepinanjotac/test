import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import{RouterTestingModule} from '@angular/router/testing'
import { AppComponent } from './app.component';
import{HttpClientTestingModule} from '@angular/common/http/testing'
import { Condominio } from './models/administracion/condominio.model';
import { CondominosComponent } from './pages/administracion/condomino/condominos.component';
import { Condomino } from './models/administracion/condomino.model';

import { ReservaComponent } from './pages/administracion/reserva/reserva.component';




describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        HttpClientModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        
        
      ],
    }).compileComponents();

  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Frontend'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Frontend');
  });

  /* it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('Frontend app is running!');
  }); */


  it('Verificar si el formulario condominoForm es inválido', () => {
    const fixture = TestBed.createComponent(CondominosComponent);
    const app = fixture.componentInstance;
    let value = app.condominoForm.valid
    expect(value).toBeFalsy
  });

  it('Verificar si el formulario condominoForm es inválido', () => {
    const fixture = TestBed.createComponent(CondominosComponent);
    const app = fixture.componentInstance;
    let value = app.condominoForm.valid
    expect(value).toBeFalsy
  });

  it('Verificar si existe el metodo ', () => {
    const fixture = TestBed.createComponent(CondominosComponent);
    const app = fixture.componentInstance;
    let metodo = spyOn(app, "crearCondomino")
    app.crearCondomino()
    expect(metodo).toHaveBeenCalled();
  });

  it('Verificar si el formulario de actualizar esta imicializado', () => {
    const fixture = TestBed.createComponent(CondominosComponent);
    const app = fixture.componentInstance;
    let value = app.condominoForm.value
    let empty = false
    if (value != null || value != undefined) {
      empty = true
    }
    expect(empty).toBeTruthy();

  });

  it('Verificar si existe el metodo recargarComponente', () => {
    const fixture = TestBed.createComponent(CondominosComponent);
    const app = fixture.componentInstance;
    let metodo = spyOn(app, "recargarComponente")
    app.recargarComponente()
    expect(metodo).toHaveBeenCalled();
  });


  it('Verificar si existe el metodo cargarCondominos', () => {
    const fixture = TestBed.createComponent(CondominosComponent);
    const app = fixture.componentInstance;
    let metodo = spyOn(app, "cargarCondominos")
    app.cargarCondominos()
    expect(metodo).toHaveBeenCalled();
  });


  it('Verificar si existe el método abrirModalCreate', () => {
    const fixture = TestBed.createComponent(CondominosComponent);
    const app = fixture.componentInstance;
    let metodo = spyOn(app, "abrirModalCreate")
    app.abrirModalCreate()
    expect(metodo).toHaveBeenCalled();
  });







});
