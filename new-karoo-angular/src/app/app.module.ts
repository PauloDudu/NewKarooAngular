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
import { DestaquesComponent } from './components/funcionario/destaques/destaques.component';
import { AcessoComponent } from './components/funcionario/acesso/acesso.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AtendimentoComponent } from './components/funcionario/atendimento/atendimento.component';
import { DestaquesDialogComponent } from './components/funcionario/dialogs/destaques-dialog/destaques-dialog.component';
import { AcessoDialogComponent } from './components/funcionario/dialogs/acesso-dialog/acesso-dialog.component';
import { MatTableModule } from '@angular/material/table';
import { AtendimentoDialogComponent } from './components/funcionario/dialogs/atendimento-dialog/atendimento-dialog.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { CreateFuncDialogComponent } from './components/funcionario/dialogs/create-func-dialog/create-func-dialog.component';
import { RemoveFuncDialogComponent } from './components/funcionario/dialogs/remove-func-dialog/remove-func-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FormComponent,
    ChatComponent,
    LoginComponent,
    DestaquesComponent,
    AcessoComponent,
    AtendimentoComponent,
    DestaquesDialogComponent,
    AcessoDialogComponent,
    AtendimentoDialogComponent,
    SidenavComponent,
    CreateFuncDialogComponent,
    RemoveFuncDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    Ng2SearchPipeModule,
    AngularToastifyModule,
    MatDialogModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }