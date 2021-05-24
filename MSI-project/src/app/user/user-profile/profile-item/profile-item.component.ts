import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserAccount } from 'src/app/models/UserAccount';

@Component({
  selector: 'app-profile-item',
  templateUrl: './profile-item.component.html',
  styleUrls: ['./profile-item.component.css']
})
export class ProfileItemComponent implements OnInit {
  @Input() currentUser : UserAccount;
  @Input() itemName : string;
  @Input() item : any;
  @Input() label : string;
  @Output() newValue: EventEmitter<any> = new EventEmitter();
  isItemChanged = false;

  constructor() { }

  ngOnInit() {
  }

  onItemChanged() {
    this.isItemChanged = !this.isItemChanged;
    if(this.isItemChanged == false) {
      this.newValue.emit(this.item);
    }
  }

}
