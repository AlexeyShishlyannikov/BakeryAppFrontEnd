import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BrowserXhr } from '@angular/http';

@Injectable()
export class ProgressService {
  public uploadProgress: Subject<any> = new Subject();
  public downloadProgress: Subject<any> = new Subject();
  constructor() { }
}

@Injectable()
export class BrowserXhrWithProgress extends BrowserXhr {

  constructor(private service: ProgressService) {
    super();
  }
  build(): XMLHttpRequest {
    const xhr: XMLHttpRequest = super.build();

    xhr.onprogress = (event) => {
      this.service.downloadProgress.next({
        isDone: false,
      });
    };
    xhr.onloadend = (event) => {
      this.service.downloadProgress.next({
        isDone: true,
      });
    };
    xhr.upload.onprogress = (event) => {
      this.service.uploadProgress.next(this.createProgress(event, false));
    };

    xhr.upload.onloadend = (event) => {
      this.service.uploadProgress.next(this.createProgress(event, true));
    };
    return xhr;
  }
  private createProgress(event: ProgressEvent, isDone: boolean) {
    return {
      isDone: isDone,
      total: event.eventPhase,
      percentage: Math.round(event.loaded / event.total * 100)
    };
  }
}
