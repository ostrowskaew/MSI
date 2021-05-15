import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators, Form } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipment } from 'src/app/models/equipment';
import { EquipmentType } from 'src/app/models/equipmentType';
import { EquipementService } from 'src/app/services/equipement.service';


@Component({
  selector: 'app-owner-equipement-edit',
  templateUrl: './owner-equipement-edit.component.html',
  styleUrls: ['./owner-equipement-edit.component.css']
})
export class OwnerEquipementEditComponent implements OnInit {

  id: number;
  equipement: any;
  editMode = false;
  type : EquipmentType;

  dictionary = {
    'trapez': 'HARNESS',
    'latawiec': 'KITE',
    'deska kitesurfingowa': 'KITEBOARD',
    'p\u0119dnik': 'SAIL',
    'pianka': 'WETSUIT',
    'deska windsurfingowa': 'WINDBOARD',
  };

  equipmentTypes = [                        // <-- you still need the array
    EquipmentType.HARNESS,
    EquipmentType.KITE,
    EquipmentType.KITESURFINGBOARD,
    EquipmentType.SAIL,
    EquipmentType.WETSUIT,
    EquipmentType.WINDSURFINGBOARD
  ];

  constructor(
    private route: ActivatedRoute,
    private equipementService: EquipementService,
    private router: Router) {
     }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id= +params['id'];
      this.editMode = params['id'] != -1;
      console.log(this.id);
      if(this.editMode) {
        this.equipementService.getEquipment(this.id)
        .subscribe(eq => this.equipement = eq);
      }
      else {
        this.initEquipment();
      }
    })
  }

  initEquipment() {
    this.equipement = {
      urlImage: '',
      brand: '',
      model:'',
      pricePerHour: 0,
      lenderInstructor: 1,
      size: '',
      year: '',
      equipmentType : 'HARNESS'
    }
  }

  onSubmit() {

    if (this.dictionary.hasOwnProperty(this.type)) {
      this.equipement.equipmentType = this.dictionary[this.type];
    }
    if(this.editMode) {
      this.equipementService.addEquipment(this.equipement)
      .subscribe(
        data => console.log(data),
        error => console.log(error));
    }
    else {
      this.equipementService.addEquipment(this.equipement)
      .subscribe(
        data => console.log(data),
        error => console.log(error));;
    }
    this.router.navigate(['/owner-equipement']);
  }

  onCancel() {
    this.router.navigate(['/owner-equipement']);
  }

}
