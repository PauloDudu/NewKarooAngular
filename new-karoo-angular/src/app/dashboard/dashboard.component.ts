import { Component, OnInit } from '@angular/core';
import { item } from "../models/DashboardModels/item.model";
import axios from 'axios';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  lista: item[] = []; 

  constructor() { }

  ngOnInit(): void {
    this.ngGetApi();

  }

  async ngGetApi() {
    try {
      let list = await axios.get("http://localhost:3333/karoo/destaques");
      console.log(list);
      this.lista = list.data;

    } catch(Exception) {
      console.log("Peguei nada não");
      return;

    }
  }
}