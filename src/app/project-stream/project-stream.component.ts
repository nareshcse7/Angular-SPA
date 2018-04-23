import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-stream',
  templateUrl: './project-stream.component.html',
  styleUrls: ['./project-stream.component.css']
})
export class ProjectStreamComponent implements OnInit {
  slideImage1:any = "../assets/image/Slide1.jpg";
  slideImage2:any = "../assets/image/Slide2.png";
  slideImage3:any = "../assets/image/Slide3.jpg";
  constructor() { }

  ngOnInit() {
  }

}
