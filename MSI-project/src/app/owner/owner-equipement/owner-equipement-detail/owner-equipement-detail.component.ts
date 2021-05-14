import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipment } from 'src/app/models/equipment';
import { EquipementService } from 'src/app/services/equipement.service';

@Component({
  selector: 'app-owner-equipement-detail',
  templateUrl: './owner-equipement-detail.component.html',
  styleUrls: ['./owner-equipement-detail.component.css']
})
export class OwnerEquipementDetailComponent implements OnInit {
  equipementDisplayed: Equipment;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private equipementService: EquipementService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.id = +params['id'];
      this.equipementDisplayed = this.equipementService.getEquipement(this.id);
    }
    );

  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDelete() {
    this.equipementService.deleteEquipement(this.id);
    this.router.navigate(['/owner-equipement']);
  }
}
