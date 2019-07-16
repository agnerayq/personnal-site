import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import { AboutComponent } from './about/about.component';
import { LoginformComponent } from './loginform/loginform.component';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginformComponent,
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(ROUTES), ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
