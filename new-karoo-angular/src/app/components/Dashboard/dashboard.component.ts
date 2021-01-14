import { Component, OnInit } from '@angular/core';
import { Destaque } from "../../../models/models";
import { api } from '../../../services/api';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  destaques: Destaque[] = [];
  filter: string = '';

  constructor() { }

  ngOnInit(): void {
    localStorage.clear();
    this.ngGetApi();
  }

  async ngGetApi() {
    try {

      let results = await api.get<Destaque[]>("destaques");
      this.destaques = results.data;

    } catch (Exception) {
      console.log(Exception);
    }
  }
}
