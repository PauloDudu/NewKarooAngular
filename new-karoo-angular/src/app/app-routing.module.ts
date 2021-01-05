import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "./components/Dashboard/dashboard.component";
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './components/form/form.component';
import { ChatComponent } from './components/chat/chat.component';

const routes: Routes = [
  { path: 'form', component: FormComponent },
  {path: 'chat', component: ChatComponent},
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
