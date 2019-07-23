import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import { AboutComponent } from './about/about.component';
import { LoginformComponent } from './loginform/loginform.component';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ConfigurationComponent } from './configuration/configuration.component';

import {AuthService} from './auth.service';
import {AuthGuard} from './auth.guard';
import {ArticleService} from './article.service';
import {HttpClientModule} from '@angular/common/http';
import { ArticleListComponent } from './article-list/article-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginformComponent,
    ConfigurationComponent,
    ArticleListComponent,
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(ROUTES), ReactiveFormsModule, HttpClientModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
