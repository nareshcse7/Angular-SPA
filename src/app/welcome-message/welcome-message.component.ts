import { Component, OnInit } from '@angular/core';
import { User } from '../_models/index';
import { UserService } from '../_services/index';

@Component({
  selector: 'app-welcome-message',
  templateUrl: './welcome-message.component.html',
  styleUrls: ['./welcome-message.component.css']
})
export class WelcomeMessageComponent implements OnInit {
  public currentUser: User;
  users: User[] = [];
  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')); 
   }

  ngOnInit() {
    this.loadAllUsers();
  }
  private loadAllUsers() {
    this.userService.getAll().subscribe(users => { this.users = users; });
}

}
