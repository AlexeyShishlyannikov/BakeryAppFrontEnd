import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { environment } from 'environments/environment';
import { AuthService } from 'auth/services/auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PhotoService {
  url: string = environment.API_URL;
  private options: RequestOptions;
  constructor(
    private http: Http,
    private authService: AuthService
  ) {
    this.options = this.authService.setOptions();
   }

  uploadPhoto(itemId: number, photo: File) {
    if (!this.authService.isAdmin) {
      throw Error;
    } else {
    const formData = new FormData();
    formData.append('file', photo, photo.name);
    // TODO: Options don't get passed along with formData
    return this.http
      .post(`${this.url}/menu/${itemId}/photos/`, formData)
      .map(res => res.json());
    }
  }

  deletePhoto(itemId: number, photoId: number): Observable<string> {
    return this.http
      .delete(`${this.url}/menu/${itemId}/photos/${photoId}`, this.options)
      .map(res => res.toString());
  }

}
