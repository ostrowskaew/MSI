import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipment } from 'src/app/models/equipment';
import { EquipementService } from 'src/app/services/equipement.service';

@Component({
  selector: 'app-equipment-item',
  templateUrl: './equipment-item.component.html',
  styleUrls: ['./equipment-item.component.css']
})
export class EquipmentItemComponent implements OnInit {
  @Input() equipement: Equipment;
  @Output() selectedChanged: EventEmitter<boolean> = new EventEmitter();
  @Output() equipmentChanged: EventEmitter<Equipment> = new EventEmitter();

  constructor(
     private router: Router,
     private route: ActivatedRoute,
     private equipmentService: EquipementService) { }

  ngOnInit(): void {

  }

  onSelect() {
    this.equipmentChanged.emit(this.equipement);
  }


}
