import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserRentalComponent } from './user/user-rental/user-rental.component';

const routes: Routes = [
  { path: 'owner-equipement', loadChildren: () => import('./owner.module').then(m => m.OwnerModule) },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: AuthComponent },
  { path: 'profile', component: UserProfileComponent},
  { path: 'rented-equipment', component: UserRentalComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
