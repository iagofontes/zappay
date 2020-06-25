import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './components/auth/auth.component';
import { HomeComponent } from './components/home/home.component';
import { ContactListComponent } from './components/contact/contact-list/contact-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { ParentLayoutComponent } from './components/parent-layout/parent-layout.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'contacts', component: ParentLayoutComponent, children: [
    { path: '', component: ContactListComponent },
    { path: 'new', component: ContactComponent },
    { path: ':id/edit', component: ContactComponent },
    // { path: ':id', component: ContactComponent, resolve: [RecipesResolverService] },
    // { path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService] },
  ] },
  // { path: 'auth', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
