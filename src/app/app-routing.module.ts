import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './guards/authentication.guard';

const routes: Routes = [
  {
    path:'home',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./components/about/about.module').then(m => m.AboutModule)
  },
  {
    path:'gallery', 
    canActivate:[AuthenticationGuard],
    loadChildren: () => import('./components/gallery/gallery.module').then(m => m.GalleryModule)
  },
  {
    path:'', redirectTo: '/home', pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
