import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    children: [
      {
        path: '',
        loadChildren: './list/list.module#ListPageModule'
      },
      {
        path: ':itemId',
        loadChildren: './list/item-detail/item-detail.module#ItemDetailPageModule'
      },
    ]    
  },

  {
    path: 'post',
    loadChildren: './post/post.module#PostPageModule'
  },
  {
    path: 'user-items',
    loadChildren: './user-items/user-items.module#UserItemsPageModule'
  },
  {
    path: 'post',
    loadChildren: () => import('./post/post.module').then( m => m.PostPageModule)
  },
  {
    path: 'user-items',
    loadChildren: () => import('./user-items/user-items.module').then( m => m.UserItemsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
