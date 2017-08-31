import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  items: Array<any> = [];
  constructor() {
    this.items = [
      { name: './../../assets/b1.jpg' },
      { name: './../../assets/b2.jpg' },
      { name: './../../assets/b3.jpg' },
      { name: './../../assets/b4.jpg' },
      { name: './../../assets/b5.jpg' },
      { name: './../../assets/b6.jpg' },

    ];
  }
  ngOnInit() {
  }

}
