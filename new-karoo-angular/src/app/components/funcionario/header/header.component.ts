import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() 
  titulo:string = "";
    
  user: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.titulo);
    this.getUser();
  }

  getUser() {
    setTimeout(() => {
      this.user = JSON.parse(localStorage.getItem("@KAROO:func") || '{}');
    }, 300);
    
  }

}
