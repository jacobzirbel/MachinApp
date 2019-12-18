import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserItemsPageRoutingModule } from './user-items-routing.module';

import { UserItemsPage } from './user-items.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserItemsPageRoutingModule
  ],
  declarations: [UserItemsPage]
})
export class UserItemsPageModule {}
