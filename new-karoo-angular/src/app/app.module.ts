import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './components/form/form.component';
import { ChatComponent } from './components/chat/chat.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AngularToastifyModule } from 'angular-toastify';
import { LoginComponent } from './components/login/login.component';
import { FuncionarioDashboardComponent } from './components/funcionario/funcionario-dashboard/funcionario-dashboard.component';
import { DestaquesComponent } from './components/funcionario/destaques/destaques.component';
import { AcessoComponent } from './components/funcionario/acesso/acesso.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FormComponent,
    ChatComponent,
    LoginComponent,
    FuncionarioDashboardComponent,
    DestaquesComponent,
    AcessoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    Ng2SearchPipeModule,
    AngularToastifyModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }