import { Injectable } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { Http } from '@angular/http';
import { AuthService } from '../../auth/services/auth.service';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Question } from '../models/faq';

@Injectable()
export class FaqService extends DataService {
  constructor(
    http: Http,
    authService: AuthService
  ) {
    const menuServiceUrl = `${environment.API_URL}/faq`;
    super(http, authService, menuServiceUrl);
  }

  public getAllQuestions(): Observable<Question[]> {
    return this.getAll() as Observable<Question[]>;
  }

  public postQuestion(question: Question): Observable<Question> {
    return this.post(question) as Observable<Question>;
  }

  public deleteQuestion(id: number): Observable<string> {
    return this.delete(id) as Observable<string>;
  }
}
