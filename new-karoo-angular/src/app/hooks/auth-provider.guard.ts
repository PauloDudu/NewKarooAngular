import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { ToastService } from 'angular-toastify';
import { api } from 'src/services/api';
let vality = false;

@Injectable({
  providedIn: 'root'
})
export class AuthProviderGuard implements CanActivate {

  constructor(private router: Router, private _toastService: ToastService,) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | any {

    const token = window.localStorage.getItem("@KAROO:token");

    if (!token) {
      this.router.navigate(['**']);
      return false;
      
    } else if(token && this.verifyToken(token) ) {
      this.handleAdmin(token);
      return true;
    }
  }

  async verifyToken(token: string) {

    try {
      
      const response = await api.post("login/verify", token);
      vality = response.data;

      return vality;

    } catch (error) {
      this._toastService.error("Seção inspirada, faça login");
      this.router.navigate(['**']);
      return vality;
    }
  }

  async handleAdmin(token: string) {
    try {

      const results = await api.post("/admin/verify", token);
      localStorage.setItem("@KAROO:func", JSON.stringify(results.data));


    } catch (error) {
      console.log(error);
    }
  }
}
