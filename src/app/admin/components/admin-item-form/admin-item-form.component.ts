import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'shared/models/menuItem';
import { MenuService } from 'menu/services/menu.service';
import { MenuItemSave } from 'admin/models/MenuItemSave';
import { IngredientService } from '../../../shared/services/ingredient.service';
import { Ingredient } from '../../../shared/models/Ingredient';
import { PricePerSet } from '../../../shared/models/Price';
import { Photo } from '../../../shared/models/Photo';
import { PhotoService } from '../../services/photo.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

@Component({
  selector: 'app-admin-item-form',
  templateUrl: './admin-item-form.component.html',
  styleUrls: ['./admin-item-form.component.css']
})
export class AdminItemFormComponent implements OnInit {
  item: MenuItemSave = new MenuItemSave();
  id: number;
  ingredients: Ingredient[];
  photos: Photo[] = [];
  toAddPhotos: File[] = [];
  @ViewChild('imgFileInput') fileInput: ElementRef;
  constructor(
    private route: ActivatedRoute,
    private menuService: MenuService,
    private router: Router,
    private ingredientService: IngredientService,
    private photoService: PhotoService
  ) { }

  ngOnInit() {
    this.initializeFields();
  }

  private initializeFields() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== 'add-item') {
      this.id = +id;
      this.menuService
        .getMenuItem(this.id)
        .switchMap(item => {
          this.photos = item.photos;
          this.item.mapFromItem(item);
          return this.ingredientService.getAllIngredients();
        })
        .subscribe(ing => this.ingredients = ing);
    } else {
      this.ingredientService.getAllIngredients().subscribe(ing => this.ingredients = ing);
    }
  }

  deleteItem(): void {
    this.menuService.deleteMenuItem(this.id).subscribe(
      res => {
        this.router.navigate(['admin/menu'], { queryParams: { deletedId: this.id } });
      }
    );
  }

  forkJoinPhotos(id: number) {
    const joinedRequests = [];
    this.toAddPhotos.forEach(file => {
      joinedRequests
        .push(
          this.photoService.uploadPhoto(id, file)
        );
    });
    return Observable.forkJoin(joinedRequests);
  }

  submit(): void {
    if (this.id > 0) {
      this.menuService
        .updateMenuItem(this.id, this.item)
        .switchMap(res => {
          return this.forkJoinPhotos(this.id);
        })
        .subscribe(res => {
          this.router.navigate(['admin/menu/']);
        });
    } else {
      this.menuService
        .postMenuItem(this.item)
        .switchMap(item => {
          this.id = item.id;
          return this.forkJoinPhotos(item.id);
        })
        .subscribe(res => {
          this.router.navigate(['admin/menu/' + this.id]);
        });
    }
  }

  onIngToggle(id: number): void {
    const index = this.item.ingredients.indexOf(id);

    if (index === -1) {
      this.item.ingredients.push(id);
    } else {
      this.item.ingredients.splice(index, 1);
    }
  }

  deleteSet(index: number) {
    this.item.price.pricePerSet.splice(index, 1);
  }

  addSet() {
    const set: PricePerSet = {
      setSize: null,
      setPrice: null
    };
    this.item.price.pricePerSet.push(set);
  }

  addImage() {
    const nativeElement: HTMLInputElement = this.fileInput.nativeElement;
    if (nativeElement.files.length > 0) {
      const image = nativeElement.files[0];
      this.toAddPhotos.push(image);
      this.getBase64(image)
        .then( data => {
          const photoToDisplay: Photo = {
            fileName: image.name,
            data: data.substring(data.indexOf(',') + 1, data.length),
            length: image.size,
            contentType: data.substring(data.indexOf(':') + 1, data.indexOf(';'))
          };
          this.photos.push(photoToDisplay);
        });
    }
  }
  private getBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  deletePhoto(photo: Photo) {
    if (photo.id > 0) {
      this.photoService.deletePhoto(this.id, photo.id).subscribe(res => {
        console.log(res);
      });
    }
    const index = this.photos.findIndex(p => photo.fileName === p.fileName);
    if (index !== -1) {
      const delIndex = this.toAddPhotos.findIndex(file => photo.fileName === file.name);
      this.photos.splice(index, 1);
      this.toAddPhotos.splice(delIndex, 1);
    }
  }
}
