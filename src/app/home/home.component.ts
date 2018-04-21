import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../_services/index';

@Component({
    selector: 'app-home',
    moduleId: module.id.toString(),
    templateUrl: 'home.component.html',
    styleUrls: [ './home.component.scss' ]
})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    logo:any = "../assets/image/logo.jpg";
    slideImage1:any = "../assets/image/Slide1.jpg";
    slideImage2:any = "../assets/image/Slide2.png";
    slideImage3:any = "../assets/image/Slide3.jpg";
    trendImage1:any = "../assets/image/trendImage1.png";
    trendImage2:any = "../assets/image/trendImage2.png";
    trendImage3:any = "../assets/image/trendImage3.png";
    trendImage4:any = "../assets/image/trendImage4.jpg";
    trendImage5:any = "../assets/image/trendImage5.jpg";
    trendImage6:any = "../assets/image/trendImage6.jpg";
    trendImage7:any = "../assets/image/trendImage7.jpg";
    trendImage8:any = "../assets/image/trendImage8.jpg";
    LargeImage1: any = "../assets/image/decoration1.jpg";
    LargeImage2: any = "../assets/image/decoration2.jpg";
    video1:any = "../assets/video/HeroVideo.mp4.mov";

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
}