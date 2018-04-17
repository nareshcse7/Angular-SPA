import { Component } from '@angular/core';

import '../assets/app.css';

@Component({
    moduleId: module.id.toString(),
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent { 
    facebook:any = "./assets/image/Facebook.png";
    twitter:any = "./assets/image/twitter.png";
    instagram:any = "./assets/image/instagram.png";
    youtube:any = "./assets/image/youtube.png";
}