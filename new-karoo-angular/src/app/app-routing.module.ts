import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './components/form/form.component';
import { ChatComponent } from './components/chat/chat.component';
import { LoginComponent } from './components/login/login.component';
import { FuncionarioDashboardComponent } from './components/funcionario/funcionario-dashboard/funcionario-dashboard.component';
import { AcessoComponent } from './components/funcionario/acesso/acesso.component';
import { DestaquesComponent } from './components/funcionario/destaques/destaques.component';
import { ConfigComponent } from './components/funcionario/config/config.component';

const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'login', component: LoginComponent },
  { path: 'func-dashboard', component: FuncionarioDashboardComponent },
  { path: 'func-acesso', component: AcessoComponent },
  { path: 'func-destaques', component: DestaquesComponent },
  { path: 'func-config', component: ConfigComponent },
  { path: '**', component: DashboardComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), 
    HttpClientModule,
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }