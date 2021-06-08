import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatDatepickerModule} from '@angular/material/datepicker';
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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserRentalComponent } from './user/user-rental/user-rental.component';
import { ProfileItemComponent } from './user/user-profile/profile-item/profile-item.component';
import { UserAccountService } from './services/userAccount.service';
import { RentEquipmentModule } from './rent-equipment.module';
import { ReservationService } from './services/reservation.service';
import { RentEquipmentSummaryComponent } from './rental/RentEquipmentSummary/RentEquipmentSummary.component';
import { SummaryItemComponent } from './rental/RentEquipmentSummary/SummaryItem/SummaryItem.component';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    SignupComponent,
    HomeComponent,
    UserProfileComponent,
    UserRentalComponent,
    ProfileItemComponent,
    RentEquipmentSummaryComponent,
    SummaryItemComponent

  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    OwnerModule,
    NgbModule,
    MatNativeDateModule,
    RentEquipmentModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    EquipementService,
    CookieService,
    UserAccountService,
    ReservationService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
