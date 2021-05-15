import { EquipmentType } from "../models/equipmentType";

export interface EquipementForm {
   urlImage: string,
   brand: string,
   model: string,
   pricePerHour: number,
   size: string,
   description: string,
   year: string,
   equipmentType: EquipmentType
}
