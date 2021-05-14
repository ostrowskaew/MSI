import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Equipment } from 'src/app/models/equipment';

@Component({
  selector: 'app-owner-equipement-item',
  templateUrl: './owner-equipement-item.component.html',
  styleUrls: ['./owner-equipement-item.component.css']
})
export class OwnerEquipementItemComponent implements OnInit {

  @Input() equipement: Equipment;
  @Input() id: number;
  constructor(
     private router: Router,
     private route: ActivatedRoute) { }

  ngOnInit(): void {

  }

  onSelect(){
    this.router.navigate([this.id], {relativeTo: this.route});
  }

}
