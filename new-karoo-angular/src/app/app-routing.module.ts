import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './components/form/form.component';
import { ChatComponent } from './components/chat/chat.component';
import { LoginComponent } from './components/login/login.component';
import { AcessoComponent } from './components/funcionario/acesso/acesso.component';
import { DestaquesComponent } from './components/funcionario/destaques/destaques.component';
import { AtendimentoComponent } from './components/funcionario/atendimento/atendimento.component';
import { AuthProviderGuard } from './hooks/auth-provider.guard';


const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'chat', component: ChatComponent},
  { path: 'login', component: LoginComponent },
  { path: 'atendimento', component: AtendimentoComponent, canActivate: [AuthProviderGuard] },
  { path: 'func-acesso', component: AcessoComponent, canActivate: [AuthProviderGuard] },
  { path: 'func-destaques', component: DestaquesComponent, canActivate: [AuthProviderGuard] },
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