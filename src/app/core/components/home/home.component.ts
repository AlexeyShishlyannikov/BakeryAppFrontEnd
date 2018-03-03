import { animateChild, group, query, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

import { slideLeft, slideLeftTop, slideRight, slideRightTop } from '../../../animations/animations';
import { InstagramService } from '../../services/instagram.service';
import { NgxCarousel } from 'ngx-carousel';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: []
})
export class HomeComponent implements OnInit {
  public carouselOne: NgxCarousel;
  constructor() {}

  ngOnInit() {
    this.carouselOne = {
      grid: { xs: 1, sm: 1, md: 2, lg: 3, all: 0 },
      slide: 1,
      speed: 400,
      interval: 4000,
      point: {
        visible: true,
        pointStyles: `
          .ngxcarouselPoint {
            list-style-type: none;
            text-align: center;
            padding: 12px;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            position: absolute;
            width: 100%;
            bottom: 20px;
            left: 0;
            box-sizing: border-box;
          }
          .ngxcarouselPoint li {
            display: inline-block;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.55);
            padding: 5px;
            margin: 0 3px;
            transition: .4s ease all;
          }
          .ngxcarouselPoint li.active {
              background: white;
              width: 12px;
              height: 12px;
          }
        `
      },
      load: 2,
      touch: true,
      loop: true,
      custom: 'banner'
    };
  }

  public myfunc(event: Event) {
    // carouselLoad will trigger this funnction when your load value reaches
    // it is helps to load the data by parts to increase the performance of the app
    // must use feature to all carousel
  }
}
