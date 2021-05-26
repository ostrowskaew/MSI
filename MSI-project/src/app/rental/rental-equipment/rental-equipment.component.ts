import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rental-equipment',
  templateUrl: './rental-equipment.component.html',
  styleUrls: ['./rental-equipment.component.css']
})
export class RentalEquipmentComponent implements OnInit {
  selected : boolean;
  constructor() {}

  ngOnInit() {
    this.selected = false;

  }

  handleSelected(selected: boolean) {
    this.selected = selected;

  }
}
