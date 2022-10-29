import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : 'home',
    loadChildren : () => import('src/home/home.module').then(m => m.HomeModule)
  },
  {
    path : 'about',
    loadChildren : () => import('src/about/about.module').then(m => m.AboutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
