import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserItemsPage } from './user-items.page';

const routes: Routes = [
  {
    path: '',
    component: UserItemsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserItemsPageRoutingModule {}
