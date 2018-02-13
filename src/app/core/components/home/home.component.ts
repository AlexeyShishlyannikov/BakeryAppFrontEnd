import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  get matchMedia(): boolean {
    const mq = window.matchMedia('(min-width: 1200px)');
    return mq.matches;
  }
}
