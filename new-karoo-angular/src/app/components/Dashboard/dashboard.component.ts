import { Component, OnInit } from '@angular/core';
import { destaque } from "../../../models/models";
import { api } from '../../../services/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  destaques: destaque[] = [];

  constructor() { }

  ngOnInit(): void {
    localStorage.clear();
    this.ngGetApi();
  }

  async ngGetApi() {
    try {

      let results = await api.get<destaque[]>("https://api-new-karoo.herokuapp.com/karoo/destaques");
      console.log(results);
      this.destaques = results.data;
            
    } catch (Exception) {
      console.log(Exception);
    }
  }
}