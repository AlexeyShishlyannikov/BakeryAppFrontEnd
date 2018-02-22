import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
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
  @Output() isDone: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(
    private progressService: ProgressService
  ) { }

  ngOnInit() {
    this.loadSub = this.progressService.downloadProgress
      .subscribe(progress => {
          this.loadStatus = progress.isDone;
          if (progress.isDone) {
            this.isDone.emit(true);
          }
      });
  }
  ngOnDestroy() {
    this.loadSub.unsubscribe();
  }
}
