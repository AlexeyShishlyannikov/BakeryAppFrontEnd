import { Component, OnInit } from '@angular/core';
import { InstagramService } from '../../services/instagram.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  instagramData: any[] = [];
  constructor(
    private instagram: InstagramService
  ) { }

  ngOnInit() {
    this.instagram.getRecentMedia()
      .subscribe(res => {
        this.instagramData = res.data.splice(12);
      });
  }
  get matchMedia(): boolean {
    const mq = window.matchMedia('(min-width: 1200px)');
    return mq.matches;
  }
}
