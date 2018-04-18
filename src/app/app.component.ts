import { Component, OnInit } from '@angular/core';
import { User } from './_models/index';
import { UserService } from './_services/index';
import '../assets/app.css';

@Component({
    moduleId: module.id.toString(),
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit { 
    public currentUser: User;
    users: User[] = [];
    logo:any = "../assets/image/sampleLogo.png";
    facebook:any = "./assets/image/Facebook.png";
    twitter:any = "./assets/image/twitter.png";
    instagram:any = "./assets/image/instagram.png";
    youtube:any = "./assets/image/youtube.png";

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        /* var lengthCal= this.currentUser.firstName.length; */
        console.log("Length:", this.currentUser); 
    }

    ngOnInit() {
        this.loadAllUsers();
    }
    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
    openNav() {
        document.getElementById("mySidenav").style.width = "250px";
    }
    
    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }
}