import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { OwnerModule } from './owner.module';
import { EquipementService } from './services/equipement.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    SignupComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    OwnerModule
  ],
  providers: [EquipementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
