import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators, Form } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipment } from 'src/app/models/equipment';
import { EquipementService } from 'src/app/services/equipement.service';

@Component({
  selector: 'app-owner-equipement-edit',
  templateUrl: './owner-equipement-edit.component.html',
  styleUrls: ['./owner-equipement-edit.component.css']
})
export class OwnerEquipementEditComponent implements OnInit {

  id: number;
  equipement: Equipment;
  editMode = false;

  constructor(
    private route: ActivatedRoute,
    private equipementService: EquipementService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id= +params['id'];
      this.editMode = params['id'] != -1;
      console.log(this.id);
      if(this.editMode) {
        this.equipement = this.equipementService.getEquipement(this.id);
      }
      else {
        this.equipement = new Equipment(
          this.equipementService.getEquipements().length + 2, "", "","", 0, 0, "", "","", null)
        console.log(this.equipement.id);
      }
    })


  }

  onSubmit() {
    if(this.editMode) {
      this.equipementService.updateEquipement(this.id, this.equipement);
    }
    else {
      this.equipementService.addEquipement(this.equipement);
    }
    this.router.navigate(['/owner-equipement']);
  }

  onCancel() {
    this.router.navigate(['/owner-equipement']);
  }

}
