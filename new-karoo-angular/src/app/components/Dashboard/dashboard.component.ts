import { Component, OnInit } from '@angular/core';
import { destaque } from "../../../models/models";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  destaques: destaque[] = [];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.ngGetApi();
  }

  ngGetApi() {
    try {

      let list = this.http.get<destaque[]>("https://api-new-karoo.herokuapp.com/karoo/destaques");

      list.subscribe(results => {
        this.destaques = results;
        console.log(this.destaques)
        return results;
      })

      
    } catch (Exception) {
      console.log(Exception);
    }
  }
}