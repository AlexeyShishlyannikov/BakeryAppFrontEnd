import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from 'admin/admin.module';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './core/components/home/home.component';
import { CoreModule } from './core/core.module';
import { FaqModule } from './faq/faq.module';
import { ItemModule } from './item/item.module';
import { MenuModule } from './menu/menu.module';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { PhonePipe } from './helpers/phone.pipe';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { CartModule } from './cart/cart.module';
import { BrowserXhr } from '@angular/http';
import { BrowserXhrWithProgress } from 'shared/services/progress.service';
import { ContactsModule } from './contacts/contacts.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
    CoreModule,
    AdminModule,
    AuthModule,
    FaqModule,
    ItemModule,
    MenuModule,
    UserModule,
    CartModule,
    ContactsModule,
    RouterModule.forRoot(<Routes>[
      {
        path: '',
        component: HomeComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [
    { provide: BrowserXhr, useClass: BrowserXhrWithProgress }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
