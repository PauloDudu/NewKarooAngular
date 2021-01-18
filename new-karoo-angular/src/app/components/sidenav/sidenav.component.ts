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
    this.handleAdmin();
  }

  ngAfterViewInit() {
    this.handleAdmin();
  }

  logOut() {
    logOut();
  }

  handleAdmin(): void {

    setTimeout(() => {
      let funcionario = JSON.parse(localStorage.getItem("@KAROO:func") || "{}");
      if (funcionario.isAdmin) {
        this.isAdmin = true;
      }
    }, 500);
  }
}
