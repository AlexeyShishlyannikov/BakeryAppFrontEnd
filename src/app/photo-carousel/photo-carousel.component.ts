import { Component, OnInit, Input } from '@angular/core';
import { Photo } from '../models/Photo';

@Component({
  selector: 'app-photo-carousel',
  templateUrl: './photo-carousel.component.html',
  styleUrls: ['./photo-carousel.component.css']
})
export class PhotoCarouselComponent implements OnInit {
  selectedPhoto = 0;
  @Input('photos') photos: Photo[];
  stringPhotos: string[];
  constructor() { }

  ngOnInit() {
    this.stringPhotos = this.toStringArray();
  }
  private toStringArray(): string[] {
    const arr: string[] = [];
    this.photos.forEach(photo => arr.push(`data:${photo.contentType};base64,${photo.data}`));
    return arr;
  }
  get currentPhoto(): string {
    return this.stringPhotos[this.selectedPhoto];
  }

  switchPhoto(photoIndex: number): void {
    this.selectedPhoto = photoIndex;
  }
}
