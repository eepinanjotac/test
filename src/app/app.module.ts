import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { HttpClientModule } from '@angular/common/http';
import { PagesModule } from './pages/pages.module';


@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }