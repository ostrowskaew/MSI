import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Equipment } from 'src/app/models/equipment';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-SummaryItem',
  templateUrl: './SummaryItem.component.html',
  styleUrls: ['./SummaryItem.component.css']
})
export class SummaryItemComponent implements OnInit {
  @Input() equipement: Equipment;
  @Input() index : number;

  @Output() itemDeleted: EventEmitter<number> = new EventEmitter();
  constructor(private reservationService: ReservationService) { }

  ngOnInit() {
  }

  deleteItem() {
    this.itemDeleted.emit(this.index);
  }

}
