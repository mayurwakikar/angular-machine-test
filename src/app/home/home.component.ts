import { Component } from '@angular/core';
import { UsersDataService } from '../services/users-data.service'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  users: any;

  constructor(private userData: UsersDataService) {
    this.userData.users().subscribe((data) => {
      console.warn(data);
      this.users = data;
    });
  }
}
