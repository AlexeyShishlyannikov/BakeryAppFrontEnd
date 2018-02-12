import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthService } from './auth.service';
import { NavbarComponent } from './navbar/navbar.component';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatCardModule,
  MatDialogModule,
  MatInputModule,
  MatFormFieldModule,
  MatGridListModule
} from './../../node_modules/@angular/material';
import { environment } from '../environments/environment.prod';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { UserService } from './user.service';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuListItemComponent } from './menu-list-item/menu-list-item.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { MenuService } from './menu.service';
import { FaqService } from './faq.service';
import { IngredientService } from './ingredient.service';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { MenuFilterComponent } from './menu-filter/menu-filter.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MenuSwitchWeightComponent } from './menu-switch-weight/menu-switch-weight.component';
import { ItemIngredientComponent } from './item-ingredient/item-ingredient.component';
import { PhotoCarouselComponent } from './photo-carousel/photo-carousel.component';
import { MenuItem } from './models/menuItem';
import { MenuItemService } from './menu-item.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    NavbarComponent,
    UserDetailsComponent,
    UserPanelComponent,
    UserOrdersComponent,
    MenuListComponent,
    MenuListItemComponent,
    IngredientComponent,
    ItemDetailsComponent,
    MenuFilterComponent,
    MenuSwitchWeightComponent,
    ItemIngredientComponent,
    PhotoCarouselComponent
  ],
  entryComponents: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(<Routes>[
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'user/:id',
        component: UserPanelComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'menu',
        component: MenuListComponent
      },
      {
        path: 'menu/:id',
        component: ItemDetailsComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ])
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    MenuService,
    FaqService,
    IngredientService,
    MenuItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
