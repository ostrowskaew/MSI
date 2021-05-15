import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Equipment } from 'src/app/models/equipment';
import { EquipementService } from 'src/app/services/equipement.service';

@Component({
  selector: 'app-owner-equipement-item',
  templateUrl: './owner-equipement-item.component.html',
  styleUrls: ['./owner-equipement-item.component.css']
})
export class OwnerEquipementItemComponent implements OnInit {

  @Input() equipement: Equipment;
  constructor(
     private router: Router,
     private route: ActivatedRoute,
     private equipmentService: EquipementService) { }

  ngOnInit(): void {

  }


}
