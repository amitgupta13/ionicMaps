import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-tab1",
  templateUrl: "./tab1.page.html",
  styleUrls: ["./tab1.page.scss"]
})
export class Tab1Page implements OnInit {
  users = [];
  page = 0;

  constructor(private http: HttpClient) {
    this.loadUsers();
  }

  ngOnInit() {}

  loadUsers() {
    this.http
      .get(`https://randomuser.me/api/?results=20&page=${this.page}`)
      .subscribe(data => {
        console.log({ data });
        this.users = this.users.concat(data["results"]);
      });
  }
}
