import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipement } from 'src/app/models/equipement';
import { EquipementService } from 'src/app/services/equipement.service';

@Component({
  selector: 'app-owner-equipement-detail',
  templateUrl: './owner-equipement-detail.component.html',
  styleUrls: ['./owner-equipement-detail.component.css']
})
export class OwnerEquipementDetailComponent implements OnInit {
  equipementDisplayed: Equipement;
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
