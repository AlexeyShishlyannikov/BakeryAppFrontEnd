import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProgressService } from 'shared/services/progress.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit, OnDestroy {
  loadStatus: boolean;
  loadSub: Subscription;
  constructor(
    private progressService: ProgressService
  ) { }

  ngOnInit() {
    this.loadSub = this.progressService.downloadProgress
      .subscribe(progress => {
          this.loadStatus = progress.isDone;
          console.log(progress);
      });
  }
  ngOnDestroy() {
    this.loadSub.unsubscribe();
  }
}
