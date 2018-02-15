import { Component, Input, OnInit, IterableDiffers, DoCheck, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Photo } from '../../models/Photo';

@Component({
  selector: 'app-photo-carousel',
  templateUrl: './photo-carousel.component.html',
  styleUrls: ['./photo-carousel.component.css']
})
export class PhotoCarouselComponent implements OnInit, DoCheck {
  @Input('photos') photos: Photo[] = [];
  @Input('fromAdmin') fromAdmin = false;
  @Output('deletePic') deletePic: EventEmitter<Photo> = new EventEmitter<Photo>();
  stringPhotos: string[] = [];
  private iterableDiffer: any;
  selectedPhoto = 0;

  constructor(private _iterableDiffers: IterableDiffers) {
    this.iterableDiffer = this._iterableDiffers.find([]).create(null);
  }

  ngDoCheck() {
    const changes = this.iterableDiffer.diff(this.photos);
    if (changes) {
      this.stringPhotos = this.toStringArray();
      this.selectedPhoto = this.stringPhotos.length - 1;
    }
  }

  ngOnInit() {
    this.stringPhotos = this.toStringArray();
  }

  private toStringArray(): string[] {
    const arr: string[] = [];
    if (this.photos.length < 1) {
      arr.push('../../../../assets/question.jpeg');
    } else {
      this.photos.forEach(photo => arr.push(`data:${photo.contentType};base64,${photo.data}`));
    }
    return arr;
  }
  get currentPhoto(): string {
    return this.stringPhotos[this.selectedPhoto];
  }

  switchPhoto(direction: number): void {
    const maxIndex = this.stringPhotos.length - 1;
    if (this.selectedPhoto === 0 && direction === -1) {
      this.selectedPhoto = maxIndex;
    } else if (this.selectedPhoto === maxIndex) {
      this.selectedPhoto = 0;
    } else {
      this.selectedPhoto += direction;
    }
  }

  deletePicture() {
    this.deletePic.emit(this.photos[this.selectedPhoto]);
  }
}
