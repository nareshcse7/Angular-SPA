import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.css']
})
export class WhatWeDoComponent implements OnInit {
  whatWeDoImage:any = "../assets/image/whatWeDo.jpg";

  constructor() { }

  ngOnInit() {
  }

}
