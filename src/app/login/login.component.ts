import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  username: string = "";

  constructor() {}

  ngOnInit() {}

  isUsernameEmpty() {
    return this.username.length == 0;
  }

  resetUsername() {
    this.username = "";
  }
}
