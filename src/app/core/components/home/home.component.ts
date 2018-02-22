import { animateChild, group, query, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

import { slideLeft, slideLeftTop, slideRight, slideRightTop } from '../../../animations/animations';
import { InstagramService } from '../../services/instagram.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('animateAll', [
      transition('void => *', [
        group([
          query('@slideLeft', animateChild()),
          query('@slideLeftTop', animateChild()),
          query('@slideRight', animateChild()),
          query('@slideRightTop', animateChild()),
        ])
      ])
    ]),
    slideLeft,
    slideLeftTop,
    slideRight,
    slideRightTop
  ]
})
export class HomeComponent implements OnInit {
  instagramData: any[] = [];
  constructor(
    private instagram: InstagramService,
  ) {}

  ngOnInit() {
    // this.instagram.getRecentMedia()
    //   .subscribe(res => {
    //     this.instagramData = res.data.splice(0, 8);
    //   });
  }
  get matchMedia(): boolean {
    const mq = window.matchMedia('(min-width: 1200px)');
    return mq.matches;
  }
}
