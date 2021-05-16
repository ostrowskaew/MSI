import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owner-equipement',
  templateUrl: './owner-equipement.component.html',
  styleUrls: ['./owner-equipement.component.css']
})
export class OwnerEquipementComponent implements OnInit {
  selected : boolean;
  constructor() { }

  ngOnInit() {
    this.selected = false;
    console.log("MM init: " + this.selected);

  }

  handleSelected(selected: boolean) {
    this.selected = selected;
    console.log("MM :" + this.selected);

  }

}
