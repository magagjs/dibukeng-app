import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';
import { BranchesComponent } from './components/branches/branches.component';
import { StaffComponent } from './components/staff/staff.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'products', component: ProductsComponent, data: {breadcrumb: 'Products', title: 'Dibukeng Products'}},
  {path: 'about', component: AboutComponent, data: {breadcrumb: 'About Us'}},
  {path: 'branches', component: BranchesComponent, data: {breadcrumb: 'Branches'}},
  {path: 'staff', component: StaffComponent, data: {breadcrumb: 'Staff'}},
  {path: 'gallery', component: GalleryComponent, data: {breadcrumb: 'Gallery'}},
  {path: '', component: HomeComponent},
  {path: 'page-not-found', component: PageNotFoundComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'page-not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
