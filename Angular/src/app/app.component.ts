import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpErrorResponse } from '@angular/common/http';

interface UserResponse {
login : string;
bio: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';
  results :'';
  constructor (private http : HttpClient){}

  ngOnInit () :void {
    this.http.get<UserResponse>('httpss://api.github.com/users/AshwInDu').subscribe(data => {
      console.log("User Data : " + data.login);
      console.log("User Bio : " + data.bio);
      },
      (err: HttpErrorResponse) => {
       if (err.error instanceof Error) {
         console.log("Client-side error occured.");
       } else {
         console.log("Server-side error occured.");
       }
      }
    );
  }
}