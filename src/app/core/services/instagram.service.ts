import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InstagramService {
  url = 'https://api.instagram.com/v1/users/self/media/recent?access_token=1352595471.3290e42.e2c8d30dd08544c4a7b37bc9538d10d7';
  constructor(
    private http: Http
  ) { }

  getRecentMedia() {
    return this.http
      .get(this.url)
      .map(res => res.json());
  }
}
