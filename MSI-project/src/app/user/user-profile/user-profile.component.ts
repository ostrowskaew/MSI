import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/models/role';
import { UserAccount } from 'src/app/models/UserAccount';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  currentUser : UserAccount;
  descriptionChange = false;
  priceChange = false;
  user = Role.USER;
  owner = Role.USER2;

  constructor(private authService: AuthService) {
    this.currentUser = this.authService.getCurrentUser();
    console.log(this.currentUser);
  }

  ngOnInit() {
  }

  changeDescription() : void {
    this.descriptionChange = !this.descriptionChange;
  }

  changePrice() : void {
    this.priceChange = !this.priceChange;
  }

  startTeaching() {
    this.currentUser.instructor = true;
  }

  rentEquipment() {
    this.currentUser.role = Role.USER2 ;
    console.log(this.currentUser);

  }

}
