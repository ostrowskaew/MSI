import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Role } from 'src/app/models/role';
import { UserAccount } from 'src/app/models/UserAccount';
import { AuthService } from 'src/app/services/auth.service';
import { UserAccountService } from 'src/app/services/userAccount.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  currentUser : UserAccount;
  user = Role.USER;
  owner = Role.USER2;

  constructor(private UserAccountService: UserAccountService, private readonly route: ActivatedRoute) {
  }

  ngOnInit() {
    this.currentUser = this.route.snapshot.data.user;
    console.log(this.route.snapshot.data.user);
  }

  changeDescription(description: any) : void {
    this.UserAccountService.updateDescription(description, this.currentUser.login );
  }

  changePrice(price: any) : void {
    this.UserAccountService.updatePricePerHour(price, this.currentUser.login);
  }

  startTeaching() {
    this.currentUser.instructor = true;
    this.UserAccountService.updateIsInstructor(true, this.currentUser.login);
  }

  rentEquipment() {
    this.currentUser.role = Role.USER2 ;
    this.UserAccountService.updateRole(Role.USER2, this.currentUser.login);
  }

}
