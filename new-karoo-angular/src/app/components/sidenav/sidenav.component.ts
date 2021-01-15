import { AfterViewInit, Component, OnInit } from '@angular/core';
import { logOut } from '../funcionario/function';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css', '../funcionario/funcionario.styles.css']
})
export class SidenavComponent implements AfterViewInit, OnInit {

  isAdmin: boolean = false;
  constructor() { }

  ngOnInit(): void {
    console.log("Ola Mundo")
    this.handleAdmin();
  }

  ngAfterViewInit() {
    console.log("Ola Mundo")
    this.handleAdmin();
  }

  logOut() {
    logOut();
  }

  handleAdmin(): any {
    setTimeout(() => {

      let funcionario = JSON.parse(localStorage.getItem("@KAROO:func") || "{}");
      console.log("Funcionario", funcionario);
      if (funcionario.isAdmin) {
        this.isAdmin = true;
      }
    }, 200);
  }
}
